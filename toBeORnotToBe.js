/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};


// console.log(expect(4).toBe(5));

try {
    console.log(expect(5).notToBe(4));  // This will throw "Equal"
} catch (e) {
    console.error(e.message);  // Output: "Equal"
}
