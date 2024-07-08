
const caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áàäâãåāéèëêẽēíìïîĩīóòöôõōúùüûũūA-Z]/g;

function validarTexto(texto) {
    return !caracteres.test(texto);
}

function encriptar() {
    let capturaTexto = document.querySelector("#input-texto").value;
    if (validarTexto(capturaTexto)) {
        let textoFinal = capturaTexto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.querySelector("#texto-resultado").value = textoFinal;
    } else {
        alert('No se permiten caracteres especiales ni mayúsculas');
    }
}

function desencriptar() {
    let capturaTexto = document.querySelector("#input-texto").value;
    if (validarTexto(capturaTexto)) {
        let textoFinal = capturaTexto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.querySelector("#texto-resultado").value = textoFinal;
    } else {
        alert('No se permiten caracteres especiales ni mayúsculas');
    }
}

function copiar() {
    let textoSalida = document.getElementById('texto-resultado');
    textoSalida.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}