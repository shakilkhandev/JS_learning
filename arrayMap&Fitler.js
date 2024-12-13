const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] ;
console.log(numbers)


const evenNumber = numbers.filter(function(x){
  if(x%2===0){
    return true ; 
  }else{
    return false ;
  }
})


console.log("even numbers of the array ");
console.log(evenNumber);


const oddNumber = numbers.map(x => x%2==1 ? x :false).filter((x) => x !== false );


console.log("odd numbers of the array ");
console.log(oddNumber);

const isFivePresent = function(){ 
                        let status = "No" ;
                        for(const five of numbers){
                         
                          if (five == 5){
                             return  "Yes";
                          }
                        }
                          return status ;
                    }
                                                                  
console.log( `5 is present = ${isFivePresent()}` )

const isfive = numbers.map(x => x===5 ? true:false).filter(x => x!==false );
console.log (isfive);
