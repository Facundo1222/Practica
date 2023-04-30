
function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i Para que afecte tanto mayusculas y minusculas
    // g es para toda la linea
    //m para que afecte multiples lineas o parrafos
    var textCifrado = texto.replace(/e/igm,"enter");
    var textCifrado = textCifrado.replace(/o/igm,"ober");
    var textCifrado = textCifrado.replace(/i/igm,"imes");
    var textCifrado = textCifrado.replace(/a/igm,"ai");
    var textCifrado = textCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto-subtitulo").style.display = "none";
    document.getElementById("texto-subtitulo-2").innerHTML = textCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    // i Para que afecte tanto mayusculas y minusculas
    // g es para toda la linea
    //m para que afecte multiples lineas o parrafos
    var textCifrado = texto.replace(/enter/igm,"e");
    var textCifrado = textCifrado.replace(/ober/igm,"o");
    var textCifrado = textCifrado.replace(/imes/igm,"i");
    var textCifrado = textCifrado.replace(/ai/igm,"a");
    var textCifrado = textCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto-subtitulo").style.display = "none";
    document.getElementById("texto-subtitulo-2").innerHTML = textCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}


function copiar(){
    var contenido = document.querySelector("#texto-subtitulo-2");
    contenido.select();
    document.execCommand("copy");
    alert("!se copio¡");
}

