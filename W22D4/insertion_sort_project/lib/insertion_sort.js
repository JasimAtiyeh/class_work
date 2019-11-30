function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let ele = arr[i];
        for (var j = i - 1; j >= 0 && ele < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = ele;
    }
    return arr;
}

module.exports = {
    insertionSort
};