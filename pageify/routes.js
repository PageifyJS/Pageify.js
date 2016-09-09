var querys = window.location.search.slice(1).split('&').reduce(function _reduce (/*Object*/ a, /*String*/ b) {b = b.split('=');a[b[0]] = decodeURIComponent(b[1]);return a;}, {});
console.log(querys);

var page;

if (querys[Object.keys(querys)[0]]!= "undefined") {
  page="/";
} else {
  page=Object.keys(querys)[0];
}

var routes = {};

function retrieveRoutedPage(page, section){
var client = new XMLHttpRequest();
var file = page.url;
client.open('GET', file);
client.onreadystatechange = function() {
  if (client.readyState == 4 && client.status == 200) {
  var data = client.responseText;
  document.getElementById(section).innerHTML=interpret(data);
  test()
 }
}
client.send();
}
  var is404 = true;
  for (i in pages) {
    if (pages[i].route==page) {
      is404=false;
      retrieveRoutedPage(pages[i], "content");
      eval(pages[i].callback);
      
    }
  } 
  if (is404) {
    retrieveRoutedPage(pages["404_page"], "content");
      eval(pages[i].callback);
  }
