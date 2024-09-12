function quicksort(array) {
    let stack = [0,array.length - 1];
    while (stack.length > 0)
    {
        var i,p;
        let hi = stack.pop();
        let lo = stack.pop();
        if (lo >= hi) continue;
        p = lo;

        for (i = lo; i <= hi; i++) {
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
