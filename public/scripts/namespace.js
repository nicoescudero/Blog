const posts=document.getElementsByClassName('link-button');

for(var i=0; i<posts.length; i++) {
    posts[i].textContent=posts[i].textContent.replaceAll('_',' ');
}