// Hide navbar on scroll down, show on scroll up
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }

  prevScrollPos = currentScrollPos;
});

// Background image changer on scroll with smooth transition and slower speed

const images = [
  'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg?semt=ais_hybrid&w=740',
  'https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-an-image-of-a-digital-network-with-blue-dots-image_2608723.jpg',
  'https://img.freepik.com/premium-photo/notebook-eyeglasses-small-green-domestic-plant-flowerpot-branch-with-leaves-laptop-keypad-white-desk_274679-9116.jpg?semt=ais_hybrid&w=740',
  'https://t4.ftcdn.net/jpg/02/83/46/33/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/004/407/545/small_2x/q-and-a-discussion-faq-support-question-and-answer-help-service-business-concept-photo.jpg',
  'https://png.pngtree.com/thumb_back/fh260/background/20231004/pngtree-a-conceptual-illustration-of-web-design-development-and-seo-optimization-in-image_13584944.png'
];

const sectionBgMap = [
  { id: "hero", img: images[0] },
  { id: "services", img: images[1] },
  { id: "projects", img: images[2] },
  { id: "how-we-work", img: images[3] },
  { id: "clients", img: images[4] },
  { id: "faq", img: images[5] },
  { id: "survey-portal", img: images[6] }
];

// Create overlay div
const bgOverlay = document.createElement('div');
bgOverlay.style.position = 'fixed';
bgOverlay.style.top = '0';
bgOverlay.style.left = '0';
bgOverlay.style.width = '100%';
bgOverlay.style.height = '100%';  
bgOverlay.style.zIndex = '-1';
bgOverlay.style.transition = 'background-image 1.5s ease-in-out, opacity 1s ease-in-out';
bgOverlay.style.backgroundAttachment = 'fixed';
bgOverlay.style.backgroundSize = 'cover';
bgOverlay.style.backgroundRepeat = 'no-repeat';
bgOverlay.style.opacity = '0.8';
document.body.prepend(bgOverlay);

// Set initial image
bgOverlay.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${images[0]}')`;

function updateBackgroundImageForSection() {
  for (let i = sectionBgMap.length - 1; i >= 0; i--) {
    const section = document.getElementById(sectionBgMap[i].id);
    if (section && window.scrollY >= section.offsetTop - window.innerHeight / 2) {
      const newImg = sectionBgMap[i].img;
      if (!bgOverlay.style.backgroundImage.includes(newImg)) {
        bgOverlay.style.opacity = '0';
        setTimeout(() => {
          bgOverlay.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${newImg}')`;
          bgOverlay.style.opacity = '0.8';
        }, 500);
      }
      break;
    }
  }
}

window.addEventListener('scroll', updateBackgroundImageForSection);


// FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    item.classList.toggle('active');
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });
  });
});
