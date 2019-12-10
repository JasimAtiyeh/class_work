// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;

    let leftChild = array[idx * 2];
    let rightChild = array[idx * 2 + 1];

    if (array[idx] < leftChild || array[idx] < rightChild) return false;
    return isMaxHeap(array, idx + 1);
}


module.exports = {
    isMaxHeap
};