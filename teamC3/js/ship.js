/**
 * Created by IvanMorales on 09/13/2015.
 */
/**
 * clase ship, recive un size, posicion inicial y un ID que lo identifica de los
 * demas barcos
 * @param size
 * @param initPos
 * @param id
 * @constructor
 */
var Ship = function(size, initPos, id){
    this.size = size;
    this.position = initPos;
    this.id=id;
}