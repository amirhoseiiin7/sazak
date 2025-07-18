///////////////////////////////////////////////////////////
// MAKE CURRENT YEAR WORK

const yearEL = document.querySelector(".year");
const currentyear = new Date().getFullYear();
yearEL.textContent = currentyear;
///////////////////////////////////////////////////////////
// MAKE MOBILE NAV WORK

const headerEL = document.querySelector(".header");
const btnNavEL = document.querySelector(".btn-mobile-nav");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("open-nav");
});
/////////////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
