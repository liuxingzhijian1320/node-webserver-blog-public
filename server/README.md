## blog 接口文档

## 返回状态吗

200 成功
201 结果校验失败
202 参数违法
300 游客无权限操作
401 没有权限
403 ip 被限流／被封
422 参数错误

## 字段

1. 用户表 user

| 字段        | 解释     | type      | 枚举值                 |
| ----------- | -------- | --------- | ---------------------- |
| id          | 主键     | int       |
| nickname    | 昵称     | string    |                        |
| username    | 账号     | string    | 登录账号(邮箱／手机号) |
| password    | 密码     | string    |                        |
| root        | 等级     | int       | 0.默认 99.root         |
| status      | 用户状态 | int       | 1.默认 0 禁用          |
| create_time | 创建时间 | timestamp |
| update_time | 更新时间 | timestamp |

2. 文章表 article

| 字段         | 解释       | type      |
| ------------ | ---------- | --------- | ------------------------------ |
| id           | 主键       | int       |
| title        | 文章标题   | string    |
| author       | 文章作者   | string    |
| introduction | 文章介绍   | string    |
| tag          | 文章标签   | string    |
| cover        | 文章封面   | string    |
| bucket       | 目录层级   | string    |
| content      | 文章内容   | string    | 数据字段为：text，长度 1000000 |
| browser      | 浏览次数   | int       |
| is_del       | 是否软删除 | int       | 1 上架 2 下架                  |
| istop        | 置顶       | int       | 0 普通 1 置顶                  |
| create_time  | 创建时间   | timestamp |
| update_time  | 更新时间   | timestamp |

3. 文章分类表 category

| 字段        | 解释     | type      |
| ----------- | -------- | --------- |
| id          | 主键     | int       |
| name        | 名称     | string    |
| create_time | 创建时间 | timestamp |
| update_time | 更新时间 | timestamp |

4. 文章评论

- 4.1 评论表 comment

| 字段        | 解释        | type      |
| ----------- | ----------- | --------- |
| id          | 主键        | int       |
| article_id  | 文章 id     | int       |
| content     | 内容        | string    |
| user_id     | 评论用户 id | int       |
| create_time | 创建时间    | timestamp |
| update_time | 更新时间    | timestamp |

- 4.2 回复表 reply

| 字段        | 解释        | type      |
| ----------- | ----------- | --------- |
| id          | 主键        | int       |
| comment_id  | 评论 id     | int       |
| content     | 内容        | string    |
| to_id       | 目标用户 id | int       |
| from_id     | 评论用户 id | int       |
| create_time | 创建时间    | timestamp |
| update_time | 更新时间    | timestamp |

5. 验证码表 code

| 字段        | 解释     | type      |
| ----------- | -------- | --------- |
| id          | 主键     | int       |
| code        | 名称     | string    |
| username    | 账号     | string    |
| create_time | 创建时间 | timestamp |
| update_time | 更新时间 | timestamp |

6. IP 表 ip

| 字段        | 解释       | type                 |
| ----------- | ---------- | -------------------- |
| id          | 主键       | int                  |
| ip          | 名称       | string [primary key] |
| client      | 客户端     | string               |
| day         | 单日次数   | int                  |
| total       | 总访问次数 | int                  |
| userId      | 用户 id    | int                  |
| create_time | 创建时间   | timestamp            |
| update_time | 更新时间   | timestamp            |

6. 登录日志 login

| 字段        | 解释     | type      |
| ----------- | -------- | --------- |
| id          | 主键     | int       |
| ip          | 名称     | string    |
| client      | 客户端   | string    |
| type        | 类型     | int       |
| userId      | 用户 id  | int       |
| create_time | 创建时间 | timestamp |
| update_time | 更新时间 | timestamp |
