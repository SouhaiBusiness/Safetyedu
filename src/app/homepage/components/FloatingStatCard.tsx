import Icon from "@/components/ui/AppIcon";

interface FloatingStatCardProps {
  icon: string;
  stat: string;
  label: string;
  position: string;
}

export default function FloatingStatCard({ icon, stat, label, position }: FloatingStatCardProps) {
  return (
    <div
      className={`absolute ${position} floating-card z-20 hidden lg:block animate-float`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success">
          <Icon name={icon as any} size={20} />
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            {label}
          </p>
          <p className="text-lg font-bold text-foreground">{stat}</p>
        </div>
      </div>
    </div>
  );
}