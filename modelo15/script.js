

function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-homem.jpg')
            } else if(idade < 20){
                img.setAttribute('src', 'foto-jovem-homem.jpg')
            } else if(idade < 45){
                img.setAttribute('src', 'foto-hom-adulto.jpg')
            }else if(idade < 80){
                img.setAttribute('src', 'foto-homem-idoso.jpg')
            }
    
        }else if(fsex[1].checked){
            genero='Mulher'

            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-mulher.jpg')
            } else if(idade < 20){
                img.setAttribute('src', 'foto-jovem-mulher.jpg')
            } else if(idade < 45){
                img.setAttribute('src', 'foto-mulher-adulta.jpg')
            }else if(idade < 80){
                img.setAttribute('src', 'foto-mulher-idosa.jpg')
            }
        }


        
        res.innerHTML=`Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}