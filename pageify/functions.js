function test() {
  Array.prototype.forEach.call(document.querySelectorAll("dynamicContent"), function(el) {
  var id = el.id
  id = id.replace('dynamic-update-', '');
  alert(id)
});
}
