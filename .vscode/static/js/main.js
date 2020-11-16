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
