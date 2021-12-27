const $form = document.querySelector("form")
const $senha = document.querySelector("#senha");
const $alertSenha = document.querySelector("#alert-senha");
const $btnEntrar = document.querySelector("#btn-entrar");
let senhaEstaCorreta = false;
let cartaoBloqueado = false;
let cont = 1;

$form.addEventListener("submit", e => {
    EntrarSistema();
    if (!senhaEstaCorreta && !cartaoBloqueado)
        e.preventDefault();
})

function EntrarSistema() {

    if (!campoEstaPreenchido()) return;

    if ($senha.value === "012345") {
        senhaEstaCorreta = true;
        return
    }

    let tentativa = 3 - cont;
    if (tentativa === 2)
        $alertSenha.innerHTML = 'Você tem mais duas tentativas';
    if (tentativa === 1)
        $alertSenha.innerHTML = 'Você tem mais uma tentativa';
    if (tentativa === 0) {
        alert("Seu cartão está bloqueado.")        
        cartaoBloqueado = true;
        $form.action = "/index.html"
    }

    ++cont;
}

function campoEstaPreenchido() {
    if (!$senha.value.trim())
        $alertSenha.innerHTML = "Digite a sua senha."

    return $senha.value.trim() ? true : false;
}

$senha.addEventListener("input", e => {
    e.target.value = e.target.value.replace(/\D/, "");
    $alertSenha.innerHTML = "";
})