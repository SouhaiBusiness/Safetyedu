import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

interface StatsPreviewCardProps {
  title: string;
  stat: string;
  label: string;
  icon: string;
  variant?: "default" | "warning" | "danger";
  change?: string;
  link?: string;
}

export default function StatsPreviewCard({
  title,
  stat,
  label,
  icon,
  variant = "default",
  change,
  link,
}: StatsPreviewCardProps) {
  const variantStyles = {
    default: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    danger: "bg-error/10 text-error",
  };

  const content = (
    <div className="creative-card p-6 lg:p-8 flex flex-col justify-between h-full min-h-[180px]">
      {title && (
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {title}
        </span>
      )}
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${variantStyles[variant]}`}>
          <Icon name={icon as any} size={24} />
        </div>
        <div>
          <p className="text-3xl lg:text-4xl font-bold">{stat}</p>
          {change && (
            <p className="text-xs text-muted-foreground mt-1">{change}</p>
          )}
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  }

  return content;
}