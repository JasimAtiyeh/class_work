function numRegions(graph, visited = new Set(Object.keys(graph))) {
    let num = 0;

    visited.forEach(node => {
        let currNode = graph[node];

        num += currNode.length;
    });

    return num;

    // while (visited > 0) {
    //     if (visited.has(currNode)) continue;
    //     visited.add(currNode);

    //     if (currNode) num += 1;
    //     queue.push(...currNode.neighbors);
    // }
    // return num;
}

module.exports = {
    numRegions
};