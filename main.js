let tittle = document.querySelector(".tittle");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload")

window.onload = function () {
  if (window.navigator.onLine) {
    online();
  }
  else {
    offline();
  }
}
window.addEventListener("online", function () { online(); });
window.addEventListener("offline", function () { offline(); });
reload.onclick = function ()
{
  window.location.reload();
  }


function online()
{
  tittle.innerHTML = "OnLine";
  tittle.style.color = "green";
  ul.classList.add("hide");
  reload.classList.add("hide");
}
function offline()
{
  tittle.innerHTML = "OffLine";
  tittle.style.color = "red";
  ul.classList.remove("hide");
  reload.classList.remove("hide");
}