export default function CustomBadge({
  variant,
  children,
  icon,
  href,
}: {
  variant: "primary" | "secondary" | "success" | "warning" | "error";
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) {
  const variantClasses = {
    primary: "text-blue-300 bg-blue-900/20 border border-blue-500/30",
    secondary: "text-gray-300 bg-gray-900/20 border border-gray-500/30",
    success: "text-emerald-300 bg-emerald-900/20 border border-emerald-500/30",
    warning: "text-orange-300 bg-orange-900/20 border border-orange-500/30",
    error: "text-red-300 bg-red-900/20 border border-red-500/30",
  };

  const baseClasses = `inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full transition-colors ${variantClasses[variant]}`;

  const hoverClasses = href
    ? {
        primary: "hover:bg-blue-900/30",
        secondary: "hover:bg-gray-900/30",
        success: "hover:bg-emerald-900/30",
        warning: "hover:bg-orange-900/30",
        error: "hover:bg-red-900/30",
      }[variant]
    : "";

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${hoverClasses}`}
      >
        {content}
      </a>
    );
  }

  return <span className={baseClasses}>{content}</span>;
}
