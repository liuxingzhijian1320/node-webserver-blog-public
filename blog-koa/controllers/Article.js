const ArticleModel = require('../models/ArticleModel');

class Article {
    /**
     * 创建文章
     * @param ctx title            文章标题
     * @param ctx introduction     文章简介
     * @param ctx categoryId       文章分类ID
     * @param ctx tag              文章标签
     * @param ctx cover            文章封面
     * @param ctx content          文章内容
     *
     * @returns  成功创建文章返回文章详情数据，失败返回错误信息
     */
    static async create(ctx) {
        let {
            title,
            author,
            introduction,
            categoryId = 1,
            tag,
            cover,
            content,
            bucket
        } = ctx.request.body;
        let params = {
            title,
            author,
            introduction,
            categoryId,
            tag,
            cover,
            content,
            bucket
        };

        // 检测参数是否存在为空
        let errors = [];
        for (let item in params) {
            if (!params[item]) {
                let index = errors.length + 1;
                errors.push('错误' + index + ': 参数: ' + item + '不能为空');
            }
        }
        if (errors.length > 0) {
            ctx.response.status = 422;
            ctx.body = {
                code: 422,
                message: errors,
            };
            return false;
        }

        try {
            // 查询分类是否存在
            // let detail = await CategoryModel.detail(categoryId);
            // if (!detail) {
            //     ctx.response.status = 412;
            //     ctx.body = {
            //         code: 412,
            //         message: `分类ID：${categoryId}，不存在！`
            //     }
            //     return false;
            // }

            // 创建文章
            const { id } = await ArticleModel.create(params);
            // 查询文章
            // const data = await ArticleModel.detail(id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `创建文章成功`,
                id,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `创建文章失败`,
                data: err,
            };
        }
    }

    /**
     * 获取文章列表
     * @param ctx
     *
     * @returns 文章列表数据
     */
    static async list(ctx) {
        let params = ctx.query;
        try {
            const data = await ArticleModel.list(params);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `查询文章列表成功`,
                data,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `查询文章列表失败`,
                data: err,
            };
        }
    }

    /**
     * 热门文章列表
     * @param ctx id  文章ID
     *
     * @returns 文章的详情
     */
    static async webhotlist(ctx) {
        try {
            const data = await ArticleModel.webhotlist();

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `查询热门文章列表成功`,
                data,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `查询热门文章列表失败`,
                data: err,
            };
        }
    }

    /**
     * 查询文章详情
     * @param ctx id  文章ID
     *
     * @returns 文章的详情
     */
    static async detail(ctx) {
        // 文章ID
        let { id } = ctx.params;

        // 检测是否传入ID
        if (!id || isNaN(id)) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                message: `请传入正确的用户ID`,
            };
            return false;
        }

        try {
            let data = await ArticleModel.detail(id);

            if (data !== null) {
                // 浏览次数增加1
                let browser = data.browser + 1;
                await ArticleModel.updateBrowser(id, browser);
            }

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `查询文章成功`,
                data,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `查询文章失败`,
                data: err,
            };
        }
    }


    /**
     * 更新导航条数据
     * @param ctx title            文章标题
     * @param ctx introduction     文章简介
     * @param ctx categoryId       文章分类ID
     * @param ctx tag              文章标签
     * @param ctx cover            文章封面
     * @param ctx content          文章内容
     *
     * @returns 更新成功则返回更新后的文章数据，失败返回更新失败的原因
     */
    static async update(ctx) {
        let { id } = ctx.request.body;
        // 检测是否传入ID
        if (!id || isNaN(id)) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                message: `请传入正确的ID`,
            };
            return false;
        }

        // 接收参数
        let { title, author, introduction, category_id, tag, cover, content } = ctx.request.body;
        let params = {
            title,
            author,
            introduction,
            category_id,
            tag,
            cover,
            content
        }

        try {
            // 更新
            let da = await ArticleModel.update(id, params);
            // 查询
            let data = await ArticleModel.detail(id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `更新文章成功`,
                data,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `更新文章失败`,
                data: err,
            };
        }
    }

    /**
     * 删除文章
     * @param ctx id 文章ID
     * @returns  删除成功返回true，失败返回错误原因
     */
    static async delete(ctx) {
        let { id } = ctx.params;
        // 检测是否传入ID
        if (!id || isNaN(id)) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                message: `请传入正确的ID`,
            };
            return false;
        }

        try {
            await ArticleModel.delete(id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: "删除文章成功"
            }

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: err
            }
        }
    }


    /**
     * 软删除文章数据（隐藏数据）
     * @param ctx id 文章ID
     * @param ctx is_del 是否软删除
     * @returns {Promise<boolean>}
     */
    static async hidden(ctx) {
        let { id } = ctx.params;
        let { is_del } = ctx.request.body;

        // 检测是否传入ID
        if (!id || isNaN(id)) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                message: `请传入正确的ID`,
            };
            return false;
        }

        try {
            await ArticleModel.hidden(id, { is_del });
            let data = await ArticleModel.detail(id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `修改文章成功`,
                data
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `修改文章失败`,
                data: err,
            };
        }
    }

}

module.exports = Article;