function interpret(data) {
 //str = document.getElementsByTagName('html')[0].innerHTML;
 //console.log(str);
if (data) {
var myString = data;

 for(i in variables) {
     myString = myString.replace(new RegExp('{{' + i + '}}', 'gi'), variables[i]);
  }
  if(force_https) {
  myString = myString.replace(new RegExp('http://', 'gi'), "https://crossorigin.me/http://");
  }else{
   console.warn("You have disabled force https. This will result in insecure content being displayed. Please enable force https!")
  }
  return myString;
 }
}
