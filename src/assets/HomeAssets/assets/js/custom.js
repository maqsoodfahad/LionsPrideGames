// AOS
AOS.init({
  duration: 1200,
});


// Create a new function called newDate()
function newDate() {
    //return a new Date() -- returns the current calendar year.
  return new Date().getFullYear();
}
document.onload = document.getElementById("autodate").innerHTML = '-' + newDate();


 
 
 
 