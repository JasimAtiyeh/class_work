function countingSort(arr, max) {
    if (!arr.length) return [];
    if (arr.length === 1) return arr;

    let counter = new Array(max + 1).fill(0);
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        counter[ele]++;
    }
    
    for (let i = 0; i < counter.length; i++) {
        while (counter[i] > 0) {
            output.push(i);
            counter[i]--;
        }
    }
    return output;
}


module.exports = {
    countingSort
};