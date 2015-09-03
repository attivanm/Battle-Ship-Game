/**
 * Created by MiguelTerceros on 8/28/2015.
 */
var Game = function(name){
    this.name = name;
    //number of shots should be retrieved from constant
    this.maxNumShots = 10;


    this.players = [];
    this._createPlayers();

};
Game.prototype.start = function(){
    console.log(this.name,'game started');
    console.log(this.name,'Here should start the game logic');


    var numShots = 0;
    do{
        console.log('TMP: table', this.players[0].table._field);
        var pos = this.getUserShot();
        numShots++;
        this.players[0].table._field[pos] = 'X';
    }
    while(numShots < 3);


};
Game.prototype._createPlayers = function (){
    var numPlayers = 1;
    for(var i = 0; i < numPlayers; i++){
        var player = new Player('Player' + i);
        this.players.push(player);
    }
};
Game.prototype.getUserShot = function () {
    return parseInt(window.prompt('x,y'));
};