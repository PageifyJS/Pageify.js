function interpret(data) {
 //str = document.getElementsByTagName('html')[0].innerHTML;
 //console.log(str);
if (data) {
var myString = data;

 for(i in variables) {
  console.log(i, varibles[i])
     myString = myString.replace(new RegExp('{{' + i + '}}', 'gi'), variables[i]);
  }
  return myString;
 }
}
