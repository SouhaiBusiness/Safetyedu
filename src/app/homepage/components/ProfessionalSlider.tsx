'use client';

import { useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Slide {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
{
  id: 'slide-1',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c257d050-1770034869713.png',
  alt: 'Éducation Préscolaire - Enseignants NARSA formant des enfants à la sécurité routière en classe',
  title: 'Chaque enfant mérite d\'apprendre à se déplacer en sécurité',
  subtitle: 'La route tue. L\'éducation sauve. Ensemble, formons la génération zéro accident.'
},
{
  id: 'slide-2',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16052b141-1770152211635.png",
  alt: 'Enfants traversant la route en toute sécurité avec un éducateur',
  title: 'Éduquer pour protéger nos enfants',
  subtitle: '85% de réduction des accidents dans les zones formées'
},
{
  id: 'slide-3',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_183cb9a03-1770034867294.png",
  alt: 'Salle de classe avec matériel éducatif sur la sécurité routière',
  title: 'Une formation adaptée à chaque âge',
  subtitle: '125 000+ enfants formés à travers 450 écoles partenaires'
},
{
  id: 'slide-4',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_14da7870e-1770034871034.png',
  alt: 'Centre interactif d\'éducation routière moderne',
  title: 'Innovation pédagogique au service de la sécurité',
  subtitle: 'Des supports modernes pour un apprentissage efficace'
}];


interface FloatingStatCardProps {
  icon: string;
  stat: string;
  label: string;
  position: string;
}

const FloatingStatCard = ({ icon, stat, label, position }: FloatingStatCardProps) =>
<div className={`absolute ${position} hidden lg:block animate-float z-30`}>
    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/20 hover:scale-110 transition-transform duration-300">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <Icon name={icon as any} size={24} />
        </div>
        <div>
          <div className="text-3xl font-black text-foreground">{stat}</div>
          <div className="text-sm text-muted-foreground font-medium">{label}</div>
        </div>
      </div>
    </div>
  </div>;


export default function ProfessionalSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const SLIDE_DURATION = 5000; // 5 seconds per slide
  const PROGRESS_INTERVAL = 50; // Update progress every 50ms

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setProgress(0);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + PROGRESS_INTERVAL / SLIDE_DURATION * 100;
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(progressTimer);
  }, [isAutoPlaying, currentSlide]);

  useEffect(() => {
    if (!isAutoPlaying || progress < 100) return;

    const timeout = setTimeout(() => {
      nextSlide();
    }, 100);

    return () => clearTimeout(timeout);
  }, [progress, isAutoPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}>

      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) =>
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          index === currentSlide ?
          'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`
          }>

            {/* Background Image */}
            <AppImage
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover" />

            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`
                  }>

                    {slide.title}
                  </h1>
                  
                  <p
                  className={`text-xl md:text-2xl text-white/90 font-semibold leading-relaxed mb-8 transition-all duration-700 delay-200 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`
                  }>

                    {slide.subtitle}
                  </p>
                  
                  <div
                  className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`
                  }>

                    <Link href="/project-categories">
                      <button className="px-8 py-4 bg-accent text-accent-foreground rounded-full text-xs font-black uppercase tracking-widest hover:bg-accent/90 transition-all shadow-xl">
                        Découvrir nos programmes
                      </button>
                    </Link>
                    <Link href="/statistics">
                      <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                        Voir les statistiques
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Slide précédent">

        <Icon name="ChevronLeftIcon" size={24} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Slide suivant">

        <Icon name="ChevronRightIcon" size={24} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Dot Indicators with Progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((slide, index) =>
        <button
          key={slide.id}
          onClick={() => goToSlide(index)}
          disabled={isTransitioning}
          className="relative group"
          aria-label={`Aller au slide ${index + 1}`}>

            {/* Background circle */}
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentSlide ?
          'bg-white scale-125' : 'bg-white/40 hover:bg-white/60 scale-100'}`
          } />
            
            {/* Progress ring */}
            {index === currentSlide &&
          <svg
            className="absolute inset-0 -m-2 w-7 h-7 -rotate-90"
            viewBox="0 0 28 28">

                <circle
              cx="14"
              cy="14"
              r="12"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeOpacity="0.3" />

                <circle
              cx="14"
              cy="14"
              r="12"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 12}`}
              strokeDashoffset={`${2 * Math.PI * 12 * (1 - progress / 100)}`}
              className="transition-all duration-100 ease-linear" />

              </svg>
          }
          </button>
        )}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label={isAutoPlaying ? 'Pause' : 'Play'}>
        <Icon name={isAutoPlaying ? 'PauseIcon' : 'PlayIcon'} size={16} />
      </button>

      {/* Floating Statistics Cards - Vertical Layout */}
      <div className="absolute right-16 top-20 z-30 hidden lg:flex flex-col items-end gap-4">
        {/* Card 1 */}
        <div className="group animate-float" style={{ animationDelay: '0s' }}>
          <div className="relative bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-xl shadow-2xl p-4 border border-white/30 hover:shadow-accent/20 hover:scale-105 transition-all duration-500 min-w-[160px]">
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent rounded-t-xl"></div>
            
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                <Icon name="UserGroupIcon" size={20} />
              </div>
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">125000+</div>
                <div className="text-xs text-muted-foreground font-semibold mt-0.5">Enfants formés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group animate-float" style={{ animationDelay: '0.2s' }}>
          <div className="relative bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-xl shadow-2xl p-4 border border-white/30 hover:shadow-primary/20 hover:scale-105 transition-all duration-500 min-w-[160px]">
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-t-xl"></div>
            
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Icon name="AcademicCapIcon" size={20} />
              </div>
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">450</div>
                <div className="text-xs text-muted-foreground font-semibold mt-0.5">Écoles partenaires</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group animate-float" style={{ animationDelay: '0.4s' }}>
          <div className="relative bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-xl shadow-2xl p-4 border border-white/30 hover:shadow-success/20 hover:scale-105 transition-all duration-500 min-w-[160px]">
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-success via-accent to-success rounded-t-xl"></div>
            
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-success/20 to-accent/20 flex items-center justify-center text-success group-hover:scale-110 transition-transform duration-300">
                <Icon name="ShieldCheckIcon" size={20} />
              </div>
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">32%</div>
                <div className="text-xs text-muted-foreground font-semibold mt-0.5">Réduction accidents</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>);

}