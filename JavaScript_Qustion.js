function missingNumber(nums) {
    const n = nums.length;
    // Calculate the expected sum from 0 to n
    const expectedSum = (n * (n + 1)) / 2;

    // Calculate the actual sum of elements in the array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between the expected and actual sums
    return expectedSum - actualSum;
}

// Example 1
const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2

// Example 2
const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums2)); // Output: 8

// Example 3
const nums3 = [0, 1];
console.log(missingNumber(nums3)); // Output: 2
