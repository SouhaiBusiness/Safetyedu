import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ResourceCard from "./components/ResourceCard";
import ActivityCard from "./components/ActivityCard";
import VideoCard from "./components/VideoCard";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ressources Éducatives - SafetyEdu",
  description: "Documents, vidéos, et activités ludiques pour l'éducation à la sécurité routière. Ressources gratuites pour tous les âges."
};

export default function EducationalResourcesPage() {
  const informationalResources = [
  {
    id: "resource_guides",
    icon: "BookOpenIcon",
    title: "Guides Pédagogiques",
    description: "Manuels complets pour enseignants et parents avec méthodologies éprouvées",
    count: "12 documents",
    ctaText: "Télécharger",
    ctaIcon: "ArrowDownTrayIcon"
  },
  {
    id: "resource_videos",
    icon: "VideoCameraIcon",
    title: "Vidéos Éducatives",
    description: "Animations et tutoriels vidéo adaptés à chaque tranche d\'âge",
    count: "24 vidéos",
    ctaText: "Voir la bibliothèque",
    ctaIcon: "PlayIcon"
  },
  {
    id: "resource_infographics",
    icon: "ChartBarIcon",
    title: "Affiches",
    description: "Visuels impactants sur les règles de sécurité routière",
    count: "18 infographies",
    ctaText: "Parcourir",
    ctaIcon: "PhotoIcon"
  }];


  const playfulActivities = [
  {
    id: "activity_games",
    title: "Jeux Interactifs",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19c4c313f-1770126938001.png",
    alt: "Children playing interactive road safety game on tablet with crosswalk simulation",
    description: "Jeux en ligne et applications pour apprendre en s\'amusant",
    ageRange: "6-12 ans",
    examples: [
    "Simulation passages piétons interactifs",
    "Quiz sécurité routière avec scores",
    "Jeu de reconnaissance des panneaux"],

    ctaText: "Jouer maintenant"
  },
  {
    id: "activity_coloring",
    title: "Ateliers de Coloriage",
    image: "https://images.unsplash.com/photo-1532459484501-034677b4587a",
    alt: "Coloring worksheets with traffic signs and road safety scenes for children",
    description: "Fiches à imprimer pour apprentissage créatif",
    ageRange: "3-8 ans",
    examples: [
    "Panneaux routiers à colorier",
    "Scènes de rue sécurisées",
    "Personnages traversant la route"],

    ctaText: "Télécharger PDF"
  }];


  const videos = [
  {
    id: "video_1",
    thumbnail: "https://images.unsplash.com/photo-1677515690665-792ded2caa13",
    alt: "Video thumbnail showing child learning to cross street safely at pedestrian crossing",
    title: "Traverser en Toute Sécurité",
    duration: "2:30",
    ageRange: "6-10 ans"
  },
  {
    id: "video_2",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_178f2dd3e-1770034869248.png",
    alt: "Video thumbnail of traffic signs educational animation for preschool children",
    title: "Les Panneaux Routiers - Préscolaire",
    duration: "3:15",
    ageRange: "3-5 ans"
  },
  {
    id: "video_3",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1498fd7e7-1764678762617.png",
    alt: "Video thumbnail showing bicycle safety rules and equipment demonstration",
    title: "Sécurité à Vélo",
    duration: "4:00",
    ageRange: "11-15 ans"
  },
  {
    id: "video_4",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae5e7168-1770126937087.png",
    alt: "Video thumbnail of university students learning about impaired driving dangers",
    title: "Conduite Sous Influence - Dangers",
    duration: "5:20",
    ageRange: "16+ ans"
  },
  {
    id: "video_5",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1398c6815-1770126942904.png",
    alt: "Video thumbnail showing safe school zone with children and parents near crosswalk",
    title: "Abords des Écoles Sécurisés",
    duration: "3:45",
    ageRange: "6-10 ans"
  },
  {
    id: "video_6",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_14da7870e-1770034871034.png",
    alt: "Video thumbnail of interactive learning center with digital road safety simulation",
    title: "Visite d\'un Centre CIER",
    duration: "6:10",
    ageRange: "Tous âges"
  }];


  const teacherTools = [
  {
    id: "tool_1",
    icon: "DocumentTextIcon",
    title: "Plan de Cours - Passages Piétons",
    description: "Guide complet avec objectifs, activités et évaluation",
    format: "PDF"
  },
  {
    id: "tool_2",
    icon: "PresentationChartBarIcon",
    title: "Présentation PowerPoint - Panneaux",
    description: "Support visuel pour leçon interactive sur la signalisation",
    format: "PPTX"
  },
  {
    id: "tool_3",
    icon: "ClipboardDocumentListIcon",
    title: "Fiche d\'Activité - Quiz Sécurité",
    description: "Exercices d\'évaluation avec corrigés",
    format: "PDF"
  },
  {
    id: "tool_4",
    icon: "MapIcon",
    title: "Kit Jeu de Rôle - Rue Sécurisée",
    description: "Instructions pour simulation en classe",
    format: "PDF"
  },
  {
    id: "tool_5",
    icon: "ChartBarIcon",
    title: "Grille d\'Évaluation - Compétences SR",
    description: "Outil de suivi des acquis des élèves",
    format: "PDF"
  }];


  return (
    <>
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-24">
        {/* Page Header */}
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-[2px] h-4 bg-primary"></div>
              <span className="section-label">Ressources</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Ressources Éducatives
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Documents, vidéos, et activités ludiques pour tous les âges - gratuits et téléchargeables
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {/* Informational Resources Section */}
          <section>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Transmettre des Connaissances</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Ressources Informatives
              </h2>
              <p className="text-muted-foreground text-lg">
                Supports pédagogiques pour enseignants, parents et éducateurs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {informationalResources.map((resource) =>
              <ResourceCard key={resource.id} {...resource} />
              )}
            </div>
          </section>

          {/* Playful Activities Section */}
          <section>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Apprentissage par le Jeu</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Activités Ludiques
              </h2>
              <p className="text-muted-foreground text-lg">
                Jeux et ateliers créatifs pour apprendre en s'amusant
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {playfulActivities.map((activity) =>
              <ActivityCard key={activity.id} {...activity} />
              )}
            </div>
          </section>

          {/* Video Library Section */}
          <section>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Vidéothèque</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Bibliothèque Vidéo
              </h2>
              <p className="text-muted-foreground text-lg">
                Animations éducatives et tutoriels vidéo pour tous les âges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) =>
              <VideoCard key={video.id} {...video} />
              )}
            </div>
          </section>

          {/* Teacher Tools Section */}
          <section>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Pour Enseignants</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Supports pour Professionnels de l'éducation

              </h2>
              <p className="text-muted-foreground text-lg">
                Plans de cours, présentations et fiches d'activités prêts à l'emploi
              </p>
            </div>

            <div className="space-y-4">
              {teacherTools.map((tool) =>
              <div key={tool.id} className="creative-card p-6 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Icon name={tool.icon as any} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-muted-foreground px-3 py-1 bg-muted rounded-full">
                      {tool.format}
                    </span>
                    <button className="btn-primary">
                      <Icon name="ArrowDownTrayIcon" size={16} />
                      Télécharger
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="mt-24 px-6">
          <div className="max-w-4xl mx-auto text-center creative-card p-12 lg:p-16">
            <Icon name="QuestionMarkCircleIcon" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin de ressources personnalisées?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez notre équipe pour obtenir des supports adaptés à vos besoins spécifiques
            </p>
            <Link href="/faq">
              <button className="btn-primary">
                Contacter notre équipe
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>);

}