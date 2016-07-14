function casumoActions () {
  this.sidebarIsToggled = false;
};

casumoActions.prototype.toggleSidebar = function (event) {
  var sidebar = document.getElementById('sidebar');

  if (this.sidebarIsToggled) {
    sidebar.className = 'sidebar'
  } else {
    sidebar.className += ' visible'
  }
  
  this.sidebarIsToggled = !this.sidebarIsToggled
}

var casumoActions = new casumoActions()
