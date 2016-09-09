var querys = window.location.search.slice(1).split('&').reduce(function _reduce (/*Object*/ a, /*String*/ b) {b = b.split('=');a[b[0]] = decodeURIComponent(b[1]);return a;}, {});
console.log(querys);

var page;

if (querys[Object.keys(querys)[0]]!= "undefined" || querys[""]==="undefined") {
  page="/";
} else {
  page=Object.keys(querys)[0];
}
function initiate() {
 function loadScript(url) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var body = document.body.innerHTML;
                document.body.innerHTML = body + "<script>" + this.responseText + "</script>";
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
}
 function preloader() {
	 // counter
     	var i = 0;
     	// create object
     	imageObj = new Image();
	 // set image list
	 // start preloading
	 for(i in images) 
	 {
	      imageObj.src=images[i];
	 }
	} 
	interpret()
	preloader()
}
