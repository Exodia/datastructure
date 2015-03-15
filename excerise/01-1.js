/**
 *   01-1. 最大子列和问题(20)
 *
 *   给定K个整数组成的序列{ N1, N2, ..., NK }，“连续子列”被定义为{ Ni, Ni+1, ..., Nj }，
 *   其中 1 <= i <= j <= K。“最大子列和”则被定义为所有连续子列元素的和中最大者。
 *   例如给定序列{ -2, 11, -4, 13, -5, -2 }，其连续子列{ 11, -4, 13 }有最大的和20。现要求你编写程序，计算给定整数序列的最大子列和。
 *
 *   输入格式：
 *   输入第1行给出正整数 K (<= 100000)；第2行给出K个整数，其间以空格分隔。
 *
 *   输出格式：
 *
 *   在一行中输出最大子列和。如果序列中所有整数皆为负数，则输出0。
 *
 *   输入样例：
 *   6
 *   -2 11 -4 13 -5 -2
 *   输出样例：
 *   20
 */

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var readCount = false;
var count;
rl.on('line', function (line) {
    if (!readCount) {
        count = +line;
        readCount = true;
    }
    else {
        var arr = line.trim().split(' ');
        console.log(maxSubset(arr));
    }
});

function maxSubset(arr) {
    var max = 0;
    var current = 0;

    for (var i = 0, len = arr.length; i < len; ++i) {
        current += +arr[i];
        if (current > 0) {
            max = current > max ? current : max;
        }
        else {
            current = 0;
        }
    }

    return max;
}
