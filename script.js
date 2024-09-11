document.addEventListener("DOMContentLoaded", function () {
  const promises = [];

  // Load all <include> tags
  document.querySelectorAll("include").forEach(function (el) {
    let src = el.getAttribute("src");

    if (src) {
      const promise = fetch(src)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((data) => {
          el.insertAdjacentHTML("beforebegin", data);
          el.remove();
        })
        .catch((error) => {
          console.error("Error fetching the include file:", error);
        });

      promises.push(promise);
    }
  });

  // Execute code after all includes are loaded
  Promise.all(promises)
    .then(() => {
      // Initialize Swiper
      initSwiper();

      // Your other code
      runOtherCode();

      // Initialize modal functionality
      initializeModal();
    })
    .catch((error) => {
      console.error("Error processing includes:", error);
    });
});

// Function to initialize Swiper
function initSwiper() {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}

// Function for other code
function runOtherCode() {
  // nav - start
  document.querySelector(".header-burger").addEventListener("click", function () {
    const burger = document.querySelector(".header-burger");
    const navigationList = document.querySelector(".navigation-list");
    burger.classList.toggle("toogle-burger");
    navigationList.classList.toggle("show-nav");
  });
  // nav - end
}

// Function to initialize modal functionality
function initializeModal() {
  // Select all "Buy NOW" buttons
  const buyNowButtons = document.querySelectorAll(".editions-list__btn");
  const modalMenuPrice = document.querySelector('.modal-menu__price');
  const buttonPrev = document.querySelector('.swiper-button-prev');
  const buttonNext = document.querySelector('.swiper-button-next');
  buttonPrev.addEventListener('click',function(){
    buttonPrev.classList.add('swiper-active-arrow')
    buttonNext.classList.remove('swiper-active-arrow')
  })

  buttonNext.addEventListener('click',function(){
    buttonNext.classList.add('swiper-active-arrow')
    buttonPrev.classList.remove('swiper-active-arrow')
  })

  // Select the modal container
  const modal = document.querySelector(".modal-menu-inner-container");
  const backdrop = document.querySelector(".modal-backdrop");
  // Function to open the modal
  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none"; // Приховування бекдропу
  }

  // Attach click event to each "Buy NOW" button
  buyNowButtons.forEach((button) => {
    button.addEventListener("click", function(){
      modalMenuPrice.textContent = button.previousElementSibling.textContent;
      modal.style.display = "block";
      backdrop.style.display = "block";
    });
    
  });

  // Close modal when clicking outside of it or on a close button
  document.querySelector(".modal-close-btn").addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  // faq - start
  // script for a faq section

// document.querySelectorAll('.faq-show-answer').forEach(faq => {
//   faq.addEventListener('click', () => {
//       const answer = faq.nextElementSibling.nextElementSibling; 
//       console.log(answer)// choosing the paragraph
//       const faqItem = faq.parentElement; // selecting the parent node

//       // making toogle active
//       faqItem.classList.toggle('active');

//       // showing or hiding elements
//       if (answer.style.display === 'none' || answer.style.display === '') {
//           answer.style.display = 'block';
//       } else {
//           answer.style.display = 'none';
//       }
//   });
// });
  // faq - end
  // faq(original) - start
  const buttonPlus = document.querySelectorAll('.faq-button');
  console.log(buttonPlus)
  buttonPlus.forEach(function(element,index){
    element.addEventListener('click', function(){
      element.parentElement.nextElementSibling.nextElementSibling.classList.toggle('faq-paragr-active');
    })
  })
  // faq(original) - end

  //explore - start
  const minimum = document.querySelector('.minimum')
  const recommended = document.querySelector(".recommended")

  const switchContainer = document.querySelector('.switch-container');
  const exploreList = document.querySelectorAll('.explore-list__set');
  const recomendedSettings = ['Intel i9-3500k (1 core 5.3 GHz) or AMD Ryzen 5 1200 (5 core 5.1 GHz)','16 GB','Windows 11 64-bit','NVIDIA GTX 1260 (8 GB) or AMD R9 290X (8 GB)','7.1','8.1','120 GB','8 GB']
  const firstRecomendedSettings = ['Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)','8 GB','Windows 10 64-bit','NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)','5.1','5.1','70 GB','4 GB']

  let counter = 0;
  switchContainer.addEventListener('click', function(){
    counter++
    if (counter % 2 === 0){
      minimum.classList.remove('switch-active')
      recommended.classList.add('switch-active')
      exploreList.forEach(function(element,index){
        element.textContent = recomendedSettings[index]
      })
    } else {
      recommended.classList.remove('switch-active')
      minimum.classList.add('switch-active')
      exploreList.forEach(function(element,index){
        element.textContent = firstRecomendedSettings[index]
      })
    }
  })

  const standard = document.querySelector('.standart')
  const limited = document.querySelector('.limited')

  const switchRagnarContainer = document.querySelector(".switch-container-ragnar")
  const exploreCharacteristicsList = document.querySelectorAll(".explore-list__char")
  const limitedSettings = ['PS5', '20.4.2018', 'Sony Interactive Entertainment Europe', 'Action, Adventure', 'English, Polish, Russian',  'English, Dutch, Polish, Russian, Turkish']
  const firstLimitedSettings = ['PS4', '7.12.2022', 'Xbox Game Studios', 'Ubisoft', 'Italian, Chineese, Ukrainian', 'Arabic, Spanish, German, Indonesian, Hindi']

  let counterFirst = 1;
  switchRagnarContainer.addEventListener('click', function(){
    counterFirst++
    if (counterFirst % 2 === 0){
      standard.classList.remove('switch-active')
      limited.classList.add('switch-active')
      exploreCharacteristicsList.forEach(function(element,index){
        element.textContent = firstLimitedSettings[index]
      })
    } else {
      limited.classList.remove('switch-active')
      standard.classList.add('switch-active')
      exploreCharacteristicsList.forEach(function(element,index){
        element.textContent = limitedSettings[index]
      })
    }
  })
  //explore - end
}
