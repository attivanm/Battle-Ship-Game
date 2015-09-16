/**
 * Created by IvanMorales on 09/13/2015.
 */
/*do{
var numPlayers = window.prompt('Number of Players 1,2?');
}while (numPlayers <1 || numPlayers > 2);*/
do {
    var sizeTable = window.prompt('Size of table (between 3 - 10)');
}while (sizeTable <3 || sizeTable > 10 || isNaN(sizeTable));

var bsg = new BattleShipGame(2, sizeTable);