var typed = new Typed('.typing', {
  strings: [
    "I'm Commander Shepard, and this is my favorite store on the Citadel",
    "It's time to kick ass and chew bubble gum… ...",
    "What is a man? A Miserable little pile of secrets!"
  ],
  typeSpeed: 30,
  backDelay: 900,
  backSpeed: 20,
  loop: true
});

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightnav = document.querySelector('.right-nav');

burger.addEventListener('click', () => {
  rightnav.classList.toggle('v-class-resp');
  navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
});

function mygamedropdown() {

  if (document.getElementById('games').style.display != 'block') {
    document.getElementById('games').style.display = 'block';
  }
  else if (document.getElementById('games').style.display != 'none') {
    document.getElementById('games').style.display = 'none';
  }

}
