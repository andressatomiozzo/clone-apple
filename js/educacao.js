const carrossseis = document.querySelectorAll(".carrossel");

// carrossseis.forEach((root) => {
//   const track = root.querySelector(".track");
//   const prevBtn = root.querySelector(".prev");
//   const nextBtn = root.querySelector(".next");

//   let index = 0;
//   const intexTotal = 4;

//   let update = () => {
//     track.style.transform = `translateX(-${index * 420}px)`;
//     console.log(index);
//   };

//   nextBtn.addEventListener("click", () => {
//     index = (index + 1) % intexTotal;
//     update();
//   });

//   prevBtn.addEventListener("click", () => {
//     index = (index + intexTotal - 1) % intexTotal;
//     update();
//   });
// });

carrossseis.forEach((root) => {
  const track = root.querySelector(".track");
  const slides = Array.from(track.children);
  const prevBtn = root.querySelector(".prev");
  const nextBtn = root.querySelector(".next");

  let index = 0;
  const indexTotal = slides.length -3;

  const update = () => {
    track.style.transform = `translateX(-${index * 420}px)`;
    console.log(index);
    index === 0 ? (prevBtn.style.display = "none") : (prevBtn.style.display = "block");
    if (index >= indexTotal) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  };

  nextBtn.addEventListener("click", () => {
    index++;
    update();
    console.log(slides);
  });

  prevBtn.addEventListener("click", () => {
    index--;
    update();
  });
  if (index === 0) {
    prevBtn.style.display = "none";
  }

  update();
});
