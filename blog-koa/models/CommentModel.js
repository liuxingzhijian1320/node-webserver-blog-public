const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = Sequelize.Op;
const Comment = Sequelize.import('../schema/comment');

Comment.sync({ force: false });

class CommentModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async create(data) {
        return await Comment.create(data)
    }

    /**
     * 获取列表
     * @returns {Promise<*>}
     */
    static async list(params) {
        const { pageIndex, pageSize, keyword, author, status } = params;
        let ret = await Comment.findAndCountAll({
            limit: +pageSize,
            offset: (pageIndex - 1) * (+pageSize),
            where: {
                content: {
                    // 模糊查询
                    [Op.like]: '%' + keyword + '%',
                },
                status: !status ? [1, 2, 3] : [`${status}`], // 1 通过 2 拒绝  3 待审核  '' 全部
            },

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
     * 获取 web博客列表
     * @returns {Promise<*>}
     */
    static async weblist(params) {
        const { pageIndex, pageSize } = params;
        let ret = await Comment.findAndCountAll({
            raw: true,
            limit: +pageSize,
            offset: (pageIndex - 1) * (+pageSize),
            where: {
                status: 1, // 1 通过 2 拒绝  3 待审核  '' 全部
                // pid: 0
            },
            order: [
                ['id', 'DESC']
            ],
        })

        return {
            data: ret.rows,
            pageIndex: +pageIndex,
            pageSize: +pageSize,
            // count: ret.count,
            totalCount: ret.count,
            totalPages: Math.ceil(ret.count / +pageSize),
        };
    }

    /**
     * 获取 web博客列表 totalCount
     * @returns {Promise<*>}
     */
    static async weblistTotalCount(params) {
        const { pageIndex, pageSize } = params;
        let ret = await Comment.findAndCountAll({
            raw: true,
            limit: +pageSize,
            offset: (pageIndex - 1) * (+pageSize),
            where: {
                status: 1, // 1 通过 2 拒绝  3 待审核  '' 全部
                pid: 0
            },
            order: [
                ['id', 'DESC']
            ],
        })

        return {
            data: ret.rows,
            totalCount: ret.count,
            totalPages: Math.ceil(ret.count / +pageSize),
        };
    }


    /**
     * 获取 web博客pid列表
     * @returns {Promise<*>}
     */
    static async webpidlist(pid) {
        let ret = await Comment.findAll({
            raw: true,
            where: {
                status: 1,
                pid
            },
        })

        // console.info(99999, ret)
        return ret
    }


    /**
     * 更新数据
     * @param id 分类ID
     * @param data 分类更新的属性参数
     */
    static async update(id, data) {
        return await Comment.update(data, {
            where: {
                id
            },
            fields: ['username', 'avatar', 'email', 'content']
        });
    }

    /**
     * 删除
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        await Comment.destroy({
            where: {
                id,
            }
        })
        return true
    }


    /**
     * 获取详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async detail(id) {
        return await Comment.findOne({
            where: {
                id,
            },
        });
    }


    /**
     * 通过 ／ 拒绝
     * @param id
     * @param data
     */
    static async hidden(id, data) {
        return await Comment.update(data, {
            where: {
                id,
            },
            fields: ['status'],
        });
    }


}

module.exports = CommentModel;