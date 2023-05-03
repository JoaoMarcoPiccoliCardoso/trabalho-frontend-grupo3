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

// SCROLL TELA DE SLIDES

document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    if (document.onWayTo === null) {
        const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1; 
        if (destIndex >= 0 && destIndex < sections.length) {
            console.log({ destIndex, direction });
            document.onWayTo = destIndex;
            window.scroll(0, sections[destIndex].offsetTop);
        }
    }


    sections.forEach((section, index) => {
        if (window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
            section.className = 'active';
            if (document.onWayTo === index) {
                document.onWayTo = null;
            }
        } else {
            section.className = '';
        }
    })

    document.lastScrollPosition = window.pageYOffset;
})