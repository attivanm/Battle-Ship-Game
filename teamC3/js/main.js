/**
 * Created by IvanMorales on 09/13/2015.
 */
/**
 * aqui iniciamos el juego preguntando por el size de la tabla
 * y verificando que el dato ingresado sea numerico entre 1y 10
 */
do {
    var sizeTable = window.prompt('Size of table (between 3 - 10)');
}while (sizeTable <3 || sizeTable > 10 || isNaN(sizeTable));

var bsg = new Game(2, sizeTable);