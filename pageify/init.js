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
	 var images;
	 // start preloading
	 for(i=0; i<=images.length; i++) 
	 {
	      imageObj.src=images[i];
	 }
	} 
	interpret()
	preloader()
}
