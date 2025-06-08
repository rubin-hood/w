document.addEventListener("DOMContentLoaded", function() {
  var sidebar = document.getElementById("sidebar");
  var toggle = document.getElementById("sidebar-toggle");
  if (!sidebar || !toggle) return; // Falls Elemente nicht existieren
  toggle.addEventListener("click", function(e) {
    e.stopPropagation();
    sidebar.classList.toggle("open");
    // Optional: Seite abdunkeln, solange Sidebar offen ist
    if(sidebar.classList.contains("open")) {
      document.body.classList.add('sidebar-backdrop');
    } else {
      document.body.classList.remove('sidebar-backdrop');
    }
  });
  // Klick außerhalb schließt Sidebar wieder (mobil)
  document.addEventListener("click", function(e) {
    if(window.innerWidth <= 900 && sidebar.classList.contains("open")) {
      if(!sidebar.contains(e.target) && e.target !== toggle) {
        sidebar.classList.remove("open");
        document.body.classList.remove('sidebar-backdrop');
      }
    }
  });
});
