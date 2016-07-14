function casumoActions () {

};

casumoActions.prototype.toggleSidebar = function (event) {
  var sidebar = document.getElementById('sidebar'),
      close = document.getElementById('close-sidebar'),
      blur = document.getElementById('sidebar-blur'),
      sidebarVisibleClasses = 'sidebar visible';

  if (sidebar.className === sidebarVisibleClasses) {
    sidebar.className = 'sidebar closed'
    close.className = 'header__close-sidebar'
    blur.className = 'sidebar-blur closed'
  } else {
    sidebar.className = 'sidebar visible'
    close.className = 'header__close-sidebar fi-close visible'
    blur.className = 'sidebar-blur visible'
  }

  this.sidebarIsToggled = !this.sidebarIsToggled
}

casumoActions.prototype.listenToClicksBlur = function (toggleFunction) {
  var blur = document.getElementById('sidebar-blur')

  blur.addEventListener('click', toggleFunction)
}

var casumoActions = new casumoActions()

casumoActions.listenToClicksBlur(casumoActions.toggleSidebar)
