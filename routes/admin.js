var express = require('express')
var router = express.Router()
// 引入处理逻辑的JavaScript文件（需要注意是否有路由用到其他文件，这里只展示本小节使用文件，如果要是用其他文件均需要引入）
var{ setArticle } = require('../controller/admin')



router.post('/setArticle', setArticle)








mouder.exports = router
