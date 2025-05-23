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
const botao_voltar = document.getElementById('botao-voltar')
const botao_avancar = document.getElementById('botao-avancar')

let imagem_atual = 0

function esconder_imagem() {
    carrossel.forEach(item => item.classList.remove('on'))
}

function mostrar_imagem() {
    carrossel[imagem_atual].classList.add('on')
}

function voltar_imagem() {
    esconder_imagem()
    if(imagem_atual === 0) {
        imagem_atual = carrossel.length -1
    } else {
        imagem_atual--
    }
    mostrar_imagem()
}

function avancar_imagem() {
    esconder_imagem()
    if(imagem_atual === carrossel.length -1) {
        imagem_atual = 0
    } else {
        imagem_atual++
    }
    mostrar_imagem()
}

botao_voltar.addEventListener('click', voltar_imagem)
botao_avancar.addEventListener('click', avancar_imagem)