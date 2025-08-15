/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  
     
     
      if(x<0){
        return false ;
         console.log("false")
      };

      let rem = 0 ;
      let rev = 0 ;
      let d = x ; //divisor 

      do{
        rem = d % 10;
        rev = (rev * 10) + rem ;
        d = Math.floor(d/10);
    
      }while( d > 0);
      
   
      
      
      if(rev == x ){
             console.log("true")
             return true;
      }
      console.log("false")
      return false ;
      

};

isPalindrome(121);
