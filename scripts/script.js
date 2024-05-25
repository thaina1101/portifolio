var texto ="Siliro";
var textoElemento = document.querySelector(".titulo__destaque");
var atraso = 200;

var contadorDeLetras= 0 ;

function escreverTexto(){
    if (contadorDeLetras < texto.length){
        textoElemento.textContent += texto.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(escreverTexto, atraso);
    }
}
escreverTexto();
