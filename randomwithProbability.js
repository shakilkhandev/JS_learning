const randomGen = () => {
  
  let prob = Math.random();
  
  if(prob>0.8){
  return Math.floor(Math.random() * 11)+10 ;
  
  }else{
  return Math.floor(Math.random() * 11)+20 ;
  
  }
  
  
   
  
}

let out = randomGen ;

console.log(out());