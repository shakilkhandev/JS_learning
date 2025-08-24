/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;   // just increment if less than 9
            return digits; // no carry needed
        }
        digits[i] = 0; // if it's 9, set to 0 and carry continues
    }
    // If all digits were 9 (like [9,9,9]), we need an extra 1 at the front
    digits.unshift(1);
    return digits;
};
