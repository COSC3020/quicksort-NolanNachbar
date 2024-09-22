# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

First, recall my implementation:
```js
function quicksort(array) {
    let stack = [0, array.length - 1];
    while (stack.length > 0) {
        let hi = stack.pop();
        let lo = stack.pop();
        if (lo >= hi) continue;
        let p = lo;

        for (let i = lo + 1; i <= hi; i++) {
            if (array[i] < array[lo]) swap(array, ++p, i);
        }

        swap(array, p, lo);

        stack.push(lo);
        stack.push(p - 1);
        stack.push(p + 1);
        stack.push(hi);
    }
    return array;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
```
Because we are considering the worst case $\Theta$ bound, we know we are considering the case where the pivot is a bad pivot at every iteration, more specifically where the pivot ends up being at the very front or back of the beginning of the sorted array. If this is the case after choosing the first pivot, it would make $n - 1$ comparisons. After choosing the next [bad] pivot, it will preform the iterative logic on array slices of size 0 and size $n - 1$. This will result in another $n - 2$ comparisons for the second pivot, this process continues until you make $n - 1$ such passes. We have $(n−1)+(n−2)+ \cdots +2+1 = \frac{n(n - 1)}{2}  = \frac{n^2 - n)}{2}$ comparisons. Thus the worst case is $\Theta(n^2)$.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

I did this all independently but I used the slides for the run time analysis and I've talked to Collin Davis about using a stack to make it iterative instead of recursive. The implementation is my own.
