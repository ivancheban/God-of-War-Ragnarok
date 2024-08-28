document.addEventListener("DOMContentLoaded", function() {

    const promises = [];

  

    // Завантаження всіх тегів <include>

    document.querySelectorAll('include').forEach(function(el) {

      let src = el.getAttribute('src');

  

      if (src) {

        const promise = fetch(src)

          .then(response => {

            if (!response.ok) {

              throw new Error('Network response was not ok');

            }

            return response.text();

          })

          .then(data => {

            el.insertAdjacentHTML('beforebegin', data);

            el.remove();

          })

          .catch(error => {

            console.error('Error fetching the include file:', error);

          });

  

        promises.push(promise);

      }

    });

  

    // Виконання коду після завантаження всіх include

    Promise.all(promises).then(() => {

      // Ініціалізація Swiper

      initSwiper();

  

      // Ваш інший код, який має працювати після завантаження

      runOtherCode();

    }).catch(error => {

      console.error('Error processing includes:', error);

    });

  });

  

  // Функція для ініціалізації Swiper

  function initSwiper() {

    const swiper = new Swiper('.swiper', {

      loop: true,

      slidesPerView: 3,

      pagination: {

        el: '.swiper-pagination',

      },

      navigation: {

        nextEl: '.swiper-button-next',

        prevEl: '.swiper-button-prev',

      },

      scrollbar: {

        el: '.swiper-scrollbar',

      },

    });

  }

  

  // Інша функція для вашого додаткового коду

  function runOtherCode() {

    // nav - start

    document.querySelector('.header-burger').addEventListener('click',function(){

        const burger  = document.querySelector('.header-burger')

        const navigationList  = document.querySelector('.navigation-list')

        burger.classList.toggle('toogle-burger')

        navigationList.classList.toggle('show-nav')

        

    })

    // nav - end

  }
