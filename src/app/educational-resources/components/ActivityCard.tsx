import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface ActivityCardProps {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  ageRange: string;
  examples: string[];
  ctaText: string;
}

export default function ActivityCard({
  id,
  title,
  image,
  alt,
  description,
  ageRange,
  examples,
  ctaText,
}: ActivityCardProps) {
  return (
    <div className="creative-card overflow-hidden">
      <div className="h-64 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover grayscale-hover"
        />
      </div>
      <div className="p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">{title}</h3>
          <span className="age-badge age-badge-primary">{ageRange}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div>
          <p className="text-sm font-bold text-foreground mb-2">Exemples:</p>
          <ul className="space-y-2">
            {examples.map((example, index) => (
              <li key={`${id}_example_${index}`} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="btn-primary w-full justify-center">
          {ctaText}
        </button>
      </div>
    </div>
  );
}