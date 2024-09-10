function fib(n) {
    if (n === 0) return [0];
    if (n === 1) return [0,1];
    var arr = [0, 1];
    fibHelper(arr,n);
    return arr;
}

function fibHelper(arr, max) {
    var len = arr.length;
    if (len === max + 1) return arr;
    var len = arr.length;
    arr.push(arr[len - 1] + arr[len - 2]);
    fibHelper(arr, max);
}

// console.log(fib(0));

const fs = require('fs');
const jsc = require('jsverify');

// eval(fs.readFileSync('code.js')+'');

function fibTest(n) {
    var fib_solns = [0];
    if(n == 0) return fib_solns;
    fib_solns[1] = 1;
    if(n == 1) return fib_solns;
    for(var i = 2; i <= n; i++) fib_solns[i] =
        fib_solns[i-1] + fib_solns[i-2];
    return fib_solns;
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(fib(n)) ==
            JSON.stringify(fibTest(n));
    });

// jsc.assert(test);

// Print the result
try {
    jsc.assert(test);
    console.log("Test passed");
} catch (error) {
    console.log("Test failed:", error.message);
}
