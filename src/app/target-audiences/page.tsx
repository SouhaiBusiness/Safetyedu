import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AudienceCard from "./components/AudienceCard";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cibles Visées - SafetyEdu",
  description: "Découvrez comment nos programmes d'éducation à la sécurité routière s'adaptent à chaque tranche d'âge et contexte éducatif."
};

export default function TargetAudiencesPage() {
  const audiences = [
  {
    id: "preschool",
    ageRange: "3-5 ans",
    title: "Préscolaire",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_183cb9a03-1770034867294.png",
    alt: "Preschool children learning road safety with colorful educational materials in classroom",
    description: "Apprentissage ludique des règles de base de la sécurité routière à travers des méthodes adaptées au développement cognitif des tout-petits.",
    programs: [
    "Convention FMPS (programme préscolaire en Arabe)",
    "Pictogrammes et supports visuels",
    "Jeux éducatifs adaptés à l'âge"],

    outcomes: [
    "Reconnaissance des panneaux routiers de base",
    "Comportements sûrs lors des déplacements",
    "Sensibilisation précoce aux dangers de la route",
    "Réflexes de sécurité durables"],

    link: "/project-categories#preschool",
    layout: "left" as const
  },
  {
    id: "primary",
    ageRange: "6-10 ans",
    title: "Enfants Primaire",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11b388452-1770034869470.png",
    alt: "Primary school children practicing pedestrian safety at marked crosswalk with supervision",
    description: "Développement de l\'autonomie et des compétences pratiques de déplacement sécurisé dans l\'environnement routier.",
    programs: [
    "Clubs Éducation à la Sécurité Routière",
    "Safe School (aménagement abords écoles)",
    "Matières Porteuses (intégration curriculum)",
    "Colonies de Vacances (ateliers estivaux)"],

    outcomes: [
    "Autonomie dans les déplacements quotidiens",
    "Compétences pratiques de piéton",
    "Connaissance approfondie de la signalisation",
    "Comportements responsables sur le trajet école"],

    link: "/project-categories#schools",
    layout: "right" as const
  },
  {
    id: "adolescents",
    ageRange: "11-18 ans",
    title: "Adolescents",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1750620cf-1770034868465.png",
    alt: "Teenagers participating in road safety workshop learning about risks and prevention",
    description: "Sensibilisation aux risques spécifiques de l'adolescence et préparation à la conduite responsable future.",
    programs: [
    "Clubs éducation routière (collège/lycée)",
    "Colonies de vacances (ateliers conduite sous influence)",
    "Maisons de jeunes (éducation non-formelle)",
    "Activités de la vie scolaire"],

    outcomes: [
    "Sensibilisation aux risques spécifiques (vitesse, alcool)",
    "Simulation de situations réelles",
    "Préparation à la conduite responsable",
    "Formation de pairs-éducateurs"],

    link: "/project-categories#other",
    layout: "left" as const
  },
  {
    id: "university",
    ageRange: "18-25 ans",
    title: "Étudiants & Jeunes Adultes",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13f03d402-1770034868391.png",
    alt: "University students attending road safety seminar with interactive demonstrations and discussions",
    description: "Formation avancée et engagement dans la promotion de la sécurité routière sur les campus universitaires.",
    programs: [
    "Ateliers thématiques (simulations, démonstrations)",
    "Séminaires et webinaires spécialisés",
    "Hackathons et concours d\'innovation",
    "Équipement de clubs étudiants SR"],

    outcomes: [
    "Comportements de conduite responsables",
    "Ambassadeurs de la sécurité routière",
    "Innovation dans la prévention",
    "Leadership dans les initiatives campus"],

    link: "/project-categories#universities",
    layout: "right" as const
  }];


  const educatorRoles = [
  {
    id: "teachers",
    icon: "AcademicCapIcon",
    title: "Enseignants",
    description: "Formation, ressources pédagogiques, outils clés en main",
    benefits: "Plans de cours, supports visuels, évaluations, support continu"
  },
  {
    id: "facilitators",
    icon: "UserGroupIcon",
    title: "Animateurs",
    description: "Colonies, maisons de jeunes, activités périscolaires",
    benefits: "Modules d'animation, activités ludiques, jeux éducatifs"
  },
  {
    id: "trainers",
    icon: "PresentationChartBarIcon",
    title: "Formateurs",
    description: "CIER, universités, centres de formation",
    benefits: "Équipements modernes, formation continue, certifications"
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
              <span className="section-label">Cibles Visées</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              À Qui S'adressent Nos Programmes?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions adaptées à chaque âge et contexte éducatif
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Audience Cards */}
          {audiences.map((audience) =>
          <AudienceCard key={audience.id} {...audience} />
          )}

          {/* Educators Section */}
          <section className="pt-16">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Éducateurs & Encadrants</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Formation des Formateurs
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Ressources et support pour les professionnels de l'éducation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {educatorRoles.map((role) =>
              <div key={role.id} className="creative-card p-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                    <Icon name={role.icon as any} size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                    <p className="text-muted-foreground mb-4">{role.description}</p>
                    <div className="text-sm text-primary font-medium">
                      {role.benefits}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center mt-12">
              <Link href="/educational-resources">
                <button className="btn-primary">
                  Accéder aux ressources
                </button>
              </Link>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="mt-24 px-6">
          <div className="max-w-4xl mx-auto text-center creative-card p-12 lg:p-16">
            <Icon name="UserCircleIcon" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Identifiez-vous dans un de ces profils?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Trouvez le programme le plus adapté à votre situation
            </p>
            <Link href="/project-categories">
              <button className="btn-primary">
                Trouver mon programme
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>);

}