/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
// var addTwoPromises = async function(promise1, promise2) {
//     const resP1 = await promise1 ;
//     const resP2 = await promise2 ;
    
//     return new Promise( (res,rej) =>(res(resP1 + resP2))) ;
  
 
   
// };

var addTwoPromises = async function(promise1, promise2) {
    const [val1 , val2] = await Promise.all([promise1, promise2])

    return val1 + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
