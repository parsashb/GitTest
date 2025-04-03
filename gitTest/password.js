const btn = document.getElementById("create");
const input = document.getElementById("input");
const copy = document.getElementById("btn");
const h3 = document.querySelector("h3");
btn.addEventListener("touchend", clickedStart);
btn.addEventListener("click", clickedStart);
copy.addEventListener("click", copyPass);
copy.addEventListener("touchstart", copyPass);

function clickedStart() {
  let pass =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  for (let i = 0; i < 14; i++) {
    let random = Math.floor(Math.random() * pass.length);
    password += pass[random];
    input.value = password;
  }
}

function copyPass() {
  if (input.value.length > 13) {
    h3.classList.add("true");
    setTimeout(() => {
      h3.classList.remove("true");
    }, 2000);
    navigator.clipboard.writeText(input.value);
  } else alert("must click on the Generate Button!");
}
