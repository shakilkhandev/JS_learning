
const car = {
    color  :"black",
    model  : "gx8",
    type   : "sedan" ,
    engine : "v8"    ,
    year   : 2022  ,
    mode   : "sports",
    feature : function(newEngine,newMode) {
     this.engine = newEngine  || this.engine;
     this.mode =  newMode || this.mode ;
     return this.engine +"---"+this.mode ;
  }
};
console.log ("year-engine-mode\n-------------------")
console.log (car.year +"---"+ car.feature("v9","Ultimate"));
