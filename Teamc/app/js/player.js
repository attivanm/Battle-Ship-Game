
/**
 * Created by DamianVillanueva on 8/28/2015.
 */

var Player =function(name){
    this.name=name;
    this.score=0;
    //TODO: Table size should be read from a constant
    this.table=new Table(8);
    this.numShots=0;
};


