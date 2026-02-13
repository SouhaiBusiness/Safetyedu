"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/AppIcon";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: "nav_home", label: "Accueil", href: "/homepage" },
    { id: "nav_projects", label: "Projets", href: "/project-categories" },
    { id: "nav_stats", label: "Statistiques", href: "/statistics" },
    { id: "nav_resources", label: "Ressources", href: "/educational-resources" },
    { id: "nav_faq", label: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 px-6 lg:px-10 h-20 lg:h-24 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name="ShieldCheckIcon" variant="solid" size={20} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tighter hidden sm:block">
              NARSA Prévention
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground absolute left-1/2 -translate-x-1/2">
            {navLinks?.map((link) => (
              <Link
                key={link?.id}
                href={link?.href}
                className={`hover:text-primary transition-colors pb-1 border-b-2 ${
                  pathname === link?.href
                    ? "border-primary text-primary" :"border-transparent"
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block btn-primary">
              S'inscrire
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              <Icon name="Bars3Icon" size={24} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-foreground/98 z-50 flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-white hover:text-accent transition-colors"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
          {navLinks?.map((link) => (
            <Link
              key={link?.id}
              href={link?.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-bold uppercase tracking-[0.2em] transition-colors ${
                pathname === link?.href
                  ? "text-accent" :"text-white hover:text-accent"
              }`}
            >
              {link?.label}
            </Link>
          ))}
          <button className="btn-primary mt-8">S'inscrire</button>
        </div>
      )}
    </>
  );
}