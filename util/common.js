let util = {}
util.getReturnData = (code, message = '', data = []) => {
    // 保证数据格式
    if (!data) {
        data = []
    }
    return { code: code, message: message, data: data }
}

module.exports = util
