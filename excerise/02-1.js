/*
 一元多项式求导
 http://www.patest.cn/contests/mooc-ds2015spring/02-1

 输入样例：以指数递降方式输入多项式非零项系数和指数（绝对值均为不超过1000的整数）
 3 4 -5 2 6 1 -2 0

 输出样例：
 12 3 -10 1 6 0
 */

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        var input = parser(chunk);
        process.stdout.write(derivative(input));

    }
});

function parser(str) {
    return str.trim().split(/\s+/).map(function (v) {
        return +v;
    });
}


function derivative(input) {
    var ret = [];
    for (var i = 0, len = input.length; i < len; i += 2) {
        var coeffcient = input[i]; // 系数
        var index = input[i + 1]; // 指数

        if (index !== 0) {
            var deCoeffcient = coeffcient * index--;
            ret.push(deCoeffcient, index);
        }

        if (!ret.length) {
            ret.push(0, 0)
        }
    }

    return ret.join(' ');
}