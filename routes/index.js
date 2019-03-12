
/*
 * GET home page.
 */
var express = require('express');
var router = express.Router();
//console.log(router);
router.get('/',function(req, res,callbacks){
  res.render('index', { title: 'Express' })});
//exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
//};
//module.exports = router;
