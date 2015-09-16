/**
 * Created by IvanMorales on 09/13/2015.
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
        //var shipInitPos = this.getShipRandomPos(shipSize);
        //var shipInitPos;
        //var k;

        console.log('shipsize',shipSize);
        var val='false';


        ///////////////////

        if(j%2==0)
        {
            while(val=='false') {
                var shipInitPos = this.getShipRandomPos(shipSize);
                var k = shipInitPos.getRow();
                var validate=0;
                for (var i = shipInitPos.getColumn(); i < shipInitPos.getColumn() + shipSize; i++) {
                    if (this.grid[k][i] == '0') {
                        validate = validate + 1;
                        console.log('validate: ', validate);

                    }
                }
                if(validate==shipSize)
                {
                    val='true';
                }
            }
        }
        else
        {
            while(val=='false')
            {
                var shipInitPos = this.getShipRandomPos(shipSize);
                var k = shipInitPos.getRow();
                var validate=0;
                for (var i = shipInitPos.getColumn(); i < shipInitPos.getColumn() + shipSize; i++) {
                    if(this.grid[i][k] == '0')
                    {
                        validate=validate+1;
                        console.log('validate: ',validate);

                    }

                }
                if(validate==shipSize)
                {
                    val='true';
                }
            }

        }
/////////////////////



        var ship = new Ship(shipSize, shipInitPos,shipID);
        this.totalship += shipSize;
        this.ships.push(ship);
        //var k = shipInitPos.getRow();

        //var validate=0;
        //var val=false;


        if(j%2==0)
        {
            for (var l = shipInitPos.getColumn(); l < shipInitPos.getColumn() + shipSize; l++) {
                this.grid[k][l] = shipID;
            }
        }
        else {
            for (var l = shipInitPos.getColumn(); l < shipInitPos.getColumn() + shipSize; l++) {
                this.grid[l][k] = shipID;
            }
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
        case '6': num = 6;
            break			
		default : num = 8;
		
    }
	return num;
};
Table.prototype.getShipRandomSize= function(size)
{
	//var tam = parseInt(Math.random()* size)+1;
    if(size<5)
    {
        var tam = parseInt(Math.random()* 1)+2;

    }
    else if(size<8)
    {
        var tam = parseInt(Math.random()* 2)+2;
    }
    else
    {
        var tam = parseInt(Math.random()* 3)+2;
    }




    return tam; 
};


Table.prototype.getShipRandomPos= function(shipSize)
{
    var column = parseInt(Math.random() * this.size - shipSize);
    if(column < 0){ column = 0;}
    var row = parseInt(Math.random() * this.size);
    //console.log('colum: ', column);
   // console.log('row: ', row);
    return new Position(row, column);




};