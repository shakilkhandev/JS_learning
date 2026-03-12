let  store = 3 ;  // 3 in binary is 0000 0011 (8 bit representation) 

// assume these are the weather conditions booleans  , we want to store these in single bit

let isWindy = 1 ; // 1 in binary is 0000 0001 (8 bit representation)
let isRainy = 2 ; // 2 in binary is 0000 0010 (8 bit representation)
let isSunny = 4 ; // 4 in binary is 0000 0100 (8 bit representation)


console.log(store.toString(2).padStart(8,"0")) ; 



if(store & isWindy ) console.log("isWindy = true ") 
if(store & isRainy ) console.log("isRainy = true ") 

console.log("And after ")
store = (store ^ isWindy) ;   //xor operator will toggle the bit if it is 1 then it will become 0 and if it is 0 then it will become 1

console.log(store.toString(2).padStart(8,"0"));
(store & isWindy ) ? console.log("isWindy = true ") : console.log(false); 
(store & isRainy ) ? console.log("isRainy = true ") : console.log(false); 
