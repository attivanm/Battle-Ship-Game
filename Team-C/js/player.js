/**
 * Created by ivanmorales on 8/28/2015.
 */

var Player = function(name) {
   this.name=name;
    this.score = 0;
    this.numShots = 0;
    // Todo: table  size should be read from a constant
    this.table = new Table(8);
};


