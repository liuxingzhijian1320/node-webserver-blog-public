const db = require('../config/db')
const Sequelize = db.sequelize
const User = Sequelize.import('../schema/user.js')

User.sync({ force: false }); //?

class UserModel {
    /**
     * 创建用户
     * @param user
     * @returns {Promise<boolean>}
     */

    static async create(userinfo) {
        let { username, password, email } = userinfo;
        await User.create({
            username,
            password,
            email
        })
        return true;
    }

    /**
     * 查询用户信息
     * @param username  姓名
     * @returns {Promise.<*>}
     */
    static async username(username) {
        return await User.findOne({
            where: {
                username
            }
        })
    }

    /**
     * 删除用户
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        await User.destroy({
            where: {
                id,
            }
        })
        return true
    }

    /**
     * 查询用户列表
     * @returns {Promise<*>}
     */
    static async findAllUserList(params) {
        return await User.findAll({
            // attributes: ['id', 'username', 'email'] // 指定返回那些字段
        })
    }



}

module.exports = UserModel