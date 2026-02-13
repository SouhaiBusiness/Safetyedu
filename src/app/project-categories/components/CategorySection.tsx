

interface CategorySectionProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function CategorySection({
  id,
  badge,
  title,
  description,
  children,
}: CategorySectionProps) {
  return (
    <section id={id} className="py-16 scroll-mt-24">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-[2px] h-4 bg-primary"></div>
          <span className="section-label">{badge}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}