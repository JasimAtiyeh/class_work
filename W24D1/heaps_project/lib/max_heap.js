class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftUp(idx) {
        if (idx === 1) return;
        let currVal = this.array[idx];
        let parentIdx = this.getParent(idx);

        if (this.array[parentIdx] < currVal) {
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
            this.siftUp(parentIdx);
        }
    }

    deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;
        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

    siftDown(idx) {
        let currVal = this.array[idx];
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = this.array[leftIdx];
        let rightVal = this.array[rightIdx];
        let swapIdx;

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (currVal > leftVal && currVal > rightVal) return;

        if (leftVal < rightVal) {
            swapIdx = rightIdx;
        } else {
            swapIdx = leftIdx;
        }

        [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
        this.siftDown(swapIdx);
    }
    
}

module.exports = {
    MaxHeap
};