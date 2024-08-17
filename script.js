const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

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
            })
            .catch(error => {
                console.error('Error fetching the include file:', error);
            });
    }
});
