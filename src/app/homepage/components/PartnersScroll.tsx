"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/AppIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Partner {
  id: string;
  name: string;
  icon: string;
}

const partners: Partner[] = [
  {
    id: "partner_1",
    name: "Ministère de la Jeunesse de la Culture et de la Communication",
    icon: "BuildingLibraryIcon"
  },
  {
    id: "partner_2",
    name: "Ministère de l'Éducation Nationale du Préscolaire et des Sports",
    icon: "AcademicCapIcon"
  },
  {
    id: "partner_3",
    name: "Les Académies Régionales de l'Éducation et de la Formation",
    icon: "BuildingOffice2Icon"
  },
  {
    id: "partner_4",
    name: "Fondation Marocaine de la Promotion de l'Enseignement préScolaire (FMPS)",
    icon: "HomeModernIcon"
  },
  {
    id: "partner_5",
    name: "Fédération Nationale des Colonies de Vacances",
    icon: "SunIcon"
  },
  {
    id: "partner_7",
    name: "Centre National Mohammed VI des Handicapés (CNMH)",
    icon: "HeartIcon"
  },
  {
    id: "partner_8",
    name: "Vivo Energy",
    icon: "BoltIcon"
  },
  {
    id: "partner_9",
    name: "Le Centre Almanar",
    icon: "StarIcon"
  },
  {
    id: "partner_10",
    name: "L'association CAPE CHENIER",
    icon: "UserGroupIcon"
  }
];

export default function PartnersScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 400;
    const targetScroll = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 lg:py-20 px-6 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-[2px] h-4 bg-primary"></div>
            <span className="section-label">Nos Partenaires</span>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border-2 border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
            aria-label="Précédent"
          >
            <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border-2 border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
            aria-label="Suivant"
          >
            <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling container */}
          <div 
            ref={containerRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={scrollRef}
              className="flex gap-12 items-center"
              style={{ willChange: 'transform' }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center gap-4 p-6"
                  style={{ minWidth: '180px' }}
                >
                  {/* Logo Circle */}
                  <div className="w-20 h-20 rounded-full bg-card border-2 border-border shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Icon name={partner.icon as any} size={36} className="text-primary" />
                  </div>
                  
                  {/* Organization Name */}
                  <p className="text-xs md:text-sm font-medium text-foreground text-center leading-tight max-w-[160px]">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}