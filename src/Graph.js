const dfs = (graph, src, dest) => {
  const path = [];
  const seen = Array.from({ length: graph.length }).fill(false);

  const walk = (graph, src, dest, seen, path) => {
    if (seen[src]) {
      return false;
    }

    seen[src] = true;

    path.push(src);

    if (src === dest) {
      return true;
    }

    const edges = graph[src];
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      if (walk(graph, edge.to, dest, seen, path)) {
        return true;
      }
    }

    path.pop();
    return false;
  };

  walk(graph, src, dest, seen, path);
  return path;
};

class Graph {
  constructor(graph) {
    this.graph = graph;
  }

  find(src, dest) {
    return dfs(this.graph, src, dest).length > 0;
  }
}

module.exports = Graph;
