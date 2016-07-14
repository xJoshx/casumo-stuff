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

casumoActions.prototype.scrollEffect = function (event) {

  window.addEventListener('scroll', function () {
    var top  = window.pageYOffset || document.documentElement.scrollTop,
    sidebarItems = document.getElementById('sidebar-scroll-effect'),
    sidebar = document.getElementById('sidebar'),
    sidebarHeight = 900

    if (top < 590) {
      var translate = 'translateY(-' + top + 'px)'
      sidebarItems.style.transform = translate
      sidebar.style.height = sidebarHeight - top + 'px'
    }
  })
}

var casumoActions = new casumoActions()

casumoActions.listenToClicksBlur(casumoActions.toggleSidebar)
casumoActions.scrollEffect()
