import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

export default function Footer() {
  const footerLinks = {
    about: [
      { id: "footer_mission", label: "Notre Mission", href: "/homepage#mission" },
      { id: "footer_team", label: "Équipe", href: "/homepage#team" },
      { id: "footer_partners", label: "Partenaires", href: "/homepage#partners" },
      { id: "footer_contact", label: "Contact", href: "/homepage#contact" },
    ],
    programs: [
      { id: "footer_preschool", label: "Préscolaire", href: "/project-categories#preschool" },
      { id: "footer_schools", label: "Écoles", href: "/project-categories#schools" },
      { id: "footer_universities", label: "Universités", href: "/project-categories#universities" },
      { id: "footer_centers", label: "Centres", href: "/project-categories#centers" },
    ],
    resources: [
      { id: "footer_documents", label: "Documents", href: "/educational-resources#documents" },
      { id: "footer_videos", label: "Vidéos", href: "/educational-resources#videos" },
      { id: "footer_activities", label: "Activités", href: "/educational-resources#activities" },
      { id: "footer_faq", label: "FAQ", href: "/faq" },
    ],
    support: [
      { id: "footer_help", label: "Aide", href: "/faq" },
      { id: "footer_newsletter", label: "Newsletter", href: "#newsletter" },
      { id: "footer_social", label: "Réseaux Sociaux", href: "#social" },
    ],
  };

  const socialLinks = [
    { id: "social_facebook", icon: "facebook", href: "#", label: "Facebook" },
    { id: "social_twitter", icon: "twitter", href: "#", label: "Twitter" },
    { id: "social_linkedin", icon: "linkedin", href: "#", label: "LinkedIn" },
    { id: "social_youtube", icon: "youtube", href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative z-10 px-6 lg:px-10 py-12 lg:py-20 bg-foreground border-t border-white/5">
      <div className="bg-card/5 border border-white/5 rounded-[40px] p-8 md:p-12 lg:p-20">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-12 mb-20">
          {/* Logo & Description */}
          <div className="md:col-span-3 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Icon name="ShieldCheckIcon" variant="solid" size={20} className="text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                SafetyEdu
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              SafetyEdu offre des programmes complets d'éducation à la sécurité routière pour les enfants, étudiants et éducateurs à travers le Maroc.
            </p>
            <div className="flex gap-6 text-white/40">
              {socialLinks?.map((social) => (
                <a
                  key={social?.id}
                  href={social?.href}
                  className="hover:text-accent transition-colors"
                  aria-label={social?.label}
                >
                  <span className="text-lg">{social?.icon === "facebook" ? "📘" : social?.icon === "twitter" ? "🐦" : social?.icon === "linkedin" ? "💼" : "📺"}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-start-5 md:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                À Propos
              </h5>
              <ul className="space-y-4 text-sm text-white/50">
                {footerLinks?.about?.map((link) => (
                  <li key={link?.id}>
                    <Link href={link?.href} className="hover:text-accent transition-colors">
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Programmes
              </h5>
              <ul className="space-y-4 text-sm text-white/50">
                {footerLinks?.programs?.map((link) => (
                  <li key={link?.id}>
                    <Link href={link?.href} className="hover:text-accent transition-colors">
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Ressources
              </h5>
              <ul className="space-y-4 text-sm text-white/50">
                {footerLinks?.resources?.map((link) => (
                  <li key={link?.id}>
                    <Link href={link?.href} className="hover:text-accent transition-colors">
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            © 2026 SafetyEdu (NARSA). Tous droits réservés.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <Link href="#" className="hover:text-accent transition-colors">
              Confidentialité
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Conditions
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Mentions Légales
            </Link>
          </div>
        </div>
      </div>
      {/* Background Text */}
      <div className="mt-20 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[20vw] font-bold text-accent leading-none tracking-tighter text-center">
          SafetyEdu
        </h1>
      </div>
    </footer>
  );
}