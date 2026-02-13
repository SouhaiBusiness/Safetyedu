import Icon from "@/components/ui/AppIcon";

interface StatCardProps {
  stat: string;
  label: string;
  icon: string;
  variant?: "default" | "warning" | "danger";
  change?: string;
}

export default function StatCard({
  stat,
  label,
  icon,
  variant = "default",
  change,
}: StatCardProps) {
  const variantStyles = {
    default: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    danger: "bg-error/10 text-error border-error/20",
  };

  return (
    <div className="creative-card p-8 space-y-6">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${variantStyles[variant]}`}>
        <Icon name={icon as any} size={28} />
      </div>
      <div>
        <p className="text-4xl lg:text-5xl font-black tracking-tight">{stat}</p>
        {change && (
          <p className="text-sm text-muted-foreground mt-2">{change}</p>
        )}
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}