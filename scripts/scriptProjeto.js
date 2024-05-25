var textoProjeto = "Projetos";
var textoProjetoElemento = document.querySelector(".projeto__titulo__destaque");
var atrasoProjeto = 200;

var contagemDeLetrasProjeto = 0;

function escreverTextoProjeto(){
    if (contagemDeLetrasProjeto < textoProjeto.length){
        textoProjetoElemento.textContent += textoProjeto.charAt(contagemDeLetrasProjeto);
        contagemDeLetrasProjeto++;
        setTimeout(escreverTextoProjeto, atrasoProjeto);
    }
}
escreverTextoProjeto();