import Http from 'src/http';
let API = process.env.API_ROOT;
export default class Api {
    // 文章列表
    static getArticleList(params = {}) {
        let url = `${API}/api/article/weblist`;
        return Http.get(url, params)
    }

    // 文章详情
    static getArticleDetail({ id }) {
        let url = `${API}/api/article/webdetail/${id}`;
        return Http.get(url, {})
    }

    // 热门文章
    static getHotArticleList(params = {}) {
        let url = `${API}/api/article/webhotlist`;
        return Http.get(url, params)
    }

    // 个人分类
    static getHotCategory(params = {}) {
        let url = `${API}/api/articletocategory/list`;
        return Http.get(url, params)
    }

    // 分类列表
    static getCategory(params = {}) {
        let url = `${API}/api/category/weblist`;
        return Http.get(url, params)
    }

    // 评论列表
    static getCommentList(params = {}) {
        let url = `${API}/api/comment/weblist`;
        return Http.get(url, params)
    }

    // 文章评论列表
    static getArticleCommentList(params = {}) {
        let url = `${API}/api/articlecomment/weblist`;
        return Http.get(url, params)
    }

    // 文章评论列表
    static createArticleComment(params = {}) {
        let url = `${API}/api/articlecomment/webcreate`;
        return Http.post(url, 'post', params)
    }

    // 创建留言
    static createComment(params = {}) {
        let url = `${API}/api/comment/webcreate`;
        return Http.post(url, 'post', params)
    }


    /**
     * github
     */
    static async getGithubToken(params = {}) {
        let url = `${API}/api/github`;
        return Http.post(url, 'post', params)
    }

    static async getGithubUserInfo(params = {}) {
        let url = `${API}/api/githubUserInfo`;
        return Http.post(url, 'post', params)
    }
}