var express = require('express');
var router = express.Router();
const util = require('../util/common')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// 获取footer显示内容
router.get('/getFooter', function (req, res, next) {
  res.json(util.getReturnData(0, 'success'))
})

module.exports = router;
