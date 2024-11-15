document
  .getElementById("menu-icon")
  .addEventListener("touchstart", function () {
    console.log("checked = true");

    document.getElementById("sidebar-active").checked = true;
  });

document
  .getElementById("close-icon")
  .addEventListener("touchstart", function () {
    console.log("checked = false");
    document.getElementById("sidebar-active").checked = false;
  });
