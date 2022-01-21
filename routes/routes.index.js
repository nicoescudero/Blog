const {Router}=require('express');
const routes=Router();
const blogCtrl=require('../controllers/posts');

routes.get('/',blogCtrl.getAllPosts);
routes.get('/loadPost/:post',blogCtrl.loadPost);
routes.get('/social-medias',(req,res)=>res.render('social'));
routes.get('/whoami',(req,res)=>res.render('whoami'));


module.exports=routes;