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

function load(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      var body = document.body.innerHTML;
      document.body.innerHTML = body + this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
