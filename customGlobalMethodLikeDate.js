class Mytime {
    
    constructor (min,second){
        this.min = min ;
        this.second = second;
      
    }                    
     mywatch(){
        console.log( this.min, this.second );
    }
    
    myalarm(){
      console.log("alarm is off now");
    }
}


const ytime = new Mytime(1,22);

                            //    aurgument given to simulate the actual Date like behavior ()  

function myfunction(){
        ytime.mywatch() ;
} 

myfunction.alarm = ()=>{
        ytime.myalarm();
};

global.myfunction = myfunction ;

let new1 = myfunction ;
new1();
new1.alarm();
