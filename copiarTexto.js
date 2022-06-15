function copiarTexto(){
    var content = document.getElementById('resultado');
    content.select();
    document.execCommand('copy');

}