import Http from 'src/http';

export default class Func {
    static getAcctMenu() {
        let url = `${process.env.API_ROOT}/ops/api/menu/list`;
        return Http.get(url, {})
    }
}