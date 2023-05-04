//    BOTÃO MENU COM SUAS FUNÇÕES
const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}
document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}
document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}
document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}

//  BOTÃO CARRINHO COM SUAS FUNÇÕES

const openCart = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.getElementById('asideCart').className = 'active';
}
const closeCart = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.getElementById('asideCart').className = '';
}
document.getElementById('cartBtn').onclick = e => {
    e.preventDefault();
    openCart();
}
document.querySelector('aside button.closeCart').onclick = e => {
    closeCart();
}
document.querySelector('.backdrop').onclick = e => {
    closeCart();
}

var productCart = [
    {   
        id: 1,
       nome: "Spot 2V",
       qtd: 0,
       precoUnit: 15000.00,
       imgURL: "./img/20200616060919.jpg"
    },
    {   
        id: 2,
        nome: "Stretch",
       qtd: 0,
       precoUnit: 30000.00,
       imgURL: "./img/stretch.jpg"
    },
    {
        id:3,
        nome: "Tin",
       qtd: 0,
       precoUnit: 7500.00,
       imgURL: "./img/tin.jpg"
    },
    {
        id: 4,
        nome: "Promobot",
       qtd: 0,
       precoUnit: 20000.00,
       imgURL: "./img/promobot.jpg"
    },
    {
        id: 5,
        nome: "Medic",
       qtd: 0,
       precoUnit: 25000.00,
       imgURL: "./img/medic.jpg"
    },
    {
        id: 6,
        nome: "Ameca",
       qtd: 0,
       precoUnit: 50000.00,
       imgURL: "./img/ameca.jpg"
    }
]
