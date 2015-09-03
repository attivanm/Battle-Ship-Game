/**
 * Created by ivanmorales on 8/28/2015.
 */

var Game = function(name) {
    this.name=name;
    // number of shots and players should be retrieved from a constant
    this.maxNumberShots = 10;


    this.players=[];
    this._createPlayers();
};


Game.prototype.start=function(){
    console.log(this.name,'game started');
    console.log('Here should start the game logic!');
    console.log('TMP: table', this.players[0].table._field);
    var numShots=0;
    do{
        var pos = this.getUserShot();
        numShots++;
        this.players[0].table._field[pos]= 'x';
        console.log('TMP: table', this.players[0].table._field);
    }while(numShots<1);


};
Game.prototype._createPlayers = function() {
    var numPlayer = 1;
    for(var i=0; i<numPlayer;i++){
        var player = new Player('Player' + i);
        this.players.push(player);
    }
};

Game.prototype.getUserShot =function(){
    return (window.prompt('shot? (x)'));
}

