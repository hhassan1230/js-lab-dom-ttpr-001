// localStorage.clear()
let mode = localStorage.getItem('mode')
let button = document.getElementById("toggle-btn")

//cheaking last leave mode
console.log(typeof mode)
if(mode === 'dark'){
  document.body.classList.toggle('dark')
  button.setAttribute('aria-pressed', true)
}

function toggleDarkMode() {

 //toggle the class dark in body
  document.body.classList.toggle("dark")
 //let body = document.querySelector(body)
 //checks if body contains dark class (boolean)
  const isDark = document.body.classList.contains("dark")
  let newValue = "dark"
  mode = newValue
  //updating local storage
  if(isDark){
    localStorage.setItem('mode', 'dark')
  }else{
    localStorage.removeItem('mode')
  }

}
//document.body.classList.toggle(mode, true)
document
  .getElementById("toggle-btn")
  .addEventListener("click", toggleDarkMode);