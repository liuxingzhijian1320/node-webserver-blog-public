const moment = require('moment');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('articleComment', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // parent_id
        pid: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        // article_id
        aid: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        // 名称
        username: {
            type: DataTypes.STRING(30),
            field: 'username',
            allowNull: false
        },
        // 头像
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: false,
            field: 'avatar',
        },
        // 回复谁
        answer: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'answer',
        },
        // 邮箱
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            field: 'email',
        },
        // 内容
        content: {
            type: DataTypes.TEXT,
            field: 'content',
            allowNull: false
        },
        // 状态
        status: {
            type: DataTypes.INTEGER.UNSIGNED,
            field: 'status',
            allowNull: false,
            defaultValue: 3
        },
        // 设备
        device: {
            type: DataTypes.TEXT,
            field: 'device',
            allowNull: true
        },
        // 位置
        location: {
            type: DataTypes.TEXT,
            field: 'location',
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })
}