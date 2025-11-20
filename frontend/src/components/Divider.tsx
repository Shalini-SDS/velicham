interface DividerProps {
  fromColor: string;
  toColor: string;
}

const Divider = ({ fromColor, toColor }: DividerProps) => {
  const bgColor = fromColor;
  const secondaryColor = toColor;

  return (
    <div className="relative h-24 w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="grad-divider" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: bgColor, stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: secondaryColor, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: bgColor, stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        <path
          d="M 0 30 Q 300 0 600 30 T 1200 30 L 1200 60 Q 900 90 600 60 T 0 60 Z"
          fill="url(#grad-divider)"
        />
        
        <path
          d="M 0 50 Q 400 20 800 50 T 1200 50 L 1200 100 L 0 100 Z"
          fill={toColor}
          opacity="0.2"
        />
      </svg>
    </div>
  );
};

export default Divider;
