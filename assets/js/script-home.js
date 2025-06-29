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

    class navBarMobile {
        constructor(menuMobile, listaNav, linksNav) {
            this.menuMobile = document.querySelector(menuMobile)
            this.listaNav = document.querySelector(listaNav)
            this.linksNav = document.querySelectorAll(linksNav)
            this.classeAtiva = "ativa"
            this.toqueClick = this.toqueClick.bind(this)
        }

        linksAnimados() {
            this.linksNav.forEach((link, index) => {
                link.style.animation
                    ? (link.style.animation = "")
                    : (link.style.animation = `linkNavOpaco 0.3s ease forwards ${
                        index / 7 + 0.3
                    }s`)
            })
        }

        toqueClick() {
            this.listaNav.classList.toggle(this.classeAtiva)
            this.menuMobile.classList.toggle(this.classeAtiva)
            this.linksAnimados()
        }

        eventoClick() {
            this.menuMobile.addEventListener("click", this.toqueClick)
        }

        inicializar() {
            if (this.menuMobile) {
                this.eventoClick()
            }
            return this
        }
    }

    const navBarMobileFalsa = new navBarMobile(
        ".menu-mobile",
        ".lista-nav",
        ".lista-nav li",
    )
    navBarMobileFalsa.inicializar()

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