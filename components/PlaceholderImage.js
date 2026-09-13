// Stand-in for real photography. Once images live in /public/images or
// /public/videos, replace usages of this component with next/image (or a
// <video> tag) directly — see README.md for the swap-in instructions.

export default function PlaceholderImage({ label, variant = "", className = "" }) {
  const variantClass = variant ? ` ${variant}` : "";
  return (
    <div className={`placeholder-img${variantClass} ${className}`.trim()}>
      <span className="placeholder-label">
        <span className="placeholder-icon"></span>
        {label}
      </span>
    </div>
  );
}
