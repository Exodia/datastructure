/**

 01-2. Maximum Subsequence Sum (25)

 Given a sequence of K integers { N1, N2, ..., NK }. A continuous subsequence is defined to be { Ni, Ni+1, ..., Nj }
 where 1 <= i <= j <= K. The Maximum Subsequence is the continuous subsequence which has the largest sum of its elements.
 For example, given sequence { -2, 11, -4, 13, -5, -2 }, its maximum subsequence is { 11, -4, 13 } with the largest sum being 20.
 Now you are supposed to find the largest sum, together with the first and the last numbers of the maximum subsequence.

 Input Specification:

 Each input file contains one test case. Each case occupies two lines.
 The first line contains a positive integer K (<= 10000). The second line contains K numbers, separated by a space.

 Output Specification:

 For each test case, output in one line the largest sum, together with the first and the last numbers of the maximum subsequence.
 The numbers must be separated by one space, but there must be no extra space at the end of a line.
 In case that the maximum subsequence is not unique, output the one with the smallest indices i and j (as shown by the sample case).
 If all the K numbers are negative, then its maximum sum is defined to be 0,
 and you are supposed to output the first and the last numbers of the whole sequence.

 Sample Input:

 10
 -10 1 2 3 4 -5 -23 3 7 -21

 Sample Output:

 10 1 4

 **/

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', main);

var readCount = false;
var count;
function main(line) {
    if (!readCount) {
        count = +line;
        readCount = true;
    }
    else {
        var arr = line.trim().split(' ').map(function (v) {
            return +v;
        });
        console.log(maxSubsetAndIndex(arr));
    }
}

function maxSubsetAndIndex(arr) {
    var max = 0;
    var maxStart = arr[0];
    var maxEnd = arr[arr.length - 1];

    var current = 0;
    var currentStart = maxStart;

    for (var i = 0, len = arr.length; i < len; ++i) {
        current += arr[i];
        if (current > 0) {
            if (current > max) {
                max = current;
                maxEnd = arr[i];
                maxStart = currentStart;
            }
        }
        else if (arr[i] === 0 && max === 0) { // -1 -2 0
            maxEnd = arr[i];
            maxStart = currentStart;
        }
        else {
            current = 0;
            currentStart = arr[i + 1];
        }
    }

    return max + ' ' + maxStart + ' ' + maxEnd;
}
