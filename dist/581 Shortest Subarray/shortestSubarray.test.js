"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runner_1 = require("./runner");
test('Trivial test cases for findUnsortedSubarray', () => {
    expect((0, runner_1.findUnsortedSubarray)([1, 2])).toEqual(0);
    expect((0, runner_1.findUnsortedSubarray)([1, 2, 3, 4])).toEqual(0);
    expect((0, runner_1.findUnsortedSubarray)([1])).toEqual(0);
    expect((0, runner_1.findUnsortedSubarray)([3])).toEqual(0);
    expect((0, runner_1.findUnsortedSubarray)([1, 2, 3, 4, 8, 22, 100, 302])).toEqual(0);
});
test('Simple test cases for findUnsortedSubarray', () => {
    expect((0, runner_1.findUnsortedSubarray)([2, 1])).toEqual(2);
    expect((0, runner_1.findUnsortedSubarray)([1, 2, 6, 5, 4, 7, 8])).toEqual(3);
    expect((0, runner_1.findUnsortedSubarray)([3, 2, 1, 4, 5, 6])).toEqual(3);
    expect((0, runner_1.findUnsortedSubarray)([1, 2, 3, 6, 5, 4])).toEqual(3);
    expect((0, runner_1.findUnsortedSubarray)([1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 11, 12, 13])).toEqual(5);
});
test('Complex test cases for findUnsortedSubarray', () => {
    expect((0, runner_1.findUnsortedSubarray)([10, 2, 3, 4, 5, 6, 7, 8, 9, 1])).toEqual(10);
    expect((0, runner_1.findUnsortedSubarray)([1, 2, 6, 4, 5, 3, 7, 8])).toEqual(4);
    expect((0, runner_1.findUnsortedSubarray)([1, 2, 3, 9, 5, 6, 7, 8, 4, 10, 11, 12])).toEqual(6);
});
test('Consecutive repeated numbers', () => {
    expect((0, runner_1.findUnsortedSubarray)([1, 1, 1, 2, 2, 2, 3, 3, 3])).toEqual(0);
    expect((0, runner_1.findUnsortedSubarray)([1, 3, 2, 2, 2])).toEqual(4);
    expect((0, runner_1.findUnsortedSubarray)([10, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1])).toEqual(11);
    expect((0, runner_1.findUnsortedSubarray)([10, 10, 2, 3, 4, 5, 6, 7, 8, 9, 1])).toEqual(11);
    expect((0, runner_1.findUnsortedSubarray)([10, 2, 3, 4, 5, 5, 6, 7, 8, 9, 1])).toEqual(11);
});
test('Nonconsecutive repeated numbers', () => {
    expect((0, runner_1.findUnsortedSubarray)([1, 2, 3, 1])).toEqual(3);
    expect((0, runner_1.findUnsortedSubarray)([1, 2, 3, 2, 3, 4, 5])).toEqual(2);
});
test('Leetcode failed tests', () => {
    expect((0, runner_1.findUnsortedSubarray)([2, 6, 4, 8, 10, 9, 15])).toEqual(5);
});
//# sourceMappingURL=shortestSubarray.test.js.map