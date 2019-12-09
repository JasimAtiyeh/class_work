function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
    let queue = [startingNode];

    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node)) continue;
        visited.add(node);

        if (node.val === targetVal) {
            return node;
        } else {
            queue.push(...node.neighbors);
        }
    }
    return null;
}





module.exports = {
    breadthFirstSearch
};