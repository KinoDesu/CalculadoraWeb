let visor = document.getElementById('resultado')
let old = document.querySelector('.old')
let botoes = document.querySelector('.botoes')

//insere o número no input
function insert(num) {

    // if (num == ',') {
    //     console.log("a")
    //     document.querySelector('.ponto').disabled = true
    // }

    // if(num=='+'||'-'||'*')

    visor.value = visor.value + num;
}

function statusChange() {
    console.log("a")
    document.querySelector('.ponto').disabled = false

}

//faz a raiz quadrada do número no input
function raiz() {
    var resultado = visor.value.replaceAll(",", ".");
    var numero = eval(resultado)
    if (resultado) {

        var total = Math.sqrt(numero)

        visor.value = String(Math.round((total + Number.EPSILON) * 100000000) / 100000000).replaceAll(".", ",")

        old.innerHTML = ("√" + numero).replaceAll(".", ",")

    } else {
        visor.value = "Nada..."
    }
}


//faz o quadrado do numero no input
function quadrado() {


    var resultado = visor.value.replaceAll(",", ".");
    var numero = eval(resultado)
    if (resultado) {
        var total = Math.pow(numero, 2)
        var mostrado =
            visor.value = String(Math.round((total + Number.EPSILON) * 100000000) / 100000000).replaceAll(".", ",")
        old.innerHTML = (numero + "²").replaceAll(".", ",")
    }

}

//limpa

function clean() {

    visor.value = "";
    document.querySelector('.old').innerHTML = ""
}

//calcula

function calcular() {
    var resultado = visor.value.replaceAll(",", ".");

    console.log(resultado)
    var antigo = visor.value
    if (resultado) {

        var total = eval(resultado)
        visor.value = String(Math.round((total + Number.EPSILON) * 100000000) / 100000000).replaceAll(".", ",");

        old.innerHTML = antigo.replaceAll(".", ",")
    }
    else {
        visor.value = "Nada..."
    }
}