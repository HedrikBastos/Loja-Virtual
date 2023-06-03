const items = [
    {
        id: 0,
        quantidade: 0,
        nome: 'Notebook gamer',
        valor: ' $4.000,00 - $8.000,00',
        valor2: ''
    },
    {
        id: 1,
        quantidade: 0,
        nome: 'placa de video rtx2060super',
        valor: '$1.600,00',
        valor2: '$2.000,00'
    },
    {
        id: 2,
        quantidade: 0,
        nome: 'Memória ram 16gb',
        valor: '$150,00',
        valor2: '$200 1,00'
    },
    {
        id: 3,
        quantidade: 0,
        nome: 'Fonte 850W',
        valor: '$299,00',
        valor2: ''
    },
    {
        id: 4,
        quantidade: 0,
        nome: 'processador Ryzen',
        valor: '$999,00',
        valor2: '$1.000,00'
    },
    {
        id: 5,
        quantidade: 0,
        nome: 'teclado e Mouse',
        valor: '$280.00',
        valor2: '$120.00'

    },
    {
        id: 6,
        quantidade: 0,
        nome: 'Gabinete',
        valor: ' $480,00',
        valor2: '$500,00'
    },
    {
        id: 7,
        quantidade: 0,
        nome: 'Placa mãe',
        valor: '$837,00',
        valor2: ''
    }
]

var cont = 1;

atualizarLoja = () => {
    let conteinerProdutos = document.querySelectorAll(".produtos");
    let botaoAdicionar = document.querySelectorAll(".botao-adicionar-carrinho");

    items.map((val) => {
        conteinerProdutos[val.id].innerHTML += `<h5 class="fw-bolder" id="name-product">` + val.nome + `</h5>` + `<span class="text-muted text-decoration-line-through">` + val.valor2 + `</span> ` + val.valor;
        botaoAdicionar[val.id].innerHTML += `<div class="text-center"><a class=" btn btn-outline-dark mt-auto" href="#">Adicionar ao carrinho</a></div>`;
    })
}

atualizarLoja();

links = document.getElementsByClassName('adicionaCarrinho');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        items[i].quantidade++;
        let quantidadeCarrinho = document.getElementById('carrinho');
        quantidadeCarrinho.innerHTML = cont++;

        atualizarCarrinho();

    })

}

window.onload = function () {
    let abrirCarrinho = document.getElementById("abrirCarrinho");

    abrirCarrinho.onclick = function () {
        let remove = document.getElementById("remove");
        let esconder = document.getElementById('esconder');
        let conteinerCarrinho = document.getElementById("carrinhoProdutos");
        conteinerCarrinho.style = `display:block;`
        abrirCarrinho.classList.add("hide");
        remove.classList.add("hide");
        esconder.classList.remove("hide");

        esconder.onclick = function () {
            remove.classList.remove("hide")
            conteinerCarrinho.classList.add("hide");
            abrirCarrinho.classList.remove("hide");
            conteinerCarrinho.style = `display:none;`;
            esconder.classList.add('hide');
        }
        conteinerCarrinho.classList.remove("hide");
    };

}


atualizarCarrinho = () => {
    let containerCarrinho = document.getElementById('carrinhoProdutos');
    containerCarrinho.innerHTML = "";
    items.map((val) => {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
       <p style="font-size:16px;">`+ val.nome + ` </br> quantidade: ` + val.quantidade + `</p>
       <hr>`;
        }
    })
}

buscar = document.getElementById("buscar");
buscar.onclick = function () {
    pesquisa();

}

pesquisa = () => {
    let pesquisa = document.querySelector(".pesquisa").value;

    items.map((val) => {
        if (val.nome.toLowerCase().includes(String(pesquisa))) {
            console.log(val);

            window.scroll({
                top: 500,
                left: 500,
                behavior: "smooth",
            });

        } else { console.log("falha"); }
    })
}





