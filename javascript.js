function encriptar(){


    var texto = document.getElementById("inputTexto").value.toLocaleLowerCase();
    

    // i es para que efectue mayusculas y minusculas
    //g es para toda la line u oracion 
    //m es para que efectue multiples lineas o un parrafo

    var textCifrado= texto.replace(/e/img,"enter");
    
    var textCifrado= textCifrado.replace(/o/img,"ober"); 
    
    var textCifrado= textCifrado.replace(/i/img,"imes");
    
    var textCifrado= textCifrado.replace(/a/img,"ai");
    
    var textCifrado= textCifrado.replace(/u/img,"ufat");

    document.getElementById("imgDer").style.display= "none";

    document.getElementById("texto").style.display= "none";

    document.getElementById("texto2").innerHTML= textCifrado;

    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}

function desencriptar(){


    var texto = document.getElementById("inputTexto").value.toLocaleLowerCase();
    

    // i es para que efectue mayusculas y minusculas
    //g es para toda la line u oracion 
    //m es para que efectue multiples lineas o un parrafo

    var textCifrado= texto.replace(/enter/img,"e");
    
    var textCifrado= textCifrado.replace(/ober/img,"o"); 
    
    var textCifrado= textCifrado.replace(/imes/img,"i");
    
    var textCifrado= textCifrado.replace(/ai/img,"a");
    
    var textCifrado= textCifrado.replace(/ufat/img,"u");

    document.getElementById("imgDer").style.display= "none";

    document.getElementById("texto").style.display= "none";

    document.getElementById("texto2").innerHTML= textCifrado;

    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

}

function copiar(){

    var contenido= document.querySelector("#texto2");
    contenido.select();

    document.execCommand("copy");
    alert("se copio");
}