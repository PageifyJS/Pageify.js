var id;
function test() {
  Array.prototype.forEach.call(document.querySelectorAll("dynamicContent"), function(el) {
  var id = el.id;
  var id = id.replace('dynamic-update-', '');
  findMatch(id)
});
}
function findMatch(match) {
  var value = document.getElementsByName(match).value;
  var one = 'dynamic-update-'+match;
  document.getElementById(one).innerHTML = value;
}
/*
setInterval(function(){
 var ids = document.getElementById(id).value;
 alert(ids);
},1000/4)
*/
