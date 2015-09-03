/**
 * Created by DamianVillanueva on 8/28/2015.
 */

var Game=function(name)
{
    this.name=name;
    //Number of shots should be retrieved from a constant
    this.maxNumberShots=10;
    this.player=[];
    this._createPlayers();


};

Game.prototype.start= function () {
    console.log(this.name,'game started');
    console.log('Here should start the game logic');
    console.log('TMP: table', this.player[0].table._field);

    var numShots=0;
    do{
        var pos=this.getUserShot();
        numShots++;
    ///eval shot
    }
    while(numShots<10)

};
Game.prototype._createPlayers= function () {
    //TODO: Number of players should be retrieved from a constant
    var numPlayers=1;
    for(var i=0;i<numPlayers;i++){
        var player=new Player('Player'+ i);
        this.player.push(player)
    }
}

Game.prototype.getUserShot=function(){
    parseInt(window.prompt('Shot?'))
}
