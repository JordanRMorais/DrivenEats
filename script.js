let comida = "";
let bebida = "";
let sobremesa = "";
let precoComida = "";
let precoBebida= "";
let precoSobremesa = "";

function selecaoComida(a) {
    comida = a.querySelector('.prato p').textContent;
    precoComida = a.querySelector('.preco').textContent;
const selecionadoAntes = document.querySelector(".comida .selecionado");
if (selecionadoAntes !== null){
    selecionadoAntes.classList.remove("selecionado");
}
a.classList.add("selecionado");
}

function selecaoBebida(a) {
    bebida = a.querySelector('.prato p').textContent;
    precoBebida = a.querySelector('.preco').textContent;
    const selecionadoAntes = document.querySelector(".bebida .selecionado");
    if (selecionadoAntes !== null){
        selecionadoAntes.classList.remove("selecionado");
    }
    a.classList.add("selecionado");
}

function selecaoSobremesa(a) {
    sobremesa = a.querySelector('.prato p').textContent;
    precoSobremesa = a.querySelector('.preco').textContent;

    const selecionadoAntes = document.querySelector(".sobremesa .selecionado");
    if (selecionadoAntes !== null){
        selecionadoAntes.classList.remove("selecionado");
    }
    a.classList.add("selecionado");

    if (comida !== "" && bebida !== "" && sobremesa !== ""){
        const x = document.querySelector(".botao-confirmacao");
        const y = document.querySelector(".botao-fechar");
        x.classList.add("escondido");
        y.classList.remove("escondido");
}
}

function confirmacao(){
const pedido = document.querySelector(".overlay");
pedido.classList.add("visivel");

const tela = document.querySelector(".tela-pedido");
tela.innerHTML = `
<p1>Confirme seu pedido</p1>
<p2>${comida}: ${precoComida}</p2>
<p2>${bebida}: ${precoBebida}</p2>
<p2>${sobremesa}: ${precoSobremesa}</p2>
<p1>TOTAL: ${somatoria(precoComida, precoBebida, precoSobremesa)} </p1>
<a id="confirmar-pedido">Tudo certo, pode pedir!</a>
<button id="cancelar-pedido">Cancelar</button>`;

document.getElementById("confirmar-pedido").onclick = enviarMensagem;
document.getElementById("cancelar-pedido").onclick = cancelado;


}

function somatoria(comida, bebida, sobremesa){
    comida = Number(comida.replace("R$","").replace(",","."));
    bebida = Number(bebida.replace("R$","").replace(",","."));
    sobremesa = Number(sobremesa.replace("R$","").replace(",","."));
    return `R$ ${(comida+bebida+sobremesa).toFixed(2)}`;
}

function cancelado() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("visivel");
 }

function enviarMensagem (){

const mensagem = `Olá, gostaria de fazer o pedido: \n
 - Prato: ${comida} - ${precoComida} \n
 - Bebida: ${bebida} - ${precoBebida} \n
 - Sobremesa: ${sobremesa} - ${precoSobremesa}\n
 Valor Total: ${somatoria(precoComida, precoBebida, precoSobremesa)}`;

 const mensagemCodificada = encodeURIComponent(mensagem);
 const url = `https://wa.me/5531983193208/?text=${mensagem}`;
 window.location.href = url;
 
}


