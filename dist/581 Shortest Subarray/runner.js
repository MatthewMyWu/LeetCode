"use strict";
// 581. Shortest Unsorted Continuous Subarray
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUnsortedSubarray = void 0;
function findUnsortedSubarray(nums) {
    // Check if nums is already sorted
    for (let index = 0; index < nums.length; index++) {
        if (index === nums.length - 1)
            return 0;
        if (nums[index] > nums[index + 1])
            break;
    }
    // Find minimum and maximum values in the "unsorted" section of the array
    let min = Infinity, max = -Infinity, foundUnsorted = false;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1])
            foundUnsorted = true;
        if (foundUnsorted)
            min = Math.min(min, nums[i + 1]);
    }
    foundUnsorted = false;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] < nums[i - 1])
            foundUnsorted = true;
        if (foundUnsorted)
            max = Math.max(max, nums[i - 1]);
    }
    // Find positions where min and max values are supposed to go
    let minPos = -1, maxPos = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > min) {
            minPos = i;
            break;
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < max) {
            maxPos = i;
            break;
        }
    }
    return maxPos - minPos + 1;
}
exports.findUnsortedSubarray = findUnsortedSubarray;
;
function findUnsortedSubarray_1(nums) {
    // Pointer approach
    let leftPos = 0, rightPos = 0, tempLeft = -1, tempRight = -1;
    // First set up leftPos
    for (let index = 0; index < nums.length - 1; index++) {
        if (nums[index] === nums[index + 1] && (tempLeft < 0 || nums[index] !== nums[tempLeft])) {
            tempLeft = index;
        }
        if (nums[index] > nums[index + 1]) {
            leftPos = tempLeft >= 0 ? tempLeft : index;
            break;
        }
    }
    // Then set up rightPos
    for (let index = nums.length - 1; index > 0; index--) {
        if (nums[index] === nums[index - 1] && (tempRight < 0 || nums[index] !== nums[tempRight])) {
            tempRight = index;
        }
        if (nums[index] < nums[index - 1]) {
            rightPos = tempRight >= 0 ? tempRight : index;
            break;
        }
    }
    if (leftPos === rightPos) {
        return 0;
    }
    else {
        return rightPos - leftPos + 1;
    }
}
;
//# sourceMappingURL=runner.js.map