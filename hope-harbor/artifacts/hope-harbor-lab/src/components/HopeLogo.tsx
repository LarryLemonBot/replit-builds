interface HopeLogoProps {
  accentColor?: string;
  textColor?: string;
  iconSize?: number;
  titleClass?: string;
  subtitleClass?: string;
  className?: string;
  subtitleOpacity?: number;
}

export function HopeLogo({
  accentColor = "#2ECAD4",
  textColor = "white",
  iconSize = 32,
  titleClass = "text-3xl",
  subtitleClass = "text-[10px]",
  className = "",
  subtitleOpacity = 0.45,
}: HopeLogoProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="5" r="2" stroke={accentColor} strokeWidth="1.5" />
        <path d="M12 7v14" stroke={accentColor} strokeWidth="1.5" />
        <path d="M6.5 10h11" stroke={accentColor} strokeWidth="1.5" />
        <path d="M6.5 10Q5 17 9 21" stroke={accentColor} strokeWidth="1.5" />
        <path d="M17.5 10Q19 17 15 21" stroke={accentColor} strokeWidth="1.5" />
        <path d="M9 21Q12 23 15 21" stroke={accentColor} strokeWidth="1.5" />
      </svg>
      <div className="flex flex-col leading-none gap-[5px]">
        <span
          className={`font-serif ${titleClass} tracking-[0.04em]`}
          style={{ color: textColor, fontWeight: 500 }}
        >
          Hope Harbor
        </span>
        <span
          className={`${subtitleClass} tracking-[0.22em] uppercase font-sans font-light`}
          style={{ color: textColor, opacity: subtitleOpacity }}
        >
          Health
        </span>
      </div>
    </div>
  );
}
