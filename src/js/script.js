function casumoActions () {
  this.sidebarIsToggled = false;
};

casumoActions.prototype.toggleSidebar = function (event) {
  var sidebar = document.getElementById('sidebar'),
      close = document.getElementById('close-sidebar'),
      blur = document.getElementById('sidebar-blur');

  if (this.sidebarIsToggled) {
    sidebar.className = 'sidebar closed'
    close.className = 'header__close-sidebar'
    blur.className = 'sidebar-blur closed'
  } else {
    sidebar.className = 'sidebar visible'
    close.className += ' visible'
    blur.className = 'sidebar-blur visible'
  }

  this.sidebarIsToggled = !this.sidebarIsToggled
}

var casumoActions = new casumoActions()
