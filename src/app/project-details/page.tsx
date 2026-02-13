import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ProjectTabs from "./components/ProjectTabs";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Détails des Projets - SafetyEdu",
  description: "Informations détaillées sur chacun de nos 10 programmes d'éducation à la sécurité routière : définition, objectifs, cibles, outils et impact.",
};

export default function ProjectDetailsPage() {
  return (
    <>
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-24">
        {/* Page Header */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-[2px] h-4 bg-primary"></div>
              <span className="section-label">En Détail</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Détails des Projets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Méthodologie, objectifs, et supports pour chaque programme d'éducation routière
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <ProjectTabs />
        </div>

        {/* CTA Section */}
        <section className="mt-24 px-6">
          <div className="max-w-4xl mx-auto text-center creative-card p-12 lg:p-16 bg-primary/5">
            <Icon name="PresentationChartBarIcon" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intéressé par un de ces programmes?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Demandez une présentation détaillée ou téléchargez notre brochure complète
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faq">
                <button className="btn-primary">
                  Demander une présentation
                </button>
              </Link>
              <button className="btn-secondary">
                <Icon name="ArrowDownTrayIcon" size={16} />
                Télécharger brochure
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}