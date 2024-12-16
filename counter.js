/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
             
             let reset = 0 ;
             let increment = 0 ;
             let decrement = 0 ; 

    return { 
         increment : function (){
            increment++;
            init++;
         return   init;
    } ,
        reset : function (){
           if( increment>0 || decrement>0 ){
           init = init - increment + decrement ;
           increment = 0 ;
           decrement = 0 ;
           }
           return   init;
    } ,
    decrement : function (){
            init--;
            decrement++;
            return   init;
    }
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
