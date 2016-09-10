function interpret(data) {
 //str = document.getElementsByTagName('html')[0].innerHTML;
 //console.log(str);
if (data) {
var myString = data;

 for(i in variables) {
     myString = myString.replace(new RegExp('{{' + i + '}}', 'gi'), variables[i]);
  }
  myString = myString.replace(new RegExp('http://', 'gi'), "https://crossorigin.me/http://");
  return myString;
 }
}
