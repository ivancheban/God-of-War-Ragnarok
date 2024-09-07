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
}