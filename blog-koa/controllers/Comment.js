const CommentModel = require('../models/CommentModel');
// const { getAddress } = require('../utils')

class Comment {
    /**
     * 创建
     * @param ctx username 名称
     * @param ctx avatar 头像
     *
     * @returns 成功创建返回分类详情数据，失败返回错误信息
     */
    static async webcreate(ctx) {
        let { username, avatar, email, content, status = 3, pid = 0 } = ctx.request.body;
        let params = {
            username,
            avatar,
            email,
            content,
            status, // 1 通过 2 拒绝  3 待审核  '' 全部
            localtion: '',
            pid,
            author: username
        };

        try {
            await CommentModel.create(params);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `创建留言成功`,
                // data,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `创建留言失败`,
                data: err,
            };
        }
    }

    /**
     * 创建
     * @param ctx username 名称
     * @param ctx avatar 头像
     *
     * @returns 成功创建返回分类详情数据，失败返回错误信息
     */
    static async create(ctx) {
        let { username, avatar, email, content, status = 3, pid = 0 } = ctx.request.body;
        let device = ctx.request['user-agent'];
        // getAddress(ctx.request.host)
        // getAddress('118.25.35.81')

        let params = {
            username,
            avatar,
            email,
            content,
            status, // 1 通过 2 拒绝  3 待审核  '' 全部
            // device,
            localtion: '',
            pid,
            author: ctx.user ? ctx.user.username : 'admin'
        };

        // 检测参数是否存在为空
        // let errors = [];
        // for (let item in params) {
        //     if (!params[item]) {
        //         let index = errors.length + 1;
        //         errors.push('错误' + index + ': 参数: ' + item + '不能为空');
        //     }
        // }
        // if (errors.length > 0) {
        //     ctx.response.status = 412;
        //     ctx.body = {
        //         code: 412,
        //         message: errors,
        //     };
        //     return false;
        // }

        try {
            await CommentModel.create(params);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `创建留言成功`,
                // data,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `创建留言失败`,
                data: err,
            };
        }
    }



    /**
     * 获取列表
     * @param ctx
     *
     * @returns 分类数据
     */
    static async list(ctx) {
        let params = ctx.query;
        let data = await CommentModel.list(params)
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询留言成功`,
            data,
        };
    }


    /**
     * 获取 blog 列表 列表
     * @param ctx
     *
     * @returns 分类数据
     */
    static async weblist(ctx) {
        let params = ctx.query;
        let data = [],
            data2 = [];

        await CommentModel.weblist(params).then(async res => {
            data2 = res.data.filter(item => item.pid > 0)
            const { totalCount, totalPages, data } = await CommentModel.weblistTotalCount(params)

            data.forEach(item => {
                data2.forEach(code => {
                    if (item.id === code.pid) {
                        item.list = [code]
                    } else {
                        item.list = []
                    }
                })
            })



            res = {
                ...res,
                totalCount,
                totalPages,
                data
            }
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `查询留言成功。`,
                data: res
            };
        })
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

        let {
            username,
            avatar,
            email,
            content
        } = ctx.request.body;

        let params = {
            username,
            avatar,
            email,
            content
        };

        try {
            await CommentModel.update(id, params);
            // let data = await CommentModel.detail(id);

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `更新留言成功`,
                // data,
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `更新留言失败`,
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
            await CommentModel.delete(id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: "删除留言成功"
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
        let { status } = ctx.request.body;

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
            await CommentModel.hidden(id, { status });
            let data = await CommentModel.detail(id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `操作成功`,
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
module.exports = Comment;