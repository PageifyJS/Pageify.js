function test() {
  Array.prototype.forEach.call(document.querySelectorAll("dynamicContent"), function(el) {
  alert(el.id);
});
}
