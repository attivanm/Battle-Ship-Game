/**
 * Created by DamianVillanueva on 8/28/2015.
 */

var Table = function (size) {
    this.size=size;
    this.ships=[];
    this._field=[];
    this._createShips();
    this._initFields();
    this._placeShips();
    //this.ramdom=parseInt(Math.random()*(size-this.sizeShip));


/*
    var tableGame=[size];
    for(var i=0;i<size;i++){
        tableGame[i]='';
    }*/
};


Table.prototype._createShips=function(){
    //TODO: NUmber of ships should be retrieved from a constant
    var numShips=1;
    for(var i=0;i<numShips;i++){
        var ship =new ship(i, 3);
        this.ships.push(ship);
    }
};

Table.prototype._initFields=function(){
    for(var i=0;i<this.size;i++){
        this._field.push('-');
    }
};
Table.prototype._placeShips=function(){

    for(var i=0;i<this.ships.length;i++)
    {
        var initPos=parseInt(Math.random()*(this.size-ship.sizeShip));
        for(var j=initPos;i<(initPos+ship.sizeShip);j++){
            this._field[j]=ship.id;
        }
    }

}