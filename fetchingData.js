console.log("start");
  //async always return a promise ;
async function fetchUserpost (){
  
  let url = 'https://jsonplaceholder.typicode.com/users/1/posts';
  let fetchPost = await fetch(url);
  
  let postData = await fetchPost.json();
  
  return postData ;
  
}
  

// If you're running this in a context that doesn't support
//  top-level await, like older browsers or non-module scripts, you'll get a syntax error:
// you need to use node module or filename of .mjs (top level await also not work in react )

//or via wrapping the whole block in a IIAFE ()()  (full block of code has top level await )(calling)
// it's a great way to use await safely at the top level.


let data = await fetchUserpost();

data = data.slice(0,3);






console.log(data);
