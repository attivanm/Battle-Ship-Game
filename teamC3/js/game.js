/**
 * Created by IvanMorales on 09/13/2015.
 */
var BattleShipGame = function(numberPlayers, size){
    this.players = [];
    this.sizeTabe = size;
    this.init(numberPlayers, size);
    this.start(0);
    this.end(0);
};
BattleShipGame.prototype.init = function(numberPlayers, size){
    for(var i = 0; i < numberPlayers; i++){
        var np = i+1;
        var playerName = 'Player '+np;
        var playerTable = new Table(size);
        var player = new Player(playerName, playerTable);
        this.players.push(player);
    }

};
BattleShipGame.prototype.start = function(turn){
    this.printTable(turn);
	do{
		var posX = window.prompt('Row number');
	}while(isNaN(posX));
    do{
		var posY = window.prompt('Column number');
	}while(isNaN(posY));    
	
    console.log('Shot is ', posX,',', posY);
    this.Shot(posX,posY, turn);
};
BattleShipGame.prototype.end = function(turn){
    var enemy;
    this.printTable(turn);
     if(turn==0){ enemy = 1; }
    else{ enemy = 0;}
    alert('Winner!   '+ this.players[enemy].name);
};
BattleShipGame.prototype.printTable = function(turn){
    var enemy;
    var virtualTable = new Array(this.players[turn].table.grid.length);
    if(turn==0)
    {
        enemy = 1;
    }
    else
    {
        enemy = 0;
    }
    for (var i = 0; i < virtualTable.length; i++)
    {
        virtualTable[i] = new Array(virtualTable.length);

    }
    for(var i = 0; i < this.players[enemy].table.grid.length; i++ )
    {
        for(var j = 0; j < this.players[enemy].table.grid.length; j++ )
        {

            if(this.players[enemy].table.grid[i][j]=='0' || this.players[enemy].table.grid[i][j]=='-' || this.players[enemy].table.grid2[i][j]==this.players[enemy].table.grid2[i][j])
               {
               	virtualTable[i][j] = this.players[enemy].table.grid2[i][j];
               }
			else{
            	virtualTable[i][j] = '0';
            			
            	}

        }

    }
    console.log('New Table to ', this.players[enemy].name,'\n',virtualTable.join('\n'));

};
BattleShipGame.prototype.Shot = function(pX,pY, turn){
    var x = pX-1;
    var y = pY-1;
    var enemy;

    if(turn==0)
    {
        enemy =1;
    }
    else
    {
        enemy=0;
    }
    var idship = this.players[enemy].table.grid[x][y];
    if(this.players[enemy].table.grid[x][y]!='0'  && this.players[enemy].table.grid[x][y]!='-' )
    {
        alert('Successful shot');
        this.players[enemy].table.grid2[x][y]=this.players[enemy].table.grid[x][y];
        this.players[enemy].table.totalship--;
        this.printTable(enemy);
        if(this.players[enemy].table.totalship>0)
        {
            this.start(turn);
        }
        else{
        	this.players[enemy].table.grid2[x][y]=this.players[enemy].table.grid[x][y];      
            this.end(turn);
        }

    }
    else
    {
    	    this.players[enemy].table.grid2[x][y]='-';
            alert('Missed shot. The other player has to shot');
            if (turn == 0)
                turn = 1;
            else
                turn = 0;

            this.start(turn);

    }
};