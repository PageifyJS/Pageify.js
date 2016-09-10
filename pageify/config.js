/*
 _____      _   _   _                 
/  ___|    | | | | (_)                
\ `--.  ___| |_| |_ _ _ __   __ _ ___ 
 `--. \/ _ \ __| __| | '_ \ / _` / __|
/\__/ /  __/ |_| |_| | | | | (_| \__ \
\____/ \___|\__|\__|_|_| |_|\__, |___/
                             __/ |    
                            |___/     
*/
//Force https
//Disabling this setting could result in insecure content being displayed
//it is recommended to keep this setting enabled
force_https = false;

/*
______  ___  _____  _____ _____
| ___ \/ _ \|  __ \|  ___/  ___|
| |_/ / /_\ \ |  \/| |__ \ `--.
|  __/|  _  | | __ |  __| `--. \
| |   | | | | |_\ \| |___/\__/ /
\_|   \_| |_/\____/\____/\____/
Specify all pages that you will wish to load here
*/
var pages = {
 "404_page" : {"url":"./404.html","callback":"function(){}","route":"/404"},
 default_load : {"url":"./page1.html","callback":"function(){}","route":"/"},
 page1 : {"url":"./page1.html","callback":"function(){}","route":"/page1"},
 page2 : {"url":"./page2.html","callback":"function(){}","route":"/page2"},
 test : {"url":"https://crossorigin.me/https://scratch.mit.edu/discuss/topic/207160/?page=11#post-2196614","callback":"function(){}","route":"/test"},
 test2 : {"url":"https://crossorigin.me/http://ahitt-industries.com","callback":"function(){}","route":"/test2"},
 google : {"url":"https://crossorigin.me/https://google.com","callback":"function(){}","route":"/google"}
}

retrievePage("default_load", "content");

/*
 _   _            _       _     _
| | | |          (_)     | |   | |
| | | | __ _ _ __ _  __ _| |__ | | ___  ___
| | | |/ _` | '__| |/ _` | '_ \| |/ _ \/ __|
\ \_/ / (_| | |  | | (_| | |_) | |  __/\__ \
 \___/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/
Declare all PageVars that will be changed.
All PageVars are stored in an array to make it easy to use and change yet extremely powerful!
*/
var variables = {
    name: "Pageify",
    is: "is",
    copy_right: "&copy HittmanA 2016 and forever!",
    error_page:page
};

/*
 ________  ___  ___  _____  _____ _____ 
|_   _|  \/  | / _ \|  __ \|  ___/  ___|
  | | | .  . |/ /_\ \ |  \/| |__ \ `--. 
  | | | |\/| ||  _  | | __ |  __| `--. \
 _| |_| |  | || | | | |_\ \| |___/\__/ /
 \___/\_|  |_/\_| |_/\____/\____/\____/ 
*/
var images = [
 "https://avatars0.githubusercontent.com/u/10731781?v=3&s=30"
 ]
