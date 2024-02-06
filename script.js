const navList = document.querySelector('.topnav');
const iconClick = document.getElementById('icon-click');

document.querySelector('#icon-click').onclick = (e) => {
  e.preventDefault();
  navList.classList.toggle('active');
};

document.addEventListener('click', function (e) {
  if (!navList.contains(e.target) && !iconClick.contains(e.target)) {
    navList.classList.remove('active');
  }
});
