

function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 ||
        fim.value.length  == 0 ||
        passo.value.length == 0 ){

            res.innerHTML = 'Impossível contar'

        //alert('Faltam dados!')
        }else{
            res.innerHTML ='Contando: <br>'
            let i = Number(inicio.value)
            let f =  Number(fim.value)
            let p = Number(passo.value)

            //valida passo e adiciona
            if (p <= 0) {
                alert('Passo inválido, considerar PASSO 1')
                p=1
            }
            //contagem crescente
            if(i < f){
                for(let c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1F449}`
                }
                //contagem regressiva
            }else{
                for(let c = i; c >= f; c -= p ){
                    res.innerHTML += `${c} \u{1F449}`
                }
            }


            res.innerHTML  += `\u{1F3C1}`
        }

   
}