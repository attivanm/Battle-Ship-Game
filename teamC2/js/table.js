/**
 * Created by IvanMorales and MiguelTerceros on 09/13/2015.
 */
var Table = function (size) {
    this.size = size;
    this.ships = [];
    this.grid = new Array(size);
    var numShips = 0;
    switch (size){
        case '3': numShips = 1;
            break;
        case '4': numShips = 2;
            break
        default : numShips = 3;
    }
    this.totalship = 0;
    this.initGrid(this.size);
    this.initShips(numShips);
};
Table.prototype.initGrid = function (size){
    var EMPTY_CELL = '0';
    for (var i = 0; i < size; i++)
    {
        this.grid[i] = new Array(size);
        //this.grid2[i] = new Array(size);

    }
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++) {
            this.grid[i][j] = EMPTY_CELL;
            //this.grid2[i][j] = EMPTY_CELL;
        }
        console.log('\n');
    }
};
Table.prototype.initShips = function(numShips){
    for(var j=1;j<=numShips;j++)
    {
        var shipID = j;
        var shipSize = this.getShipRandomSize();
        var shipInitPos = this.getShipRandomPos(shipSize);
        var ship = new Ship(shipSize, shipInitPos,shipID);
        this.totalship += shipSize;
        this.ships.push(ship);
        var k = shipInitPos.getRow();
        for (var i = shipInitPos.getColumn(); i < shipInitPos.getColumn() + shipSize; i++) {
            this.grid[k][i] = shipID;
        }
    }

};
Table.prototype.getShipRandomSize= function()
{
    return  parseInt(Math.random()* 2)+1;
}
Table.prototype.getShipRandomPos= function(shipSize)
{
    var column = parseInt(Math.random() * this.size - shipSize);
    if(column == -1){ column = 0;}
    var row = parseInt(Math.random() * this.size);
    console.log('fila '+row+ ' col ' + column + ' colFin ' + (column+shipSize));

    return new Axis(row, column);
};
