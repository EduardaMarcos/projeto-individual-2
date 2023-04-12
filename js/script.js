// aparecer incremento

let escolha = document.querySelector("#selecao");
let incremento = document.querySelector(".incremento");

escolha.addEventListener("change", function () {
    if (escolha.value == "cifra") {
        incremento.style.display = "block";
    } else {
        incremento.style.display = "none";
    }
});


// troca do botão
let codi = document.querySelector("#codificando");
let decodi = document.querySelector("#decodificando");
let botao = document.querySelector(".button")

codi.addEventListener("click", function () {
    botao.innerText = "Codificar";
}
)

decodi.addEventListener("click", function () {
    botao.innerText = "Decodificar";
});



let incrementando = document.querySelector("#incrementacao");
let mensagem1 = document.querySelector("#mensagemP");
let mensagem2 = document.querySelector("#mensagemU")

botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    if (codi.checked && escolha.value == "cifra") {
        mensagem2.value = codiCifra(mensagem1.value, parseInt(incrementando.value));
    } else if (decodi.checked && escolha.value == "cifra") {
        mensagem2.value = decodiCifra(
            mensagem1.value.split(""),
            parseInt(incrementando.value)
        );
    } else
     if (codi.checked && escolha.value == "base") {
        mensagem2.value = codiBase(mensagem1.value);
    } else if (decodi.checked && escolha.value == "base") {
        mensagem2.value = decodiBase(mensagem1.value);
    }

});


// codificação e decodificação bs64
function codiBase (msgm){
    return btoa(msgm);
}

function decodiBase (msg){
    return atob(msg);
}
// codificação cifra de cesar

function codiCifra(msg, incremento) {
    var resultD = [];
    var decodeC;
    for (var i = 0; i < msg.length; i++) {
      if (msg[i].charCodeAt() >= 65 && msg[i].charCodeAt() <= 90) {
        decodeC = ((msg[i].charCodeAt() - 65 + incremento) % 26) + 65;
        resultD.push(String.fromCharCode(decodeC));
      } else if (msg[i].charCodeAt() >= 97 && msg[i].charCodeAt() <= 122) {
        decodeC = ((msg[i].charCodeAt() - 97 + incremento) % 26) + 97;
        resultD.push(String.fromCharCode(decodeC));
      } else {
        resultD.push(msg[i]);
      }
    }
    return resultD.join("");
  }
  
  // decodificação cifra de cesar
  
  function decodiCifra(msg, incremento) {
    var resultD = [];
    var decodeC;
    for (var i = 0; i < msg.length; i++) {
      if (msg[i].charCodeAt() >= 65 && msg[i].charCodeAt() <= 90) {
        decodeC = ((msg[i].charCodeAt() - 90 - incremento) % 26) + 90;
        resultD.push(String.fromCharCode(decodeC));
      } else if (msg[i].charCodeAt() >= 97 && msg[i].charCodeAt() <= 122) {
        decodeC = ((msg[i].charCodeAt() - 122 - incremento) % 26) + 122;
        resultD.push(String.fromCharCode(decodeC));
      } else {
        resultD.push(msg[i]);
      }
    }
    return resultD.join("");
  }
  


