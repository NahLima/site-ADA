document.getElementById("botaoEnviar").addEventListener("click", validarFormulario)

function validarFormulario() {
    if (document.getElementById("name").value != "" &&
        document.getElementById("email").value != "" &&
        document.getElementById("msg").value != "") {
        alert(" Contato recebido,você recebera as novidades por email")
    } else {
        alert("Por favor insira os dados corretamente!")
    }
}
