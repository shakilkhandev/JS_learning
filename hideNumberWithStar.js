
let  myNumber = "12345678910"; 


function hidemyNumber(number,digitToHide = 8) {
    let newNumber = number.replace(/^.{3}(\d{6})/,"*****")


    return newNumber ;


}

let result = hidemyNumber(myNumber);
console.log(result) ;



