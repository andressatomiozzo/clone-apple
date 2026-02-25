const carrossel = document.querySelector(".appleTV");
const track = document.querySelector(".track");
const slides = Array.from(track.children);

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dotsContainer = document.querySelector(".dots");

let index = 0;

slides.forEach((_, i) => {
  const dots = document.createElement("p");
  dots.className = "dot";
  dots.addEventListener("click", () => goto(i));
  dotsContainer.appendChild(dots);
});

const dots = Array.from(dotsContainer.children);

const update = () => {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active");
};

const goto = (i) => {
  index = (i + slides.length) % slides.length; // loop infinito
  update();
};

prevBtn.addEventListener("click", () => goto(index - 1));
nextBtn.addEventListener("click", () => goto(index + 1));

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