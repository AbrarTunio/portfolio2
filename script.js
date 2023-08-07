let imageContainer = document.querySelector("#image-container");
let devName = document.querySelector(".name");
let portfolio = document.querySelector("#portfolio");
let hiddenAnchor = document.querySelector(".hidden-anchor");
var lastScrollTop = 0;

function scrollFunction() {
  let scrollDirection = document.documentElement.scrollTop;
  //   A condition for image
  if (scrollDirection > lastScrollTop) {
    imageContainer.classList.add("image-scroll-behavior");
    console.log(lastScrollTop);
  } else {
    imageContainer.classList.remove("image-scroll-behavior");
    console.log("going back", lastScrollTop);
  }
  // A condition for cards
  if (scrollDirection > lastScrollTop && scrollDirection > 120) {
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.add("show-cards");
    });
  } else if (scrollDirection <= 120) {
    document.querySelectorAll(".programming-card").forEach((card) => {
      card.classList.remove("show-cards");
    });
  }
  lastScrollTop = scrollDirection <= 0 ? 0 : scrollDirection;
}

document.addEventListener("scroll", scrollFunction);

// document.addEventListener(
//   "scroll",
//   () => {
//     if (scrollDirection > lastScrollTop && scrollDirection >= 130) {
//       console.log(scrollDirection, lastScrollTop);
//     } else {
//       console.log("small");
//     }
//     lastScrollTop = scrollDirection <= 0 ? 0 : scrollDirection;
//   },
//   false
// );

function apply() {
  if (portfolio.innerText != "ENGR. ABRAR HUSSAIN") {
    portfolio.innerText = "ENGR. ABRAR HUSSAIN";
  } else {
    portfolio.innerText = "PORTFOLIO";
  }
  hiddenAnchor.classList.toggle("hidden-anchor-smooth");
}

imageContainer.addEventListener("mouseenter", () => {
  apply();
});

imageContainer.addEventListener("mouseleave", () => {
  apply();
});

devName.addEventListener("mouseenter", () => {
  apply();
});

devName.addEventListener("mouseleave", () => {
  apply();
});
