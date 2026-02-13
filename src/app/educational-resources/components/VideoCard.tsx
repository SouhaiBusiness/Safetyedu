"use client";
import { useState } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface VideoCardProps {
  id: string;
  thumbnail: string;
  alt: string;
  title: string;
  duration: string;
  ageRange: string;
}

export default function VideoCard({
  id,
  thumbnail,
  alt,
  title,
  duration,
  ageRange,
}: VideoCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="creative-card overflow-hidden cursor-pointer group"
        onClick={() => setShowModal(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <AppImage
            src={thumbnail}
            alt={alt}
            className="w-full h-full object-cover grayscale-hover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="PlayIcon" variant="solid" size={24} className="text-white ml-1" />
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <span className="age-badge age-badge-primary">{ageRange}</span>
          </div>
        </div>
        <div className="p-6 space-y-2">
          <h3 className="text-lg font-bold line-clamp-2">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="ClockIcon" size={16} />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setShowModal(false)}
        >
          <div
            className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="text-xl font-bold">{title}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <Icon name="XMarkIcon" size={24} />
              </button>
            </div>
            <div className="aspect-video bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">
                Lecteur vidéo (intégration YouTube/Vimeo)
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}