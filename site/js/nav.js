const navbar = document.getElementById('nav')
const listaNav = document.getElementById('listaNav')


window.addEventListener('scroll', ()=>{
    if(scrollY <= 100){
        navbar.style = 'background-color = none'
        listaNav.classList.add('nav-lista-vazio');
        listaNav.classList.remove('nav-lista-laranja');
        listaNav.classList.remobe('nav-lista-preto');
    } else if (scrollY >= 1400 && scrollY <= 2725 || scrollY >=  3326 && scrollY <= 4000 ) {
        navbar.style.backgroundColor = 'black'
        listaNav.classList.remove('nav-lista-vazio');
        listaNav.classList.remove('nav-lista-laranja');
        listaNav.classList.add('nav-lista-preto');
    } else {
        navbar.style.backgroundColor = 'rgb(255, 180, 42)'
        listaNav.classList.remove('nav-lista-vazio');
        listaNav.classList.add('nav-lista-laranja');
        listaNav.classList.remove('nav-lista-preto');
    }
    
})