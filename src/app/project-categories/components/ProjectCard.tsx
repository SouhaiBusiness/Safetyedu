import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  link: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  description,
  image,
  alt,
  icon,
  link,
}: ProjectCardProps) {
  return (
    <Link href={link}>
      <div className="creative-card p-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0">
          <AppImage
            src={image}
            alt={alt}
            className="w-full h-full object-cover grayscale-hover"
          />
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Icon name={icon as any} size={20} />
            </div>
            <span className="age-badge age-badge-primary">{category}</span>
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          <div className="flex items-center gap-2 text-primary text-sm font-bold">
            <span>Voir les détails</span>
            <Icon name="ArrowRightIcon" size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}