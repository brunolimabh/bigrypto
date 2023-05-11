const navbar = document.getElementById('nav')
const listaNav = document.getElementById('listaNav')


window.addEventListener('scroll', ()=>{
    if(scrollY <= 100){
        navbar.style = 'background-color = none'
        navbar.style.boxShadow = "0px 0px 0px black";
        listaNav.classList.add('nav-lista-vazio');
        listaNav.classList.remove('nav-lista-laranja');
        listaNav.classList.remove('nav-lista-preto');
    } else if (scrollY >= 1400 && scrollY <= 2725 || scrollY >=  3326 && scrollY <= 4000 ) {
        navbar.style.backgroundColor = 'black';
        navbar.style.boxShadow = "0px 3px 6px black";
        listaNav.classList.remove('nav-lista-vazio');
        listaNav.classList.remove('nav-lista-laranja');
        listaNav.classList.add('nav-lista-preto');
    } else {
        navbar.style.backgroundColor = 'rgb(255, 180, 42)'
        navbar.style.boxShadow = "0px 3px 6px black";
        listaNav.classList.remove('nav-lista-vazio');
        listaNav.classList.add('nav-lista-laranja');
        listaNav.classList.remove('nav-lista-preto');
    }
    
})