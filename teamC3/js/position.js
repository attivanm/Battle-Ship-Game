/**
 * Created by IvanMorales on 09/13/2015.
 */
/**
 * clase que guarda la posicion de un barco en la tabla
 * tiene 2 parametros que devuelven la fila y columna donde se encuentra el barco
 * @param row
 * @param col
 * @constructor
 */
var Position = function(row, col){
    var _pos = [row, col];
    this.getColumn = function(){
        return _pos[1];
    };
    this.getRow = function(){
        return _pos[0];
    };
}