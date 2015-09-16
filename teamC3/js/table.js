/**
 * Created by IvanMorales and MiguelTerceros on 09/13/2015.
 */
var Table = function (size) {
    this.size = size;
    this.ships = [];
    this.grid = new Array(size);
    this.grid2 = new Array(size);
    var numShips = this.numShip(size);	
    this.totalship = 0;
    this.initGrid(this.size);
    this.initShips(numShips);

};
Table.prototype.initGrid = function (size){
    var EMPTY_CELL = '0';
    for (var i = 0; i < size; i++)
    {
        this.grid[i] = new Array(size);
        this.grid2[i] = new Array(size);

    }
    for (var i = 0; i < size; i++)
    {
        for (var j = 0; j < size; j++) {
            this.grid[i][j] = EMPTY_CELL;
            this.grid2[i][j] = EMPTY_CELL;
        }
        console.log('\n');
    }
};
Table.prototype.initShips = function(numShips){
    for(var j=1;j<=numShips;j++)
    {

        var shipID = j;
        var shipSize = this.getShipRandomSize(this.numShip(this.size));
        var shipInitPos = this.getShipRandomPos(shipSize);
        var ship = new Ship(shipSize, shipInitPos,shipID);
        this.totalship += shipSize;
        this.ships.push(ship);
        var k = shipInitPos.getRow();
				for (var i = shipInitPos.getColumn(); i < shipInitPos.getColumn() + shipSize; i++) 
				{
					this.grid[k][i] = shipID;
				}					

    }

};
Table.prototype.numShip = function(size){
	 var num = 0;  
	   switch (size){
        case '3': num = 2;
            break;
        case '4': num = 3;
            break
        case '5': num = 4;
            break
        case '6': num = 4;
            break			
		default : num = 5;
		
    }
	return num;
};
Table.prototype.getShipRandomSize= function(size)
{
	var tam = parseInt(Math.random()* size)+1;
    return tam; 
}


Table.prototype.getShipRandomPos= function(shipSize)
{
    var column = parseInt(Math.random() * this.size - shipSize);
    if(column < 0){ column = 0;}
    var row = parseInt(Math.random() * this.size);

    return new Position(row, column);
};