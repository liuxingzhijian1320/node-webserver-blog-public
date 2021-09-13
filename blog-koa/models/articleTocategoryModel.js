const db = require('../config/db');
const Sequelize = db.sequelize;
const ArticleToCategory = Sequelize.import('../schema/articleTocategory');

class ArticleToCategoryModel {

    /**
     * 获取列表
     * @returns {Promise<*>}
     */
    static async list() {
        return await ArticleToCategory.findAll()
    }

}

module.exports = ArticleToCategoryModel;