const menusContiner = document.querySelector('.flex-container');
const menuLeft = menusContiner.querySelector('.menu-left');
const parentMenuItem = menuLeft.querySelectorAll('.menu-item_parent');
const subMenu = document.querySelector('.sub-menu');
const backArrow = subMenu.querySelector('.menu-item__back-arrow');

function activateAnimation() {
  menusContiner.classList.add('flex-container_active');
}

function handleMenuItemClick() {
  subMenu.classList.add('sub-menu_active');
  menuLeft.classList.add('menu-left_hidden');
}

function handleBackArrowClick() {
  subMenu.classList.remove('sub-menu_active');
  setTimeout(() => {
    menuLeft.classList.remove('menu-left_hidden');
    menusContiner.classList.add('flex-container_active');
  }, 500);
}

parentMenuItem.forEach((element, index) => {
  element.addEventListener('click', handleMenuItemClick);
});

backArrow.addEventListener('click', handleBackArrowClick);

activateAnimation();
