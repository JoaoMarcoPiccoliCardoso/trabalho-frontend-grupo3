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

