document.querySelectorAll('include').forEach(function(el) {

  let src = el.getAttribute('src');

  if (src) {

      fetch(src)

          .then(response => {

              if (!response.ok) {

                  throw new Error('Network response was not ok');

              }

              return response.text();

          })

          .then(data => {

              el.insertAdjacentHTML('beforebegin', data);

              el.remove();

              const swiper = new Swiper('.swiper', {

                  loop: true,
                slidesPerView:3,
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

          })

          .catch(error => {

              console.error('Error fetching the include file:', error);

          });

  }

});
