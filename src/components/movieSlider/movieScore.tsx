type MovieScoreProps = {
  size: number,
  strokeWidth: number,
  score: number
}

export default function MovieScore(props: MovieScoreProps) {
  const {size, strokeWidth, score } = props;
  const roundedScore = parseFloat(score.toFixed(1))
  const center = size / 2;
  const radius = (size / 2) - (strokeWidth * 2)
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - roundedScore / 10 * circumference;
  const fontSize = `${radius * 0.7}px`;

  return (
    <>
      <svg height={size} width={size} className="flex justify-center align-middle stroke-red-600">
        <circle
          className="origin-center -rotate-90"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          fill="transparent"
          r={radius}
          cx={center}
          cy={center}
        />
        <text
          fontSize={fontSize}
          x={center}
          y={center}
          textAnchor="middle"
          strokeWidth="1px"
          alignmentBaseline="middle"
        >
          {roundedScore}
        </text>
      </svg>
    </>
  )
}