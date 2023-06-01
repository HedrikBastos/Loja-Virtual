var cont = 1;
let produtos = buscarProdutosLoja();

atualizarLoja = () => {
    let conteinerProdutos = document.querySelectorAll(".produtos");
    let botaoAdicionar = $(".botao-adicionar-carrinho");

    produtos.map((produto) => {
        conteinerProdutos[produto.id].innerHTML += `<h5 class="fw-bolder" id="name-product">` + produto.nome + `</h5>` + `<span class="text-muted text-decoration-line-through">` + produto.valor2 + `</span> ` + produto.valor;
        botaoAdicionar[produto.id].innerHTML += `<div class="text-center"><a class=" btn btn-outline-dark mt-auto" href="#">Adicionar ao carrinho</a></div>`;
    })
}

links = document.getElementsByClassName('adicionaCarrinho');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        produtos[i].quantidade++;
        let quantidadeCarrinho = document.getElementById('carrinho');
        quantidadeCarrinho.innerHTML = cont++;

        atualizarCarrinho();

    })

}

//abrir e fechar carrinho
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
    produtos.map((val) => {
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

    produtos.map((val) => {
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





