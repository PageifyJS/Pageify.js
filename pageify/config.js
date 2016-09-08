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
 default_load : {"url":"./page1.html","callback":"function(){}","route":"/"},
 page1 : {"url":"./page1.html","callback":"function(){}","route":"page1"},
 page2 : {"url":"./page2.html","callback":"function(){}","route":"page2"},
 test : {"url":"http://crossorigin.me/https://scratch.mit.edu/discuss/topic/207160/?page=11#post-2196614","callback":"function(){}","route":"test"}
}

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
};
