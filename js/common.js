// ========================>
// slider for reviews
// <=======================
var swiper = new Swiper('.sect4__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.sect4__next',
    prevEl: '.sect4__prev',
  },
  spaceBetween: 40
});
swiper.slideTo(1)
swiper.on('slideChange', function () {
  let index = swiper.realIndex;
  let nextImg = document.querySelector('.sect4__next img');
  let prevImg = document.querySelector('.sect4__prev img');
  // sorry for this code :(
  if (index == 0) {
    prevImg.setAttribute('src', ``)
    nextImg.setAttribute('src', `img/ava${index + 2}.png`)
  }
  else if (index == 1) {
    prevImg.setAttribute('src', `img/ava${index}.png`)
    nextImg.setAttribute('src', `img/ava${index + 2}.png`)
  }
  else if (index == 2) {
    prevImg.setAttribute('src', `img/ava${index}.png`)
    nextImg.setAttribute('src', ``)
  }
});
// ========================>
// animation scroll
// <=======================
(function () {
  var linkNav = document.querySelectorAll('[href^="#"]'),
    V = .2;
  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      e.preventDefault();
      var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
      t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }
    }, false);
  }
})();
// ========================>
// validate input
// <=======================
(function () {
  var input = document.querySelector('input[name="name"]');
  input.addEventListener('input', function () {
    input.value = input.value.replace(/[0-9]/g, '')
  })
})();
// ========================>
// pulse btn
// <=======================
(function () {
  var offer = document.getElementById('offer');
  var btn = document.querySelector('.pulse__btn');
  window.addEventListener('scroll', (e) => {
    document.documentElement.scrollTop + 300 > offer.offsetTop ? btn.classList.add('show') : btn.classList.remove('show')
  })
})();