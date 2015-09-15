/**
 * Created by IvanMorales and MiguelTerceros on 09/13/2015.
 */

do {
    var sizeTable = window.prompt('Size of table (between 3 - 10)');
}while (sizeTable <3 || sizeTable > 10 || isNaN(sizeTable));

var bsg = new BattleShipGame(2, sizeTable);