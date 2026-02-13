import Icon from "@/components/ui/AppIcon";

interface AccidentFactorCardProps {
  icon: string;
  percentage: string;
  title: string;
  description: string;
}

export default function AccidentFactorCard({
  icon,
  percentage,
  title,
  description,
}: AccidentFactorCardProps) {
  return (
    <div className="creative-card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center text-warning">
          <Icon name={icon as any} size={24} />
        </div>
        <span className="text-3xl font-black text-warning">{percentage}</span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}