let contador=0;

while(contador<=10) {
    // aqui validamos una condicion y mientras que se cumpla la condicion que esta dentro de los parentesis, ejecutaremos las acciones que estan dentro de las llaves, hasta que se deje de cumplir la condición
    console.log(`sumar: ${contador}`)//los bactick (comillas inversas) permiten usar variables junto al texto mientras qu elos envolvamos en ${}
    contador=contador+1 //le suma 1 al valor inicial de ocntador
    // contador++ //esto hace lo mismo qu contador=contador+1
    // contador+=1 //esto hace lo mismo que las 2 lineas anteriores
}

do{
// el do while, funciona exactamente igual que el while, pero este primero ejecuta la accion y luego revisa la condicion
    console.log("restar:", contador)
    contador--;
}while(contador>=0)

    // la manera logica de trabajar el ciclo for es usando la palabra reservada "for" seguido de parentesis y dentro de los parentesis indicar als condiciones y acciones a ejecutar
    // la estructura interna de los parentesis consiste en 3 parametros que son (valor inicial, condicion que se debe cumplir para que el ciclo se repita y acciones a ejecutar hasta cumplir la condicion)
    //la condicion que se debe cumplir para ejecutar se lee de la misma manera que un ciclo while, es decir que inicializamos el valor y luego repetimos mientras que se cumpla la condicion, y para que eso se haga ejecutamos una accion 
    // la manera de lecutra logica en lenguaje natural para este ejemplo seria "para 'a' que inicializa en 0, mientras que a sea menor o igual a 10, sumamos a++ (a=a+1)" 

for (a=0;a<=10;a++){
    console.log("ciclo for: "+a)//esto es una manera de concatenar texto con variables
}