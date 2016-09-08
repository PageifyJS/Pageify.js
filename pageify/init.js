function initiate() {
	function loadScript(url) {
		document.write("<script type='text/javascript' src='"+url+"'></script>"); 
	}
	loadScript('./pageify/functions.js');
	loadScript('./pageify/config.js');
	loadScript('./pageify/interpreter.js');
	loadScript('./pageify/routes.js');
	interpret()
}
