function casumoActions () {};

casumoActions.prototype.toggleSidebar = function (event) {
  var sidebar = document.getElementById('sidebar'),
      close = document.getElementById('close-sidebar'),
      blur = document.getElementById('sidebar-blur'),
      html = document.getElementsByTagName('html')[0],
      sidebarVisibleClasses = 'sidebar visible';

  if (sidebar.className === sidebarVisibleClasses) {
    sidebar.className = 'sidebar closed'
    close.className = 'header__close-sidebar'
    blur.className = 'sidebar-blur closed'
    html.style.overflowY = 'scroll'
  } else {
    sidebar.className = 'sidebar visible'
    close.className = 'header__close-sidebar fi-close visible'
    blur.className = 'sidebar-blur visible'
    html.style.overflowY = 'hidden'
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
    goTop = document.getElementById('go-top'),
    sidebarHeight = 900,
    screenWidth = 768,
    screenWidthGoTop = 568

    // Sidebat scroll effect
    if(window.screen.width >= screenWidth) {
      if (top < 590) {
        var translate = 'translateY(-' + top + 'px)'
        sidebarItems.style.transform = translate
        sidebar.style.height = sidebarHeight - top + 'px'
      }
    }

    if(window.screen.width <= screenWidthGoTop) {
      if (top > 200) {
        goTop.className = 'more go-top visible'
      } else {
        goTop.className = 'more go-top hidden'
      }
    }

    // Toggle go top in mobile
    // if(top > 200) {
    //   goTop.className = 'more go-top visible'
    //   classIsSet = true
    // } else(top <= 200 ) {
    //   goTop.className = 'more go-top'
    //   classIsSet = false
    // }
  })
}

casumoActions.prototype.setElevator = function (event) {
  window.onload = function() {
  // Just for the lol
    var elevator = new Elevator({
      element: document.getElementById('go-top'),
      mainAudio: './assets/music/elevator.mp3',
      endAudio: './assets/music/ding.mp3'
    });
  }
}

var casumoActions = new casumoActions()

casumoActions.listenToClicksBlur(casumoActions.toggleSidebar)
casumoActions.scrollEffect()
casumoActions.setElevator()
