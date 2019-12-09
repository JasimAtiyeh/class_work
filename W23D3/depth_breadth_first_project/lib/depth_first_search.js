function depthFirstSearch(root, targetVal) {
    // console.log(root);
    if (!root) return null;

    if (root.val < targetVal) {
        return depthFirstSearch(root.left, targetVal);
    } else if (root.val > targetVal) {
        return depthFirstSearch(root.right, targetVal);
    } else {
        return root;
    }
}


module.exports = {
    depthFirstSearch
};