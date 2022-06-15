var input = document.querySelector("input");

function desencriptarPalabra(){
    var palabra = input.value.split("");
    var palabraEncriptada=[];
    var i = 0;
    var j = palabra.length;

    while(i < j){  // i es la posicion de la letra en la palabra

        if(palabra[i] != "a" && palabra[i] != "e" && palabra[i] != "i" && palabra[i] != "o" && palabra[i] != "u" ){
            palabraEncriptada.push(palabra[i]);
            i++;            
        }
        else{
            if (palabra[i]=="e" && palabra[i+4]=="r"){
                palabraEncriptada.push("e");
                i = i + 5; 
            }
            else if(palabra[i]=="i" && palabra[i+3]=="s"){
                palabraEncriptada.push("i");
                i = i +4;
            }
            else if(palabra[i]=="a" && palabra[i+1]=="i"){
                palabraEncriptada.push("a");
                i = i + 2; 
            }
            else if(palabra[i]=="o" && palabra[i+3]=="r"){
                palabraEncriptada.push("o");
                i = i +4; 
            }
            else if(palabra[i]=="u" && palabra[i+3]=="t"){
                palabraEncriptada.push("u");
                i = i+4;
            }else{
                alert("La palabra no esta encriptada!!!")
                document.getElementById("textarea1").value = "";
                i= j+1;
            }
        }
    }
     
    var respuesta= palabraEncriptada.join('');
    document.getElementById("resultado").innerHTML = respuesta;
    input.value="";
}

var buttonDesencriptar=document.querySelector("#boton-desencriptar");
buttonDesencriptar.onclick=desencriptarPalabra;
