console.log("--------String search-------")



let text=`This is a string`; // initialize/creating a string //

console.log("The string = "  +text);

console.log("\n position/IndexOf 'a' :")
let x = text.indexOf("a");
console.log(x);

console.log("\n position/IndexOf 'i' (from start) :")
 x = text.indexOf("i");
console.log(x);

console.log("\n position/lastIndexOf 'i'(from end) :")
 x = text.lastIndexOf("i");
console.log(x);

console.log("\n searching the word 'string' :")
 x = text.search("string");
console.log(" position_start at: \n"+x);

console.log("\n With regular_expression:")
 x = text.search(/string/);  //searching word'string' //
console.log(" position_start at:" +x);

             
  console.log("\n With match_method(searching'i')");
    //match method returns a string // 
    // If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.
    const matchArray = text.match(/i/g);
     //for case-insenstive write(/..../gi)example(/i/gi) //
    console.log("\n match count :"+ matchArray.length +"  * "+ matchArray[1]);
    console.log("\n\n--the type of the variable used to store match_method's return is : "+typeof(matchArray))

