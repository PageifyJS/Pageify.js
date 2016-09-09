function interpret(data) {
 //str = document.getElementsByTagName('html')[0].innerHTML;
 //console.log(str);
if (data) {
var myString = data;

 for(var i = 0; i < Object.keys(variables).length; i++) {
    typeof data;
     var extract = data.match(/{{(.*)}}/).pop();
     myString = myString.replace(new RegExp('{{' + extract + '}}', 'gi'), variables[extract]);
  }
  return myString;
 }
}
