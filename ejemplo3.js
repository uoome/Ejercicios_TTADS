var arreglo = [10, 6, 1, 3, 5, 7, 8];
function criterio(x){
    if (x>5) {
        return true;

    }
}
function siVacio(){
    console.log("NO HAY NUMEROS");
}
function buscar(array, criterio, siVacio){
   for (i = 0; i < array.length; i++) {
    if (criterio(array[i]) === true) {
        console.log(array[i])
    }
    else{
        siVacio();
    }   
   }
}
buscar(arreglo, criterio, siVacio)

