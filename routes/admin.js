var express = require('express')
var router = express.Router()
// 引入处理逻辑的JavaScript文件（需要注意是否有路由用到其他文件，这里只展示本小节使用文件，如果要是用其他文件均需要引入）
var{ setArticle, showArticle, setArticleType } = require('../controller/admin')


// 发布文章
router.post('/setArticle', setArticle)
// 文章的发布和删除
router.post('/showArticle', showArticle)
// 分类的发布
router.post('/setArticleType', setArticleType)








mouder.exports = router
