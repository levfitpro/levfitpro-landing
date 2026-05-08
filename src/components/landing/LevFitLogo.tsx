interface LevFitLogoProps {
  size?: number;
  className?: string;
}
export function LevFitLogo({ size = 36, className = "" }: LevFitLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LevFit Pro"
    >
      <defs>
        <linearGradient id="lf-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2a2d2d" />
          <stop offset="100%" stopColor="#0e1010" />
        </linearGradient>
        <linearGradient id="lf-mark" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#dcdf78" />
          <stop offset="100%" stopColor="#bfc153" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#lf-bg)" />
      <rect x="2.5" y="2.5" width="59" height="59" rx="13.5" fill="none" stroke="#3a3d3d" strokeOpacity="0.6" strokeWidth="0.8" />
      <g fill="url(#lf-mark)">
        <polygon points="20,11 27,11 14,52 7,52" />
        <polygon points="9,46 32,46 30,52 7,52" />
      </g>
      <g fill="url(#lf-mark)">
        <polygon points="32,11 39,11 39,52 32,52" />
        <polygon points="32,11 56,11 53,18 32,18" />
        <polygon points="32,27 49,27 46,33 32,33" />
      </g>
      <rect x="2" y="2" width="60" height="30" rx="14" fill="white" fillOpacity="0.025" />
    </svg>
  );
}
