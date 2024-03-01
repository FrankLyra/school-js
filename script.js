
function Carregar(){

    var img = document.getElementById('imagem');
    var msg = window.document.getElementById('msg');

    var dataAtual = new Date();
    var hora = dataAtual.getHours();

    msg.innerHTML =`Agora são ${hora} horas`
  
    if(hora >=0 && hora < 12){
        img.src = 'dia.jpg'

    }else if(hora >=12 && hora < 18){
        img.src = 'tarde.jpg'
    }else{
        img.src = 'noite.jpg'
    }

}