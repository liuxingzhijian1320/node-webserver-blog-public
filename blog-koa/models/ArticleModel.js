const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = Sequelize.Op;
const Article = Sequelize.import('../schema/article.js');
const Category = Sequelize.import('../schema/category');
const ArticleToCategory = Sequelize.import('../schema/articleTocategory');



Category.belongsToMany(Article, {
    through: {
        model: ArticleToCategory,
    },
    foreignKey: 'categoryId',
})
Article.belongsToMany(Category, {
    through: {
        model: ArticleToCategory,
    },
    foreignKey: 'articleId',
})

Article.sync({ force: false });
ArticleToCategory.sync({ force: false });

class ArticleModel {
    /**
     * 创建文章
     * @param data 创建文章的参数
     * @returns {Promise<void>}
     */
    static async create(data) {

        let params = {
            ...data,
            tag: data.tag.join(',')
        }
        let result = await Article.create(params);
        let tags = await Category.findAll({ where: { id: data.tag } });
        // setCategories  set[category]s 自动添加的方法
        await result.setCategories(tags)


        // this.associationTable(result.id, data.tag)

        return result
    }

    /**
     * 获取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async detail(id) {
        return await Article.findOne({
            where: id,
        });
    }

    /**
     * 获取文章列表
     * @returns {Promise<*>}
     */
    static async list(params) {
        let { author, pageIndex, pageSize, keyword, articleId = null, is_del = 10 } = params;

        // 动态搜索字段
        let newWhere = {
            author,
            is_del: is_del == 10 ? [0, 1] : [`${is_del}`],
            title: {
                // 模糊查询
                [Op.like]: '%' + keyword + '%',
            },
        }
        if (articleId) {
            newWhere = {
                ...newWhere,
                id: articleId.split(',')
            }
        }
        let ret = await Article.findAndCountAll({
            limit: +pageSize,
            offset: (pageIndex - 1) * (+pageSize),
            where: newWhere,
            // 关联查询
            include: [{
                model: Category,
                through: {
                    // as: 'tagsId',
                    attributes: []
                },
                attributes: {
                    // exclude: ['author'],
                }
            }],
            order: [
                ['id', 'DESC']
            ],
        });

        return {
            data: ret.rows,
            pageIndex: +pageIndex,
            pageSize: +pageSize,
            count: ret.count,
            totalCount: ret.count,
            totalPages: Math.ceil(ret.count / +pageSize),
        };
    }

    /**
     * 获取热门文章列表
     * @returns {Promise<*>}
     */
    static async webhotlist() {
        let ret = await Article.findAndCountAll({
            raw: true,
            where: {
                // author,
                is_del: 0,
                browser: {
                    // 浏览量 大于 100
                    [Op.gte]: 100
                }
            },
            order: [
                ['id', 'DESC']
            ],
        });
        return {
            data: ret.rows,
        };
    }


    /**
     * 获取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async detail(id) {
        return await Article.findOne({
            where: {
                id,
                // is_del: 0,
            },
            include: [{
                model: Category,
                through: {
                    // as: 'tagsId',
                    attributes: []
                },
                attributes: {
                    // exclude: ['author'],
                }
            }],
        });
    }

    /**
     * 更新文章 访问量 数据
     * @param id 文章ID
     * @param browser 文章更新的属性参数
     */
    static async updateBrowser(id, browser) {
        await Article.update({ browser }, {
            where: {
                id
            },
            fields: ['browser']
        })
        return true;
    }

    /**
     * 更新文章数据
     * @param id 文章ID
     * @param data 文章更新的属性参数
     */
    static async update(id, data) {
        await Article.update(data, {
            where: {
                id
            },
            fields: ['title', 'browser', 'author', 'introduction', 'is_del', 'tag', 'cover', 'content', 'bucket']
        })

        let tagArr = data.tag ? data.tag.split(',') : []
        this.associationTable(id, tagArr)

        return true;
    }

    // 关联表更新
    static async associationTable(id, tagid) {
        // 全删除 （速度快）
        await ArticleToCategory.destroy({
            where: {
                article_id: id
            }
        });
        // 关联表 添加
        let result = await Article.findOne({
            where: {
                id,
            }
        });
        let tags = await Category.findAll({ where: { id: tagid } });
        result.setCategories(tags)
    }

    /**
     * 删除文章
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        await Article.destroy({
            where: {
                id,
            }
        })
        this.associationTable(id, [])
        return true
    }

    /**
     * 上下架文章
     * @param id 文章ID
     * @param data 文章
     */
    static async hidden(id, data) {
        return await Article.update(data, {
            where: {
                id,
            },
            fields: ['is_del'],
        });
    }
}

module.exports = ArticleModel;