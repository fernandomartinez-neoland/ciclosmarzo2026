let contador=0;

while(contador<=10) {
    // aqui validamos una condicion y mientras que se cumpla la condicion que esta dentro de los parentesis, ejecutaremos las acciones que estan dentro de las llaves, hasta que se deje de cumplir la condición
    console.log(`sumar: ${contador}`)
    contador=contador+1 //le suma 1 al valor inicial de ocntador
    // contador++ //esto hace lo mismo qu contador=contador+1
    // contador+=1 //esto hace lo mismo que las 2 lineas anteriores
}

do{
// el do while, funciona exactamente igual que el while, pero este primero ejecuta la accion y luego revisa la condicion
    console.log("restar:", contador)
    contador--;
}while(contador>=0)