const db = require('../config/db');
const Sequelize = db.sequelize;
const Category = Sequelize.import('../schema/category');

Category.sync({ force: false });

class CategoryModel {
    /**
     * 创建分类
     * @param data
     * @returns {Promise<*>}
     */
    static async create(data) {
        return await Category.create(data)
    }

    /**
     * 获取文章列表
     * @returns {Promise<*>}
     */
    static async list(params) {
        const { author } = params;
        return await Category.findAll({
            where: {
                author
            },
        })
    }

    /**
     * 更新分类数据
     * @param id 分类ID
     * @param data 分类更新的属性参数
     */
    static async update(id, data) {
        return await Category.update(data, {
            where: {
                id
            },
            fields: ['name']
        });
    }

    /**
     * 删除分类
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        await Category.destroy({
            where: {
                id,
            }
        })
        return true
    }



}

module.exports = CategoryModel