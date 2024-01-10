document.addEventListener('DOMContentLoaded', function(){
  console.log('Document ready');

  const toggleNavbar = document.querySelector('#toggleNavbar');
  toggleNavbar.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-responsive');
    if(navbar.style.maxHeight !== '0px' && navbar.style.maxHeight !== '') {
      navbar.style.maxHeight = '0px';
    } else {
      navbar.style.maxHeight = '360px';
    }
  });
});

// Performance Task in ICT (Group 3) :D
/* Members:
- AirishAnne Cabrera
- Aizen Petate
- Gabriel Fradejas
- Ken Cedrick Hernandez
- Khryzel Maala
*/