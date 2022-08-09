function showPassword() {
    let tipo = document.getElementById("senha-id");
    if (tipo.type == "password") {
        tipo.type = "text";
    } else {
        tipo.type = "password";
    }
}