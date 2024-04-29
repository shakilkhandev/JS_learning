function person(name,age,eye) {
     this.fullName = name;
     this.age      = age ;
     this.eye      = eye;
     
 }
 
 const myself = new person('shakil',18,null) ;
 
 console.log("Myself : " + myself.fullName,"& my age is :",myself.age)
