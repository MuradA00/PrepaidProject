const header = document.querySelector('.header'),
      heroSection = document.querySelector('.hero');

function setSpacing() {
  const headerHeight = header.clientHeight;
  heroSection.style.marginTop = `${headerHeight}px `;
}

setSpacing();
