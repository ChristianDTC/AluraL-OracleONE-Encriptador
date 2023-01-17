/*BOTONES */
const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const botonCopiar = document.querySelector(".boton-copiar");
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");
const btnArg = document.querySelector(".btn-arg");
const btnUsa = document.querySelector(".btn-usa");


/*CONTENEDORES*/
const html = document.querySelector(".contenedor-html");
const body = document.querySelector(".contenedor-body");
const sectionMunieco = document.querySelector(".section-munieco");
const munieco = document.querySelector(".contenedor-munieco");
const h3 = document.querySelector(".contenedor-h3");
const parrafo = document.querySelector(".contenedor-p");
const copyride = document.querySelector(".copyride");
const txEncriptado = document.querySelector(".contenedor-tx-encriptado");
const contenedorCopiar = document.querySelector(".contenedor-copiar");


/*ELEMENTOS*/
let textoEncriptado = document.querySelector(".texto-encriptado");
let textarea = document.querySelector(".textarea");
const advertencia = document.querySelector(".advertencia");
const link = document.querySelector(".fa-linkedin");
const git = document.querySelector(".fa-github");
const logo = document.querySelector(".img-logo");
const logoW = document.querySelector(".img-logo-w");
const btnLeer = document.querySelector(".btn-leer");
const btnSilencio = document.querySelector(".btn-silencio");


/*ACTIVACION FUNCIONES CON CLICK*/
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;
btnDark.onclick = dark;
btnLight.onclick = light;
btnLeer.onclick = leerTxt;
btnSilencio.onclick = silenciar;
btnArg.onclick = txtEspañol;
btnUsa.onclick = txtIngles;


/*VARIABLE DE CONTROL*/
var puedeLeer = true;


textarea.focus();
/*EL CURSOR QUEDA DENTRO DEL TEXTAREA*/


/* FUNCIONES */

function encriptar(){
    /*ENCRIPTA EL TEXTO CORRECTO*/

    if (recuperarTexto() != false){
        /*CONTROLO SI ME DEVUELVE EL TEXTO*/

        ocultarMunieco();
        textoEncriptado.textContent = encriptarTexto(recuperarTexto());
        /*AGREGO EL TEXTO ENCRIPTADO EN EL PARRAFO DE TEXTO-ENCRIPTADO*/
        if(puedeLeer){
            leer(textarea.value)
        }
        /*LEE EL TEXTO*/
        textarea.value = "";
        /*LIMPIO EL TEXTAREA, QUEDA CON EL PLACEHOLDER*/
        textarea.focus();
        
    } else {

        alert(
            "SOLO SE PERMITE:\nLETRAS EN MINUSCULAS\nSIN ACENTOS\nY ESPACIOS"
        )
        textarea.value = "";
        textarea.focus();
        mostrarMunieco();
    }
}


function desencriptar(){
    /*DESENCRIPTA EL TEXTO CORRECTO*/

    if (recuperarTexto() != false){

        ocultarMunieco();
        textoEncriptado.textContent = desencriptarTexto(recuperarTexto());
        if (puedeLeer){
            leer(textarea.value);
        }
        textarea.value = "";
        textarea.focus();

    } else {

        alert(
            "SOLO SE PERMITE:\nLETRAS EN MINUSCULAS\nSIN ACENTOS\nY ESPACIOS"
        )
        textarea.value = "";
        textarea.focus();
        mostrarMunieco();
    }
}


function copiarTexto(){
    /*COPIO EL TEXTO DE TEXTO-ENCRIPTADO EN EL TEXTAREA*/

    textarea.value = textoEncriptado.textContent;
    /*PASO EL TEXTO ENCRIPTADO AL TEXTAREA*/
    navigator.clipboard.writeText(textoEncriptado.textContent);
    /*COPIO EN EL PORTA PAPELES LO QUE ESTA EN TEXTO-ENCRIPTADO*/
    if (puedeLeer){
        leer(textoEncriptado.textContent);
    }
    textoEncriptado.textContent = "";
    mostrarMunieco();
    textarea.focus();
}


function leerTxt(){
    /*SI PRESIONA EL BOTON LA VARIABLE DE CONTROL CAMBIA Y MUTEA EL LECTOR DE TEXTO*/
    
    puedeLeer = false;
    btnLeer.classList.add("ocultar");
    btnSilencio.classList.remove("ocultar");
}
function leer(texto){
    /*HAGO QUE LEEA EL TEXTO INDICADO*/

    let mensaje = new SpeechSynthesisUtterance();
    mensaje.text = texto;
    mensaje.lang = "es-ES";
    window.speechSynthesis.speak(mensaje);
}
function silenciar(){
    /*SI PRESIONA EL BOTON LA VARIABLE DE CONTROL CAMBIA Y DESMUTEA EL  LECTOR DE TEXTO*/

   puedeLeer = true;
   btnLeer.classList.remove("ocultar");
   btnSilencio.classList.add("ocultar");
}


