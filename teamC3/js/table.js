/**
 * Created by IvanMorales and MiguelTerceros and DamianVillanueva on 09/13/2015.
 */

/**
 * clase table que recibe un tamaño
 * @param size
 * @constructor
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
/**
 * metodo que inicia o imprime en todas las celdas el valor 0
 * recive un tamaño para asi crear toda la matriz y llenar los campos
 * @param size
 */
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
/**
 * metodo que inicia los barcos en la tabla con un identificador por barco
 * @param numShips
 */
Table.prototype.initShips = function(numShips){
    for(var j=1;j<=numShips;j++)
    {

        var shipID = j;
        var shipSize = this.getShipRandomSize(this.numShip(this.size));

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
/**
 * metodo que genera un numero de barcos dependiendo del tamaño de la tabla
 * @param size
 * @returns {number}
 */
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
/**
 * metodo que genera un tamaño para los barcos el size varia de 1 al size enviado
 * como parametro
 * @param size
 * @returns {number}
 */
Table.prototype.getShipRandomSize= function(size)
{
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
/**
 * genera 2 numeros aleatorios que sera el punto de inicio donde se creara el nuevo ship
 * dentro de la tabla
 * @param shipSize
 * @returns {Position}
 */
Table.prototype.getShipRandomPos= function(shipSize)
{
    var column = parseInt(Math.random() * this.size - shipSize);
    if(column < 0){ column = 0;}
    var row = parseInt(Math.random() * this.size);

    return new Position(row, column);
};