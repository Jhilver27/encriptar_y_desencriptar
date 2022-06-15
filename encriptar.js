var input = document.querySelector("input");

function encriptarPalabra(){
    var palabra = input.value.split("");
     var palabraEncriptada=[];
    for(var i = 0; i< palabra.length; i++ ){  // i es la posicion de la letra en la palabra
        if (palabra[i] != "a" && palabra[i] != "e" && palabra[i] != "i" && palabra[i] != "o" && palabra[i] != "u" ){
            palabraEncriptada.push(palabra[i]);
            
        }else{
            if (palabra[i]=="a"){
                palabraEncriptada.push("ai");
                
            }else if(palabra[i]=="e"){
                palabraEncriptada.push("enter");
            
            }else if(palabra[i]=="i"){
                palabraEncriptada.push("imes");
            
            }else if(palabra[i]=="o"){
                palabraEncriptada.push("ober");
                 
            }else if(palabra[i]=="u"){
                palabraEncriptada.push("ufat");
                
            }
        }
    } 
    var respuesta= palabraEncriptada.join('');
    document.getElementById("resultado").innerHTML = respuesta;
    input.value="";
}

var buttonEncriptar=document.querySelector("#boton-encriptar");
buttonEncriptar.onclick=encriptarPalabra;
