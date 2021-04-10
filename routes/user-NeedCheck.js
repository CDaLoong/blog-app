var express = require('express')
var router = express.Router();
// 引入逻辑处理文件
var { getUserInfo, changeUserInfo } = require('../controller/userNeedCheck')

// 获取用户信息
router.get('/info/:username', getUserInfo)

// 修改用户信息
router.post('/changeInfo', changeUserInfo)

module.exports = router
