function limpiar() {
    document.getElementById('miFormulario').requestFullscreen();
}

function sumar() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    alert(x+y)
    document.getElementById('el-resultado').innerHTML = x+y;

}

function restar() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    alert(x+y)
    document.getElementById('el-resultado').innerHTML = x-y;

}

function multiplicar() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    alert(x+y)
    document.getElementById('el-resultado').innerHTML = x*y;

}

function dividir() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    alert(x+y)
    document.getElementById('el-resultado').innerHTML = x/y;

}