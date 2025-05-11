// Navbar com scroll inteligente:

let lastScrollTop = 0
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-70px"
    } else {
        navbar.style.top = "0"
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})

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