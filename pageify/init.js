function initiate(){
   retrievePage(pages.default_load.url, "content");
   document.getElementById("init").innerHTML=load("./pageify/functions.js");
   load("./pageify/routes.js");
   interpret()
}
