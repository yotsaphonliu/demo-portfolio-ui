function SidebarActive() {
  const sidebar = document.getElementById("sidebar-active");
  sidebar.checked = true;
  console.log("SidebarActive");
}

function SidebarInactive() {
  const sidebar = document.getElementById("sidebar-active");
  sidebar.checked = false;
  console.log("SidebarInactive");
}
