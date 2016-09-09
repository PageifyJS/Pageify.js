function initiate() {
	function loadScript(url) {
		document.write("<script type='text/javascript' src='"+url+"'></script>"); 
	}
	retrievePage("default_page","section");
	interpret()
}
