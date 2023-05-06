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

// var lista = [
//   "./img/imagem_2023-05-05_191825645.png",
//   "./img/imagem_2023-05-05_191745894.png",
//   "./img/imagem_2023-05-05_192442555.png",
//   "./img/imagem_2023-05-05_194744255.png",
//   "./img/imagem_2023-05-05_194221086.png",
//   "./img/imagem_2023-05-05_192800253.png",
// ];

// var i = 0;
// function change() {
//   document.getElementById("images").style.backgroundImage =
//     "url(" + lista[i] + ")";
//   i++;
//   if (i == lista.length) {
//     i = 0;
//   }
// }

// setInterval(change, 3000);

//Carrinho:

var listaProd = [
  {
    id: 1,
    nome: "Spot 2v",
    preco: 150000,
    url: "./img/prod1.jpg"
  },
  {
    id: 2,
    nome: "Stretch",
    preco: 50000,
    url: "./img/prod2.jpg"
  },
  {
    id: 3,
    nome: "Tinbot",
    preco: 15000,
    url: "./img/prod3.jpg"
  },
  {
    id: 4,
    nome: "Promobot",
    preco: 124610,
    url: "./img/prod4.jpg"
  },
  {
    id: 5,
    nome: "Medic",
    preco: 250000,
    url: "./img/prod5.jpg"
  },
  {
    id: 6,
    nome: "Ameca",
    preco: 500000,
    url: "./img/prod6.jpg"
  }
]

function comprar(i) {
  if (localStorage.getItem(i) == null) {
    var prod = JSON.stringify({
      'id': listaProd[i-1].id,
      'nome': listaProd[i-1].nome,
     'preco': listaProd[i-1].preco,
      'url': listaProd[i-1].url,
      'qtd': 1
    })
    localStorage.setItem(i, prod) 
  } else {
    var prodJSON = JSON.parse(localStorage.getItem(i));
    prodJSON.qtd += 1;
    localStorage.setItem(i, JSON.stringify(prodJSON));
    // location.reload();
  }
  montarCart();
}

var price = 0;

function montarCart() {
  var cartHTML = '';
  var price = 0;
  for (let j=0; j <6; j++) {
    if (localStorage.getItem(j+1) != null) {
      let objeto = JSON.parse(localStorage.getItem(j+1));
      cartHTML += '<div class="produtoCarrinho"><div class="fotoCarrinho"><img src="'+objeto.url+'" alt="indisponível" /></div><div class="txtCarrinho"><p>Nome:'+objeto.nome+'</p><p>Preço: R$'+objeto.preco+',00</p><div class="botoes"><button class="botaoMais" onclick="adicionar('+objeto.id+')">+</button><div class="qtd"><p>'+objeto.qtd+'</p></div><button id="botaoMenos" onclick="reduzir('+objeto.id+')">-</button></div></div></div>';
      price += parseInt(objeto.qtd) * parseInt(objeto.preco) 
    }
  }
  if (cartHTML !== ''){
    document.getElementById('carrinho').innerHTML = cartHTML;
    document.getElementById('finLim').hidden = false;
    document.getElementById('total').innerText = "Total: R$"+price+",00";
    document.getElementById('total').hidden = false;
  } else {
    document.getElementById('carrinho').innerHTML = '';
    document.getElementById('finLim').hidden = true;
    document.getElementById('total').hidden = true;

  }
}

const cartBtn = document.getElementById('cartBtn');

cartBtn.addEventListener('click', montarCart());

function adicionar(i) {
  comprar(i)
  montarCart();
}

function reduzir(i) {
  var prodJSON = JSON.parse(localStorage.getItem(i));
  prodJSON.qtd--;
  if(parseInt(prodJSON.qtd) > 0) {
    localStorage.setItem(i, JSON.stringify(prodJSON));
    montarCart();
  } else {
    localStorage.removeItem(i);
    montarCart();
  }
}


function finish() {
  localStorage.clear();
  location.href = './finalizacao.html'
}

function limpar() {
  localStorage.clear();
  montarCart();
}