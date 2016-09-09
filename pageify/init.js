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
 loadScript("./pageify/loader.js");
	interpret()
}
