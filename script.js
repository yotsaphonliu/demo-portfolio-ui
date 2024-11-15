document.getElementById("menu-icon").addEventListener("click", function () {
  console.log("true");
  document.getElementById("sidebar-active").checked = true;
});

document.getElementById("close-icon").addEventListener("click", function () {
  console.log("false");
  document.getElementById("sidebar-active").checked = false;
});
