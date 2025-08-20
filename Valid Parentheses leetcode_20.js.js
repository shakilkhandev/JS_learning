const s = "([]))";




var isValid = function(s) {
   
    
   if (s.length%2 !== 0 ){
     return false ; 
    }
    
    let stack = [];
    
    for (var i = 0; i < s.length;  i++ )
    {
     
    let char = s[i];
    
    switch(char){
      
        case "(" :
          stack.push( ")" );
          break;
        case "{" : 
          stack.push("}");
        break ; 
        
        case "[" :
          stack.push("]")
          break ;
        default:
        let topElement = stack.pop();
        if(char !== topElement ){
          return false ;
        }
        
        
          
    }
       
     
      
    }
    
    return stack.length === 0 ;
    
    
};

let result = isValid(s);

console.log (result) ;
