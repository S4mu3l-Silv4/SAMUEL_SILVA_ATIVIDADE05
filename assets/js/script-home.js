// Nav bar com scroll inteligente:

let ultimoScrollTop = 0
const navBar = document.getElementById("nav-bar")

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > ultimoScrollTop) {
        navBar.style.top = "-55px"
    } else {
        navBar.style.top = "0"
    }

    ultimoScrollTop = scrollTop <= 0 ? 0 : scrollTop
})

// Nav bar hambúrguer em telas mobile:

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`)
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass)
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent()
        }
        return this
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
mobileNavbar.init()

// Carrossel de imagens:

const carrossel = document.querySelectorAll('.slider')
const botaoVoltar = document.getElementById('botao-voltar')
const botaoAvancar = document.getElementById('botao-avancar')

let imagemAtual = 0

function esconderImagem() {
    carrossel.forEach(item => item.classList.remove('on'))
}

function mostrarImagem() {
    carrossel[imagemAtual].classList.add('on')
}

function voltarImagem() {
    esconderImagem()
    if(imagemAtual === 0) {
        imagemAtual = carrossel.length -1
    } else {
        imagemAtual--
    }
    mostrarImagem()
}

function avancarImagem() {
    esconderImagem()
    if(imagemAtual === carrossel.length -1) {
        imagemAtual = 0
    } else {
        imagemAtual++
    }
    mostrarImagem()
}

botaoVoltar.addEventListener('click', voltarImagem)
botaoAvancar.addEventListener('click', avancarImagem)