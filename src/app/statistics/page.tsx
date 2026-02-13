import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import StatCard from "./components/StatCard";
import AccidentFactorCard from "./components/AccidentFactorCard";
import TrendChart from "./components/TrendChart";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Statistiques - SafetyEdu",
  description: "Données 2025 sur les accidents de la route au Maroc avec focus sur les enfants. Impact mesurable de nos programmes d'éducation routière.",
};

export default function StatisticsPage() {
  const keyFigures = [
    {
      id: "stat_trained",
      stat: "15,000+",
      label: "Enfants formés (2025)",
      icon: "AcademicCapIcon",
      variant: "default" as const,
    },
    {
      id: "stat_schools",
      stat: "250+",
      label: "Écoles partenaires",
      icon: "BuildingLibraryIcon",
      variant: "default" as const,
    },
    {
      id: "stat_reduction",
      stat: "42%",
      label: "Réduction accidents (zones formées)",
      icon: "ChartBarIcon",
      variant: "default" as const,
      change: "Depuis 2020",
    },
    {
      id: "stat_satisfaction",
      stat: "98%",
      label: "Satisfaction parents",
      icon: "HandThumbUpIcon",
      variant: "default" as const,
    },
  ];

  const accidentFactors = [
    {
      id: "factor_speed",
      icon: "BoltIcon",
      percentage: "42%",
      title: "Vitesse Excessive",
      description: "Principal facteur d'accidents impliquant des enfants, notamment aux abords des écoles",
    },
    {
      id: "factor_crosswalk",
      icon: "StopIcon",
      percentage: "28%",
      title: "Non-respect Passages Piétons",
      description: "Accidents aux passages piétons, particulièrement critiques pour les enfants",
    },
    {
      id: "factor_vigilance",
      icon: "EyeSlashIcon",
      percentage: "18%",
      title: "Défaut de Vigilance",
      description: "Conducteurs distraits (téléphone, fatigue) représentent un danger majeur",
    },
    {
      id: "factor_other",
      icon: "EllipsisHorizontalIcon",
      percentage: "12%",
      title: "Autres Facteurs",
      description: "Conditions météo, infrastructure inadaptée, défaut d'éclairage",
    },
  ];

  return (
    <>
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-24">
        {/* Page Header */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-[2px] h-4 bg-primary"></div>
              <span className="section-label">Données 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Statistiques de la Sécurité Routière
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Focus sur les enfants et l'impact mesurable de nos programmes d'éducation
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {/* Overview Section */}
          <section>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Vue d'Ensemble</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Évolution des Accidents
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <TrendChart
                  type="line"
                  title="Tendance des Accidents (2020-2025)"
                  description="Comparaison entre accidents totaux et accidents impliquant des enfants"
                />
              </div>
              <div className="space-y-6">
                <StatCard
                  stat="3,200"
                  label="Enfants blessés (2025)"
                  icon="ExclamationTriangleIcon"
                  variant="warning"
                  change="↓ 12% vs 2024"
                />
                <StatCard
                  stat="127"
                  label="Décès enfants (2025)"
                  icon="HeartIcon"
                  variant="danger"
                  change="↓ 8% vs 2024"
                />
              </div>
            </div>
          </section>

          {/* Accident Factors Section */}
          <section>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Analyse</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Facteurs Accidentogènes
              </h2>
              <p className="text-muted-foreground text-lg">
                Principales causes d'accidents impliquant des enfants
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accidentFactors.map((factor) => (
                <AccidentFactorCard key={factor.id} {...factor} />
              ))}
            </div>
          </section>

          {/* By Age Group Section */}
          <section>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Par Âge</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Accidents par Tranche d'Âge
              </h2>
            </div>

            <TrendChart
              type="bar"
              title="Répartition des Accidents (2025)"
              description="Nombre d'accidents par tranche d'âge - enfants et adolescents"
            />
          </section>

          {/* Key Figures Section */}
          <section>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Chiffres Clés</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Notre Impact en 2025
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFigures.map((figure) => (
                <StatCard key={figure.id} {...figure} />
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="mt-24 px-6">
          <div className="max-w-4xl mx-auto text-center creative-card p-12 lg:p-16 bg-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ces chiffres peuvent changer. Agissons ensemble.
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Rejoignez nos programmes et participez à la réduction des accidents
            </p>
            <Link href="/project-categories">
              <button className="px-10 py-5 bg-foreground text-background rounded-full text-xs font-black uppercase tracking-widest hover:bg-foreground/90 transition-all">
                Rejoindre un programme
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}