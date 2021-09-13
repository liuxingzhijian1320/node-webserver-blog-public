const ArticleToCategoryModel = require('../models/articleTocategoryModel');

class ArticleToCategory {

    /**
     * 获取分类列表
     * @param ctx
     *
     * @returns 分类数据
     */
    static async list(ctx) {
        let data = await ArticleToCategoryModel.list()
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询个人分类成功`,
            data,
        };
    }

}
module.exports = ArticleToCategory;