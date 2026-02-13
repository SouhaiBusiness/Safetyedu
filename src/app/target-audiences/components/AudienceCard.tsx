import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

interface AudienceCardProps {
  id: string;
  ageRange: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  programs: string[];
  outcomes: string[];
  link: string;
  layout?: "left" | "right";
}

export default function AudienceCard({
  id,
  ageRange,
  title,
  image,
  alt,
  description,
  programs,
  outcomes,
  link,
  layout = "left",
}: AudienceCardProps) {
  return (
    <div className={`creative-card overflow-hidden flex flex-col ${layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8`}>
      <div className="lg:w-2/5 h-80 lg:h-auto overflow-hidden flex-shrink-0">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover grayscale-hover"
        />
      </div>
      <div className="flex-1 p-8 lg:p-12 space-y-6">
        <div className="space-y-4">
          <span className="age-badge age-badge-primary">{ageRange}</span>
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Icon name="AcademicCapIcon" size={20} className="text-primary" />
            Programmes
          </h3>
          <ul className="space-y-2">
            {programs.map((program, index) => (
              <li key={`${id}_program_${index}`} className="flex items-start gap-2 text-muted-foreground">
                <Icon name="ArrowRightIcon" size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>{program}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Icon name="CheckCircleIcon" size={20} className="text-success" />
            Résultats Attendus
          </h3>
          <ul className="space-y-2">
            {outcomes.map((outcome, index) => (
              <li key={`${id}_outcome_${index}`} className="flex items-start gap-2 text-muted-foreground">
                <Icon name="CheckBadgeIcon" size={16} className="text-success mt-1 flex-shrink-0" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href={link}>
          <button className="btn-primary">
            Voir les programmes
          </button>
        </Link>
      </div>
    </div>
  );
}