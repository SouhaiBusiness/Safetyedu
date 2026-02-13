import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

interface ProjectPreviewCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  icon: string;
  link: string;
}

export default function ProjectPreviewCard({
  id,
  title,
  category,
  image,
  alt,
  icon,
  link,
}: ProjectPreviewCardProps) {
  return (
    <Link href={link}>
      <div className="group creative-card p-0 overflow-hidden hover:scale-105 transition-transform duration-300">
        {/* Image Section */}
        <div className="relative w-full h-48 overflow-hidden">
          <AppImage
            src={image}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Icon Badge */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-lg">
            <Icon name={icon as any} size={20} />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-3">
          <span className="age-badge age-badge-primary text-xs">{category}</span>
          <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-primary text-sm font-semibold">
            <span>Voir les détails</span>
            <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}