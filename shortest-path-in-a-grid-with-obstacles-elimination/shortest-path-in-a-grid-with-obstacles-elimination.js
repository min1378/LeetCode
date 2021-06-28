const isWall = (x, y, n, m) => {
  if (x < 0 || x > m - 1 || y < 0 || y > n - 1) return true;
  return false;
};
var shortestPath = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const BFS = () => {
    const visited = Array.from(Array(m), () => Array(n).fill(-1));

    const queue = [{ x: 0, y: 0, shield: k }];
    const direction = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    visited[0][0] = 1;
    let head = 0;
    let count = 0;
    while (head < queue.length) {
      const length = queue.length;
      for (let i = head; i < length; i++) {
        const { x, y, shield } = queue[head];
        head += 1;

        if (x === m - 1 && y === n - 1) {
          return count;
        }
        for (const [dx, dy] of direction) {
          const xx = x + dx;
          const yy = y + dy;
          if (isWall(xx, yy, n, m)) continue;
          if (shield === 0 && grid[xx][yy]) continue;
          const nextK = grid[xx][yy] === 1 ? shield - 1 : shield;
          const bestK = visited[xx][yy];
          if (nextK > bestK) {
            queue.push({
              x: xx,
              y: yy,
              shield: nextK,
            });
            visited[xx][yy] = nextK;
          }
        }
      }
      count += 1;
    }
    return -1;
  };
  return BFS();
};