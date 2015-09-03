/**
 * Created by MiguelTerceros on 8/28/2015.
 */
var Player = function (name) {
    this.name = name;
    this.score= 0;
    this.numShots = 0;
    // TODO: table size shouldbe readfrom a constant
    this.table = new Table(8);
}