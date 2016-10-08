var id;
function test() {
  Array.prototype.forEach.call(document.querySelectorAll("dynamicContent"), function(el) {
  var id = el.id;
  var id = id.replace('dynamic-update-', '');
});
}
alert(id);
/*
setInterval(function(){
 var ids = document.getElementById(id).value;
 alert(ids);
},1000/4)
*/
