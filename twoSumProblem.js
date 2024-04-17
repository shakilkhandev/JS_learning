let target = 19 ;

const array1 = [12,10,7,9]

for(i=0 ; i<array1.length;i++){
    for(j=array1.length-1; j>0; j--){
        
        function check(){
             if(array1[i] + array1[j]==target){

            console.log("Founded at positon ")
            console.log(i,"&",j);
            
          }
          
        }
 
check()
      
    }
}
