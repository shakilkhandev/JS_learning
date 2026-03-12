/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];
    const result = [[1], [1, 1]];    //as for numRows = 2 is always this. 

    // if number of Row is given more than 2 ;
    if (numRows > 2) {
        //firstElement and lastElement are always 1 ;
        let [first, last] = [1, 1];
        //loop to put newArray dynamically 
        for (let i = 2; i < numRows; i++) {


            //taking  last array to process each time to generate new one.  

            const prevArray = result[result.length - 1];
            // const prevArray = result.at(-1);


                const newArray = [] ;
                // we can do it with 1 pointer p1 as p2 always next to the p1;
                // for (let [p1, p2] = [0, 1]; p2 < prevArray.length; p2++) 
                for (let p1 = 0; p1 < prevArray.length - 1; p1++) {
                    newArray.push(prevArray[p1] + prevArray[p1 + 1]);

                }

            //as newArray return an array so it need to destructure
            result.push([first, ...newArray, last]);
        }
    }

    return result;


};


let result = generate(4);
console.log(result);
