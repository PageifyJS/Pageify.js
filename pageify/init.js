function initiate(){
   retrievePage("default_load", "content");
   loadScript('./pageify/functions.js');
   loadScript('./pageify/config.js');
   loadScript('./pageify/interpreter.js');
   loadScript('./pageify/routes.js');
   interpret()
}
