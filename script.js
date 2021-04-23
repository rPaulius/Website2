

  // Allows only to input numbers 

function validate(evt) {
    var theEvent = evt || window.event;
  
    
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }










  // Tabs section
let tabNavigationBlocks = document.querySelectorAll('.tab-section nav ul li');
let tabContentBlocks = document.querySelectorAll('.tab-section .tab-content');

function removeActiveNavigation() {
  for (let tab of tabNavigationBlocks) {
    tab.classList.remove('active');
  }
}

function removeActiveTabs() {
  for (let tab of tabContentBlocks) {
    tab.classList.remove('active');
  }
}

for (let tab of tabNavigationBlocks) {
  tab.addEventListener('click', function() {
    removeActiveNavigation();
    removeActiveTabs();

    this.classList.add('active');

    let index = this.dataset.slide;

    document.querySelector('.tab-section .tab-content[data-slide="'+index+'"]').classList.add('active');
    
    // swiper.slideTo(index - 1);
  })
}


// SWIPER CUSTOMERS


// Reviews swiper
const swiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  autoHeight: true,

  breakpoints: {
      // when window width is >= 320px
      600: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      1000: {
        slidesPerView: 3,
      }
    },

  // autoplay: {
  //     delay: 5000
  // },

  // Optional parameters
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

});