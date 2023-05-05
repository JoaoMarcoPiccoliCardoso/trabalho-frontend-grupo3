//    BOTÃO MENU COM SUAS FUNÇÕES
const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop active";
  document.getElementById("asideMenu").className = "active";
};
const closeMenu = () => {
  document.querySelector(".backdrop").className = "backdrop";
  document.getElementById("asideMenu").className = "";
};
document.getElementById("menuBtn").onclick = (e) => {
  e.preventDefault();
  openMenu();
};
document.querySelector("aside button.close").onclick = (e) => {
  closeMenu();
};
document.querySelector(".backdrop").onclick = (e) => {
  closeMenu();
};

//  BOTÃO CARRINHO COM SUAS FUNÇÕES

const openCart = () => {
  document.querySelector(".backdrop2").className = "backdrop2 active";
  document.getElementById("asideCart").className = "active";
};
const closeCart = () => {
  document.querySelector(".backdrop2").className = "backdrop2";
  document.getElementById("asideCart").className = "";
};
document.getElementById("cartBtn").onclick = (e) => {
  e.preventDefault();
  openCart();
};
document.querySelector("aside button.closeCart").onclick = (e) => {
  closeCart();
};
document.querySelector(".backdrop2").onclick = (e) => {
  closeCart();
};

var productCart = [
  {
    id: 1,
    nome: "Spot 2V",
    qtd: 0,
    precoUnit: 15000.0,
    imgURL: "./img/20200616060919.jpg",
  },
  {
    id: 2,
    nome: "Stretch",
    qtd: 2,
    precoUnit: 30000.0,
    imgURL: "./img/stretch.jpg",
  },
  {
    id: 3,
    nome: "Tin",
    qtd: 0,
    precoUnit: 7500.0,
    imgURL: "./img/tin.jpg",
  },
  {
    id: 4,
    nome: "Promobot",
    qtd: 0,
    precoUnit: 20000.0,
    imgURL: "./img/promobot.jpg",
  },
  {
    id: 5,
    nome: "Medic",
    qtd: 0,
    precoUnit: 25000.0,
    imgURL: "./img/medic.jpg",
  },
  {
    id: 6,
    nome: "Ameca",
    qtd: 0,
    precoUnit: 50000.0,
    imgURL: "./img/ameca.jpg",
  },
];

var lista = [
  "./img/imagem_2023-05-05_191825645.png",
  "./img/imagem_2023-05-05_191745894.png",
  "./img/imagem_2023-05-05_192442555.png",
  "./img/imagem_2023-05-05_194744255.png",
  "./img/imagem_2023-05-05_194221086.png",
  "./img/imagem_2023-05-05_192800253.png",
];

var i = 0;
function change() {
  document.getElementById("images").style.backgroundImage =
    "url(" + lista[i] + ")";
  i++;
  if (i == lista.length) {
    i = 0;
  }
}

setInterval(change, 3000);
