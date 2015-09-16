/**
 * Created by Damian Villanueva
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