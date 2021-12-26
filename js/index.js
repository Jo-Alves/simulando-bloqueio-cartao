const $form = document.querySelector("form");
const $agencia = document.querySelector("#agencia");
const $conta = document.querySelector("#conta");
const $btnProximo = document.querySelector("#btn-proximo");
const $alertConta = document.querySelector("#alert-conta");
const $alertAgencia = document.querySelector("#alert-agencia");
let podeIrParaProximo = false;
let camposValidos = false;

$form.addEventListener("submit", e => {

    IrParaProximo();
    if (!podeIrParaProximo) {
        e.preventDefault();
        return
    }

    localStorage.setItem("agencia", $agencia.value)
    localStorage.setItem("conta", $conta.value)

    
})

function VerificarCampos() {

    if (!$agencia.value.trim()) {
        $alertAgencia.innerHTML = "Informe sua agência!"
    }

    if (!$conta.value.trim()) {
        $alertConta.innerHTML = "Informe sua conta!"
    }

    camposValidos = $agencia.value.trim() && $conta.value.trim() ? true : false;
}

function IrParaProximo() {
    
    VerificarCampos();
    if (!camposValidos) return;

    if ($agencia.value !== "1234") {
        $alertAgencia.innerHTML = "Número da agência incorreta!"
    }

    if ($conta.value !== "567890") {
        $alertConta.innerHTML = "Número da conta incorreta!"
    }

    podeIrParaProximo = $agencia.value === "1234" && $conta.value === "567890" ? true : false;
}


$agencia.addEventListener("input", () => {
    $alertAgencia.innerHTML = "";
    $agencia.value = $agencia.value.replace(/\D/g, "")
})

$conta.addEventListener("input", () => {
    $alertConta.innerHTML = "";
    $conta.value = $conta.value.replace(/\D/g, "")
})