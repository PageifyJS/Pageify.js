function initiate(){
   retrievePage(default_load, "content");
   document.getElementById("init").innerHTML=load("./pageify/functions.js");
   load("./pageify/routes.js");
   interpret()
}
