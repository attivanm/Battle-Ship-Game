/**
 * Created by IvanMorales and MiguelTerceros on 09/13/2015.
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