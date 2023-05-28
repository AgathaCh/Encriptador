/* Inicio Algoritmo */

const encriptadorTexto = document.getElementById('encriptador-textarea');
const encriptarButton = document.getElementById('button-encriptar');
const desencriptarButton = document.getElementById('button-desencriptar');
const mensajeNoEncontrado = document.getElementById('mensaje-no-encontrado');
const copyEncriptado = document.getElementById('copy-encriptado');
const encriptadorOutput = document.getElementById('encriptador-output');
const copiarButton = document.getElementById('copy-button');

encriptarButton.addEventListener ('click', encriptar);

function encriptar() {
    
    let resultadoEncriptador  = encriptadorTexto.value.split('');

   resultadoEncriptador = resultadoEncriptador.map(letra => {
        if (letra=='a') {
            letra = letra.replace ('a', 'ai')
        }

        if (letra=='e') {
            letra = letra.replace ('e', 'enter')
        }

        if (letra=='i') {
            letra = letra.replace ('i', 'imes')
        }

        if (letra=='o') {
            letra = letra.replace ('o', 'ober')
        }

        if (letra=='u') {
            letra = letra.replace ('u', 'ufat')
        }

        return letra;
        
    });
    resultadoEncriptador = resultadoEncriptador.join('');

    if (!resultadoEncriptador) {
        mensajeNoEncontrado.style.display ='flex';
        copyEncriptado.style.display = 'none';
    }
    else {
        copyEncriptado.style.display = 'flex';
        mensajeNoEncontrado.style.display = 'none';
        encriptadorOutput.value = resultadoEncriptador;
    }
}

desencriptarButton.addEventListener ('click', desencriptar);

function desencriptar() {
    let resultadoDesencriptador = encriptadorTexto.value;

    resultadoDesencriptador = resultadoDesencriptador.replaceAll('ai', 'a');
    resultadoDesencriptador = resultadoDesencriptador.replaceAll('enter', 'e');
    resultadoDesencriptador = resultadoDesencriptador.replaceAll('imes', 'i');
    resultadoDesencriptador = resultadoDesencriptador.replaceAll('ober', 'o');
    resultadoDesencriptador = resultadoDesencriptador.replaceAll('ufat', 'u');
 
    if (!resultadoDesencriptador) {
        mensajeNoEncontrado.style.display ='flex';
        copyEncriptado.style.display = 'none';
    }
    else {
        copyEncriptado.style.display = 'flex';
        mensajeNoEncontrado.style.display = 'none';
        encriptadorOutput.value = resultadoDesencriptador;
    }
}

copiarButton.addEventListener('click', copiar);

function copiar () {
    navigator.clipboard.writeText(encriptadorOutput.value);
}


/* Fin Algoritmo */

/* Código creado por Raquel Bonilla | Code made by Raquel Bonilla  */