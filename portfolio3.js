// let sections = document.querySelectorAll('SECTION');
// let navlinkks = document.querySelectorAll('header nav a');
// const window_pathname = window.location.pathname;

// window.onscroll = () => {

//    sections.forEach(sec => {
//       let top = window.scrollY;
//       let offset = sec.offsetTop;
//       let height = sec.offsetHeight;
//       let id = sec.getAttribute('id')

//       if (top >= offset && top < offset + height) {

//          navlinkks.forEach(navel => {
//             navel.classList.remove('active');
//             document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
//          });
//       };

//    });

// };






// -----------------------typed animation --------------------------------------------------------------//

var typed = new Typed('#Skillnames', {
    strings: ['BeatBoxer', 'Music Producer', 'FrontEnd Devloper'],
    typeSpeed: 100,
    backspeed: 20,
    loop: true,
    
 });
 var typed = new Typed('#aboutme', {
    strings: ['About', 'Know'],
    typeSpeed: 100,
    loop: true,
    showCursor: false
 });
 
 var typed = new Typed('#services_typed', {
    strings: ['Services'],
    typeSpeed: 100,
    loop: true,
    showCursor: false
 });
 
 // -----------------------typed animation --------------------------------------------------------------//
 