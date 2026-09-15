// Abstract, code/DSA-inspired cover art for project cards — a graph, a
// grid, a wave, and an orbit — so each card reads as visually distinct
// instead of repeating the same folder icon. Colors are pulled from the
// site's shared accent palette (identical in both themes).

const VIOLET = "#6c5ce7";
const AMBER = "#e3a008";
const MINT = "#2fbf88";
const ROSE = "#e8577a";

function GraphArt() {
  // A small connected graph — nods to graphs/trees in DSA.
  const nodes = [
    [60, 100],
    [140, 50],
    [140, 150],
    [230, 40],
    [230, 100],
    [230, 160],
    [320, 100],
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [2, 5],
    [4, 6],
    [3, 6],
    [5, 6],
  ];

  return (
    <svg viewBox="0 0 380 200" width="100%" height="100%" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={VIOLET}
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 6 ? 7 : 5.5}
          fill={i % 3 === 0 ? MINT : i % 3 === 1 ? VIOLET : AMBER}
          opacity="0.9"
        />
      ))}
    </svg>
  );
}

function GridArt() {
  // A dot matrix — nods to 2D arrays / tables.
  const cols = 9;
  const rows = 5;
  const spacingX = 380 / (cols + 1);
  const spacingY = 200 / (rows + 1);
  const highlight = new Set(["2-1", "3-1", "3-2", "4-2", "5-3"]);

  const dots = [];
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      const isHighlighted = highlight.has(`${c}-${r}`);
      dots.push(
        <circle
          key={`${c}-${r}`}
          cx={spacingX * c}
          cy={spacingY * r}
          r={isHighlighted ? 5 : 3}
          fill={isHighlighted ? AMBER : VIOLET}
          opacity={isHighlighted ? 0.9 : 0.28}
        />
      );
    }
  }

  return (
    <svg viewBox="0 0 380 200" width="100%" height="100%" aria-hidden="true">
      {dots}
    </svg>
  );
}

function WaveArt() {
  // Layered wave paths — nods to signal/data streams.
  return (
    <svg viewBox="0 0 380 200" width="100%" height="100%" aria-hidden="true">
      <path
        d="M0,130 C60,90 100,170 160,120 C220,70 260,150 320,110 C350,90 365,95 380,100"
        fill="none"
        stroke={MINT}
        strokeWidth="2.5"
        opacity="0.55"
      />
      <path
        d="M0,110 C60,150 100,60 160,90 C220,120 260,50 320,80 C350,95 365,90 380,85"
        fill="none"
        stroke={VIOLET}
        strokeWidth="2.5"
        opacity="0.55"
      />
      <path
        d="M0,90 C60,60 100,120 160,70 C220,30 260,100 320,60 C350,45 365,55 380,50"
        fill="none"
        stroke={ROSE}
        strokeWidth="2"
        opacity="0.4"
      />
    </svg>
  );
}

function OrbitArt() {
  // Concentric rings with orbiting nodes — nods to circular/linked structures.
  return (
    <svg viewBox="0 0 380 200" width="100%" height="100%" aria-hidden="true">
      <circle cx="190" cy="100" r="34" fill="none" stroke={VIOLET} strokeOpacity="0.4" />
      <circle cx="190" cy="100" r="64" fill="none" stroke={VIOLET} strokeOpacity="0.28" />
      <circle cx="190" cy="100" r="94" fill="none" stroke={VIOLET} strokeOpacity="0.16" />
      <circle cx="190" cy="100" r="6" fill={AMBER} />
      <circle cx="224" cy="100" r="5" fill={MINT} />
      <circle cx="190" cy="36" r="5" fill={VIOLET} />
      <circle cx="126" cy="130" r="4.5" fill={ROSE} />
      <circle cx="272" cy="140" r="4" fill={MINT} />
    </svg>
  );
}

const patterns = {
  graph: GraphArt,
  grid: GridArt,
  wave: WaveArt,
  orbit: OrbitArt,
};

function ProjectArt({ pattern = "graph" }) {
  const Art = patterns[pattern] || GraphArt;
  return <Art />;
}

export default ProjectArt;
