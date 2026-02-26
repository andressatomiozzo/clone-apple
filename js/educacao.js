const modo = getComputedStyle(document.documentElement).getPropertyValue("--modo").trim();

const carrossseis = document.querySelectorAll(".carrossel");

carrossseis.forEach((root) => {
  const track = root.querySelector(".track");
  const slides = Array.from(track.children);
  const prevBtn = root.querySelector(".prev");
  const nextBtn = root.querySelector(".next");

  let index = 0;
  const indexTotal = slides.length - modo;

  const update = () => {
    track.style.transform = `translateX(-${index * 420}px)`;
    index === 0 ? (prevBtn.style.display = "none") : (prevBtn.style.display = "block");
    index >= indexTotal ? (nextBtn.style.display = "none") : (nextBtn.style.display = "block");
  };

  nextBtn.addEventListener("click", () => {
    index++;
    update();
  });

  prevBtn.addEventListener("click", () => {
    index--;
    update();
  });

  update();
});

const carrossseisLargo = document.querySelectorAll(".carrossel-largo");

carrossseisLargo.forEach((root) => {
  const track = root.querySelector(".track");
  const slides = Array.from(track.children);
  const prevBtn = root.querySelector(".prev");
  const nextBtn = root.querySelector(".next");

  let index = 0;
  const indexTotal = slides.length - modo + 1;

  const update = () => {
    track.style.transform = `translateX(-${index * 520}px)`;
    index === 0 ? (prevBtn.style.display = "none") : (prevBtn.style.display = "block");
    index >= indexTotal ? (nextBtn.style.display = "none") : (nextBtn.style.display = "block");
  };

  nextBtn.addEventListener("click", () => {
    index++;
    update();
  });

  prevBtn.addEventListener("click", () => {
    index--;
    update();
  });

  update();
});

// ! ----------------------------  Menu Hambúrguer -------------------------

const headderItens = document.querySelector("#headder-itens");
const burguer = document.querySelector("#burguer");

burguer.addEventListener("click", () => {
  if (headderItens.style.display === "flex") {
    headderItens.style.display = "none";
  } else {
    headderItens.style.display = "flex";
  }
});

// ! ----------------------------  FOOTER -------------------------

const footerNavContent = document.querySelectorAll(".footerNav-content");

footerNavContent.forEach((item) => {
  const footerItems = item.querySelector(".footer-items");
  const footerH3 = item.querySelector(".footer-h3");

  if (!footerItems) throw new Error("Dom items não está ligado");
  if (!footerH3) throw new Error("h3 não está ligado");

  footerH3.addEventListener("click", () => {
    if (footerItems.style.display === "block") {
      footerItems.style.display = "none";
    } else {
      footerItems.style.display = "block";
    }
  });
});

