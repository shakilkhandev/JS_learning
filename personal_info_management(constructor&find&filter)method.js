let count =1;

function person (name,age){
  
  this.fullname = name ;
  this.age   = age ;
    
}

const info=[];

function create (){
        let inputname = prompt('Enter a name :');
        let inputage = prompt('Enter an age :');
        const person1 = new person(inputname,inputage);
        
        info.push(person1);
        
        console.log('Succesfully Created')
        
        start();
        
    
}

function showall(){
     
    info.forEach(function(stats){
         
        console.log(count+".Name :", stats.fullname, 'Age :',stats.age);
        count+=1;
    });
    
    
    
    menu();
};

function showbyname(name){
    
    name = prompt('Input Name :');
    
    let check = info.filter(function(personfilter){
        return personfilter.fullname === name ;
    });
    
    if(check.length>0){
        
        check.forEach(function(all){
            console.log("Name :"+all.fullname,"Age :"+all.age);
        });
        
        menu();
        
    }
    
    // This was used with find();
    //  if(check.length==1){
    //     console.log('Founded...');
    //     console.log('Name : ',check.fullname, 'Age : ',check.age);
    //     menu();
    // }
    
    else {
        console.log('Not found.');
       menu();
    }
    
    
};

function start(){
    console.log('Enter Choice');
    console.log('1.Create.\n2.Show-All.\n3.Find by Name.');
    let choose = prompt() ;
    if(choose == 1 ){
        create();
    }
     else if(choose == 2 ){
        showall();
    }
     else if(choose == 3 ){
        showbyname();
    }
    
    else{
      console.log('Not a valid Choice')
    }
    
    
    
}

function menu(){
     console.log("Enter 1 to go menu.")
        let menu = prompt();
        if(menu == 1 ){
            start();
        }
        else{
           console.log ("exiting...")
        return 0
        }
    
}


start();


