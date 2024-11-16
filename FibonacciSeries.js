function fibonacciSeries(term){
        let count  = 0 ;
        let first  = 0 ;
        let second = 1 ;
        let number ;
        
    for (let i = 0 ; i < term ; i++ ){
                       
               number = count  ;
                        count++;
                       
         if (count>=2){
              number = first + second ;
              first  = second ;
              second = number ;
         }
         console.log(number);
              
    }
}
      let term = 9 ;
      fibonacciSeries(term);
