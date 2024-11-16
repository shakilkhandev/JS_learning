function checkAnagram(str1, str2) {
    let newStr ="";
    
    str1 = str1.replace(" ","");
    str2 = str2.replace(" ","");
    
      for(let i = 0 ;  i < str1.length ; i++){
            if (str1.length !== str2.length){
                return false ;
                }
                
             for (let j=0 ; j < str2.length ; j++ ){
                    if(str1[i]==str2[j]){
                            newStr+=str2[j];
                            break ; //
                        }
                        
                }
            }
        
     
     if (newStr == str1 ){
                return true;
                  }else{
                return false;
                }   
    }
let str1 = "school master" ;
let str2 = "the classroom" ;  
    
   // Both string contains same characters so its anagram will return true //

let result = checkAnagram(str1,str2);
console.log(result) ;
