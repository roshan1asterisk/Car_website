let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}
// signUP
document.querySelector('#signUptoggle').onclick = () => {
  document.querySelector('.signup-form-container').classList.toggle('active');
}

document.querySelector('#close-signup-form').onclick = () => {
  document.querySelector('.signup-form-container').classList.remove('active');
}

// document.querySelector('a[href="#signup-form"]').onclick = (event) => {
//   event.preventDefault(); // Prevent the default anchor behavior
//   document.querySelector('.signup-form-container').classList.add('active'); // Show the sign-up form
//   document.querySelector('.login-form-container').classList.remove('active'); // Hide the login form (optional)
// }

// signUp

// Add pattern validation for email and username
// const emailInput = document.getElementById('emailInput');
// const usernameInput = document.getElementById('usernameInput');

// emailInput.addEventListener('input', () => {
//     if (!emailInput.checkValidity()) {
//         emailInput.setCustomValidity('Please enter a valid email address');
//     } else {
//         emailInput.setCustomValidity('');
//     }
// });

// usernameInput.addEventListener('input', () => {
//     const emailPattern = new RegExp(emailInput.pattern);
//     if (!usernameInput.checkValidity()) {
//         usernameInput.setCustomValidity('Please enter a valid username');
//     } else if (usernameInput.value.match(emailPattern)) {
//         usernameInput.setCustomValidity('Username cannot be an email address');
//     } else {
//         usernameInput.setCustomValidity('');
//     }
// });
// signUp

// search car

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById('search-form');
  const carCards = document.querySelectorAll('.car-card');


  searchForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const searchModel = document.getElementById('search-model').value.toLowerCase();
      const searchLocation = document.getElementById('search-location').value.toLowerCase();

      carCards.forEach(card => {
          const cardModel = card.querySelector('h3').textContent.toLowerCase();
          const cardLocation = card.querySelector('p:nth-child(3)').textContent.toLowerCase();

          if (cardModel.includes(searchModel) && cardLocation.includes(searchLocation)) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  });
});

// search bar

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});