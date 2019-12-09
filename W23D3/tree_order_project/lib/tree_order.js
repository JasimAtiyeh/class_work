function inOrderArray(root) {
    // if (!root) return [];
    // let nodes = [];
    // let queue = [root];

    // while (queue.length > 0) {
    //     debugger;
    //     let node = queue.pop();
    //     console.log(node.val);

    //     nodes.push(node.val);
    //     if (node.left) queue.push(node.left);
    //     if (node.right) queue.push(node.right);
    // }
    // return nodes;

    if (!root) return [];
    return [
        ...inOrderArray(root.left),
        root.val,
        ...inOrderArray(root.right)
    ];
}

function postOrderArray(root) {
    if (!root) return [];
    return [
        ...postOrderArray(root.left),
        ...postOrderArray(root.right),
        root.val
    ];
}


module.exports = {
    inOrderArray,
    postOrderArray
};