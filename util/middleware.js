const { ALLOW_APP } = require('../config/app')
const util = require('./common')
exports.checkAPP = (req, res, next) => {
    console.log(req.headers)
    if (!ALLOW_APP.includes(req.headers.fapp)) {
        res.json(util.getReturnData(500, '来源不明确'))
    } else {
        next()
    }
}