function dark(){
    /*MODIFICO LOS BACKGROUND PARA DARLE UN MODO OSCURO*/

    html.classList.add("dark");
    body.classList.add("dark");
    advertencia.classList.add("dark")
    btnLeer.classList.add("dark");
    btnSilencio.classList.add("dark");
    btnUsa.classList.add("dark");
    btnArg.classList.add("dark");
    copyride.classList.add("dark");
    link.classList.add("dark");
    git.classList.add("dark");
    textarea.classList.add("dark-grey");
    sectionMunieco.classList.add("dark-grey");
    botonEncriptar.classList.add("dark-grey");
    botonDesencriptar.classList.add("dark-grey");
    botonCopiar.classList.add("dark-grey");
    logo.classList.add("ocultar");
    logoW.classList.remove("ocultar");
    btnDark.classList.add("ocultar");
    btnLight.classList.remove("ocultar");
    textarea.focus();
}
function light(){
    /*DEVUELVO LOS VALORES ORIGINALES, SACO MODO OSCURO*/

    html.classList.remove("dark");
    body.classList.remove("dark");
    advertencia.classList.remove("dark")
    btnLeer.classList.remove("dark");
    btnSilencio.classList.remove("dark");
    btnUsa.classList.remove("dark");
    btnArg.classList.remove("dark");
    copyride.classList.remove("dark");
    link.classList.remove("dark");
    git.classList.remove("dark");
    textarea.classList.remove("dark-grey");
    sectionMunieco.classList.remove("dark-grey")
    botonEncriptar.classList.remove("dark-grey");
    botonDesencriptar.classList.remove("dark-grey");
    botonCopiar.classList.remove("dark-grey");
    logoW.classList.add("ocultar");
    logo.classList.remove("ocultar");
    btnLight.classList.add("ocultar");
    btnDark.classList.remove("ocultar");
    textarea.focus();
}

function txtIngles() {
    /*TRADUCE LOS TEXTO AL INGLES*/
    
    textarea.setAttribute("placeholder", "Enter the text here");
    advertencia.textContent = "Only lowercase letters and no accents";
    document.querySelector("h3").textContent = "No message was found";
    document.querySelector(".txt-p").textContent = "Enter the text you wish to encrypt or decrypt";
    botonEncriptar.textContent = "Encript";
    botonDesencriptar.textContent = "Decript";
    botonCopiar.textContent = "Copy";
    textarea.focus();
    btnUsa.classList.add("ocultar")
    btnArg.classList.remove("ocultar");
}
  
function txtEspañol(){
    /*TRADUCE LOS TEXTOS AL ESPAÑOL*/

    textarea.setAttribute("placeholder", "Ingrese el texto aquí");
    advertencia.textContent = "Sólo letras minúsculas y sin acentos";
    document.querySelector("h3").textContent = "Ningún mensaje fue encontrado";
    document.querySelector(".txt-p").textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    botonEncriptar.textContent = "Encriptar";
    botonDesencriptar.textContent = "Desencriptar";
    botonCopiar.textContent = "Copiar";
    textarea.focus();
    btnUsa.classList.remove("ocultar")
    btnArg.classList.add("ocultar");
}


function recuperarTexto(){
    /*RECUPERO EL TEXTO SI CUMPLE CON LO SOLICITADO*/

    const regEx = /[a-z/ñ\s]/;
    /*VALORES ACEPTADOS*/

    let cumpleRegla = true;
    /*VARIABLE DE CONTROL*/

    for (let i=0; i < textarea.value.length; i++){
        /*RECORRO EL TEXTO LETRA POR LETRA COMPARANDO CON LOS VALORES ACEPTADOS */

        if ((!regEx.test(textarea.value[i]))){
            /*SI DETENCTA UN CARACTER QUE NO ESTA DENTRO DE LOS ACEPTADOS, TERMINA EL FOR Y CAMBIA LA VARIABLE DE CONTROL*/
            cumpleRegla = false;
            break;
        }
    }
    
    if (cumpleRegla){
        /*SI EL TEXTO CUMPLE LOS OBJETIVOS LO RETORNA*/
        return textarea.value;
    } else {
        /*SINO RETORNA FALSE*/
        return cumpleRegla;
    }
}


function ocultarMunieco(){
    /*OCULTO LA SECCION MUÑECO AGREGANDO LA CLASE OCULTAR QUE CREE EN EL CSS*/

    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    mostrarCopiar();
}
function mostrarMunieco(){
    /*MUESTRO LA SECCION MUÑECO REMOVIENDO LA CLASE OCULTAR*/

    munieco.classList.remove("ocultar");
    h3.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
    ocultarCopiar();
}


function mostrarCopiar(){
    /*MUESTRA EL TEXTO Y EL BOTON COPIAR*/

    txEncriptado.classList.remove("ocultar");
    contenedorCopiar.classList.remove("ocultar");
}
function ocultarCopiar(){
    /*OCULTO EL TEXTO Y EL BOTON COPIAR*/

    txEncriptado.classList.add("ocultar");
    contenedorCopiar.classList.add("ocultar");
}


function encriptarTexto(mensaje){
    /* CODIGO DE ENCRIPTACION */

    let texto = mensaje;
    let txtEncriptado = "";

    txtEncriptado = texto.replace(/e/gm, "enter");
    txtEncriptado = txtEncriptado.replace(/o/gm, "ober");
    txtEncriptado = txtEncriptado.replace(/i/gm, "imes");
    txtEncriptado = txtEncriptado.replace(/a/gm, "ai");
    txtEncriptado = txtEncriptado.replace(/u/gm, "ufat");
    
    return txtEncriptado;
}

function desencriptarTexto(mensaje){
    /*CODIGO DE DESENCRIPTACION*/

    let texto = mensaje;
    let txtDesencriptado = "";

    txtDesencriptado = texto.replace(/enter/gm, "e");
    txtDesencriptado = txtDesencriptado.replace(/ober/gm, "o");
    txtDesencriptado = txtDesencriptado.replace(/imes/gm, "i");
    txtDesencriptado = txtDesencriptado.replace(/ai/gm, "a");
    txtDesencriptado = txtDesencriptado.replace(/ufat/gm, "u");
    
    return txtDesencriptado;
}
