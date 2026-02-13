import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface CategoryPreviewCardProps {
  title: string;
  image: string;
  alt: string;
  icon: string;
  link: string;
  stagger?: boolean;
}

export default function CategoryPreviewCard({
  title,
  image,
  alt,
  icon,
  link,
  stagger = false,
}: CategoryPreviewCardProps) {
  return (
    <Link href={link}>
      <div className={`creative-card aspect-[3/4] group ${stagger ? "lg:translate-y-12" : ""}`}>
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover grayscale-hover"
        />
        <div className="absolute bottom-8 left-8 text-white z-10">
          <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center mb-4">
            <Icon name={icon as any} variant="solid" size={20} className="text-primary-foreground" />
          </div>
          <h4 className="text-2xl font-black uppercase tracking-tight">{title}</h4>
        </div>
        <div className="image-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </Link>
  );
}