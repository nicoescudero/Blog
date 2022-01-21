const controller={};
const showdown=require('showdown');
const fs= require('fs');

const converter=new showdown.Converter();

controller.getAllPosts=async(req,res)=>{
    fs.readdir('./public/markdown',function(err, data){
        if(err){
            console.log(err);
            return ;
        }
        else {
            var archivos=[];
            data.forEach(element => {
                element=element.replace('.md','');
                archivos.push(element);
            });
            res.render('index',{archivos})
        }
    })
}

controller.loadPost=async(req,res)=>{
    var markdown='';
    let post=req.params.post;
    await fs.readFile(`./public/markdown/${post}.md`,async(error,archivo)=>{
        if(error){
            console.log(`ERROR: ${error}`);
            return res.render('index');
        }
        else {
            markdown= await converter.makeHtml(String(archivo));
            return res.render('post',{markdown:markdown});
        }
    })
}

module.exports=controller;