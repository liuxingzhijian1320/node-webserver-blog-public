const CategoryModel = require('../models/CategoryModel');

class Category {
    /**
     * 创建分类
     * @param ctx name        分类名称
     *
     * @returns 成功创建分类返回分类详情数据，失败返回错误信息
     */
    static async create(ctx) {
        let { name } = ctx.request.body;

        let params = {
            name,
            author: ctx.user.username
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
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                message: errors,
            };
            return false;
        }

        try {
            await CategoryModel.create(params);
            // const data = await CategoryModel.detail(id);

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `创建分类成功`,
                // data,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `创建分类失败`,
                data: err,
            };
        }
    }


    /**
     * 获取分类列表
     * @param ctx
     *
     * @returns 分类数据
     */
    static async list(ctx) {
        let params = ctx.query;
        let data = await CategoryModel.list(params)
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询分类成功`,
            data,
        };
    }

    /**
     * 更新分类数据
     * @param ctx id 文章分类ID
     * @param ctx name         分类名称
     *
     * @returns 更新成功返回更新后的数据，失败返回错误信息
     */
    static async update(ctx) {
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

        let { name } = ctx.request.body;
        let params = {
            name,
        };

        try {
            await CategoryModel.update(id, params);
            // let data = await CategoryModel.detail(id);

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `更新分类成功`,
                // data,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `更新失败`,
                data: err,
            };
        }
    }

    /**
     * 删除分类
     * @param ctx id 分类ID
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
            await CategoryModel.delete(id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: "删除分类成功"
            }

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: err
            }
        }
    }



}
module.exports = Category;