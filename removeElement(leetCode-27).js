/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/** problem: 
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2 
 * Output: 5, nums = [0,1,4,0,3,_,_,_]
 * 
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */



var removeElement = function(nums, val) {
    let leftP = 0 ;
    let rightP = 0 ;  //using two pointer leftP and rightP  to track where it match and update 
    for( rightP = 0 ; rightP < nums.length ; rightP++){
                
        if(nums[rightP] !== val){

            nums[leftP] = nums[rightP];
            leftP++ ;   //if not match then left updating so , left will be the K size of the filtered array 

        }
       
    }
    return leftP;
};


