let id;
function test() {
  Array.prototype.forEach.call(document.querySelectorAll("dynamicContent"), function(el) {
  id = el.id;
  id = id.replace('dynamic-update-', '');
  findMatch(id)
});
}
function findMatch(match) {
  let value = document.getElementById(match).value;
  let one = 'dynamic-update-'+match;
  document.getElementById(one).innerHTML = value;

}
setInterval(function(){
  test()
},1000/25);
let data = {

}
function ajax_send(data, sendto, method, requestHeader, Callback) {
  if(requestHeader == "") {
    let requestHeader = "application/x-www-form-urlencoded"
  }
  if (method == "") {
    let method = "POST";
  }
  let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        if(Callback !== "")
        eval(Callback);
      }
    };
  xhttp.open(method, sendto, true);
  xhttp.setRequestHeader('Content-type', requestHeader);
  xhttp.send('data='+data);
}
/*
setInterval(function(){
 var ids = document.getElementById(id).value;
 alert(ids);
},1000/4)
*/
