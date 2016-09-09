var querys = window.location.search.slice(1).split('&').reduce(function _reduce (/*Object*/ a, /*String*/ b) {b = b.split('=');a[b[0]] = decodeURIComponent(b[1]);return a;}, {});
console.log(querys);

var page;

if (querys[Object.keys(querys)[0]]!= "undefined") {
  page="/";
} else {
  page=Object.keys(querys)[0];
}

var routes = {};

function loadPage(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      retrievePage(url, "content");
      //document.body.innerHTML = this.responseText;
      interpret()
    }
  };
  xhttp.open("GET", "index.html", true);
  xhttp.send();
}

  for (i in pages) {
    if (pages[i].route==page) {
      loadPage(pages[i].url, "content");
      eval(pages[i].callback)
    }
  }
