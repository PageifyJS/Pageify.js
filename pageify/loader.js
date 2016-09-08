function retrievePage(page, section){
var client = new XMLHttpRequest();
client.open('GET', page);
client.onreadystatechange = function() {
  if (client.readyState == 4 && client.status == 200) {
  var data = client.responseText;
  document.getElementById(section).innerHTML=interpret(data);
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
