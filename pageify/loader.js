function retrievePage(page, section){
var client = new XMLHttpRequest();
var file = pages[page].url;
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
function load(page){
var client = new XMLHttpRequest();
client.open('GET', page);
client.onreadystatechange = function() {
  if (client.readyState == 4 && client.status == 200) {
    return client.responseText;
 }
}
client.send();
}
