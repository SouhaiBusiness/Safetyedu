import Icon from "@/components/ui/AppIcon";

interface ResourceCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  count: string;
  ctaText: string;
  ctaIcon: string;
  onClick?: () => void;
}

export default function ResourceCard({
  id,
  icon,
  title,
  description,
  count,
  ctaText,
  ctaIcon,
  onClick,
}: ResourceCardProps) {
  return (
    <div className="creative-card p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Icon name={icon as any} size={28} />
        </div>
        <span className="text-sm font-bold text-muted-foreground">{count}</span>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <button
        onClick={onClick}
        className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
      >
        <Icon name={ctaIcon as any} size={20} />
        <span>{ctaText}</span>
      </button>
    </div>
  );
}