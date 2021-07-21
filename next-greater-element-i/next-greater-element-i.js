/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const findNextGreater = (num) => {
        const index = nums2.indexOf(num);
        const filter = nums2.slice(index + 1, nums2.length).filter((num2) => num < num2);
        if(filter.length > 0) return filter[0];
        else return -1;
    }
    return nums1.map((num) => findNextGreater(num))
};