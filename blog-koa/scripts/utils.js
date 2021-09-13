class Utils {
    static RegExpEmail(val) {
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (!reg.test(val)) {
            return false
        } else {
            return true
        }
    }
}

module.exports = Utils