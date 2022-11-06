const header = document.querySelector('.header'),
      heroSection = document.querySelector('.hero'),
      termsTrigger = document.querySelector('.terms-trigger'),
      policyTrigger = document.querySelector('.policy-trigger'),
      termsModal = document.querySelector('#terms-modal'),
      policyModal = document.querySelector('#policy-modal'),
      closeTermsModal = document.querySelector('.close-terms'),
      closePolicyModal = document.querySelector('.close-policy');

function setSpacing() {
  const headerHeight = header.clientHeight;
  heroSection.style.marginTop = `${headerHeight}px `;
}

setSpacing();

function openModal(currentModal, closeModal) {
  currentModal.classList.add('--show-modal');
  closeModal.addEventListener('click', () => {
    currentModal.classList.remove('--show-modal');
  })
}

termsTrigger.addEventListener('click', () => {
  openModal(termsModal, closeTermsModal);
})

policyTrigger.addEventListener('click', () => {
  openModal(policyModal, closePolicyModal);
})

const burger = document.querySelector('.burger')
const mobMenu = document.querySelector('.m-menu')
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('_active-burger')
  if (burger.classList.contains('_active-burger')) {
    mobMenu.classList.add('--active-menu')
    body.classList.add('--body-locked')
  } else {
    mobMenu.classList.remove('--active-menu')
    body.classList.remove('--body-locked')
  }
})

const menuMobLinks = document.querySelectorAll('.menu-nav__link');

if (menuMobLinks.length > 0) {
  menuMobLinks.forEach(function (menuMobLinks) {
    menuMobLinks.addEventListener("click", function (event) {
      mobMenu.classList.remove('--active-menu');
      body.classList.remove('--body-locked')
      burger.classList.remove('_active-burger')
    });
  });
}
