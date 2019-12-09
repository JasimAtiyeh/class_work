function numRegions(graph, visited = new Set()) {
    // let num = 0;

    for (let node in graph) {
        // let neighbors = graph[node];
        if (visited.has(node)) continue;
        visited.add(node);
        // if (neighbors.length > 0) num = neighbors.length;
    }
    return visited.size;
}

module.exports = {
    numRegions
};