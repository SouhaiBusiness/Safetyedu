"use client";
import { useState } from "react";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

interface ProjectDetail {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  definition: string;
  objectives: string[];
  targets: {
    age: string;
    description: string;
  };
  tools: string[];
  impact: {
    stat1: string;
    stat2: string;
  };
}

const projects: ProjectDetail[] = [
{
  id: "fmps",
  name: "Convention FMPS",
  category: "Préscolaire",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_183cb9a03-1770034867294.png",
  alt: "Preschool children learning road safety with FMPS program materials and teacher",
  definition: "Partenariat avec la Fondation Marocaine de la Promotion de l'Enseignement préScolaire (FMPS) pour développer un programme pédagogique au profit des enfants de la grande section. Ce programme vise à véhiculer les règles de sécurité routière et développer les compétences de déplacement dans l'espace routier.",
  objectives: [
  "Véhiculer les règles de sécurité routière dès le plus jeune âge",
  "Développer les compétences de déplacement sécurisé dans l'espace routier",
  "Ancrer les bonnes conduites à travers des méthodes ludiques",
  "Sensibiliser les enfants aux dangers de la route",
  "Créer des réflexes de sécurité durables"],

  targets: {
    age: "3-5 ans",
    description: "Enfants de grande section (programme en Arabe)"
  },
  tools: [
  "Pictogrammes colorés et supports visuels",
  "Jeux éducatifs adaptés à l'âge",
  "Cahiers d'activités illustrés",
  "Cartes flash de signalisation"],

  impact: {
    stat1: "5,000+ enfants formés",
    stat2: "120 écoles partenaires"
  }
},
{
  id: "club",
  name: "Club Éducation Routière",
  category: "Écoles Primaires",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1709dda73-1770034868849.png",
  alt: "Primary school children participating in road safety club activities with games and exercises",
  definition: "Clubs scolaires dédiés à l'éducation à la sécurité routière, offrant un espace d'apprentissage ludique et interactif pour les élèves du primaire. Les clubs organisent des activités régulières tout au long de l'année scolaire.",
  objectives: [
  "Créer un espace d'apprentissage continu de la sécurité routière",
  "Développer l'autonomie des enfants piétons",
  "Organiser des activités ludiques et éducatives",
  "Former des ambassadeurs de la sécurité routière",
  "Impliquer les familles dans la démarche"],

  targets: {
    age: "6-12 ans",
    description: "Élèves du primaire, tous niveaux"
  },
  tools: [
  "Jeux de rôle et simulations",
  "Ateliers pratiques dans la cour",
  "Concours et challenges",
  "Supports multimédias"],

  impact: {
    stat1: "180 clubs actifs",
    stat2: "7,200 élèves membres"
  }
},
{
  id: "safe-school",
  name: "Safe School",
  category: "Écoles Primaires",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11b388452-1770034869470.png",
  alt: "School entrance with safety railings and marked pedestrian crosswalk protecting children",
  definition: "Opération d'aménagement des abords des écoles par le biais de gardes corps pour canaliser et sécuriser le mouvement des enfants vers les passages piétons. Cette initiative vise à créer un environnement sécurisé autour des établissements scolaires.",
  objectives: [
  "Sécuriser les abords des écoles aux heures de pointe",
  "Canaliser les flux d'enfants vers les passages protégés",
  "Réduire les accidents aux entrées/sorties d'école",
  "Créer une zone de sécurité visible",
  "Sensibiliser conducteurs à la présence d'enfants"],

  targets: {
    age: "6-12 ans",
    description: "Élèves et familles des écoles primaires"
  },
  tools: [
  "Gardes corps de canalisation",
  "Signalisation renforcée",
  "Marquage au sol spécifique",
  "Panneaux de sensibilisation"],

  impact: {
    stat1: "95 écoles équipées",
    stat2: "↓ 67% accidents abords"
  }
},
{
  id: "university",
  name: "Universités et Écoles Supérieures",
  category: "Enseignement Supérieur",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_150eb4fe1-1770034867826.png",
  alt: "University students attending road safety workshop with simulation equipment and presentations",
  definition: "Programme complet d'actions de sensibilisation à la sécurité routière dans l'enseignement supérieur, incluant ateliers thématiques, simulations, événements, et équipement de clubs étudiants axés sur la sécurité routière.",
  objectives: [
  "Sensibiliser les futurs conducteurs aux risques",
  "Développer des comportements responsables",
  "Former des ambassadeurs SR sur les campus",
  "Encourager l'innovation dans la prévention",
  "Créer une culture de sécurité routière"],

  targets: {
    age: "18-25 ans",
    description: "Étudiants universitaires et grandes écoles"
  },
  tools: [
  "Simulateur de conduite sous influence",
  "Simulateur ceinture de sécurité",
  "Séminaires et webinaires",
  "Hackathons et concours"],

  impact: {
    stat1: "32 universités partenaires",
    stat2: "12,000+ étudiants sensibilisés"
  }
},
{
  id: "youth-centers",
  name: "Clubs Maisons de Jeunes",
  category: "Éducation Non-Formelle",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11bf055b5-1770034869739.png",
  alt: "Youth center with teenagers participating in road safety awareness activities and group discussions",
  definition: "Programmes d'éducation routière dans les maisons de jeunes pour toucher les adolescents hors cadre scolaire traditionnel. Ces clubs offrent un espace de sensibilisation adapté aux jeunes en situation de décrochage ou d'éducation non-formelle.",
  objectives: [
  "Toucher les jeunes hors système scolaire",
  "Adapter la sensibilisation au contexte non-formel",
  "Créer des espaces de dialogue sur les risques",
  "Former des pairs-éducateurs",
  "Organiser des activités de proximité"],

  targets: {
    age: "13-18 ans",
    description: "Adolescents fréquentant les maisons de jeunes"
  },
  tools: [
  "Ateliers participatifs",
  "Vidéos et débats",
  "Jeux de sensibilisation",
  "Sorties éducatives"],

  impact: {
    stat1: "48 maisons de jeunes",
    stat2: "2,400+ jeunes touchés"
  }
},
{
  id: "summer-camps",
  name: "Colonies de Vacances",
  category: "Activités Estivales",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_127c8678a-1770034875379.png",
  alt: "Summer camp with children participating in outdoor road safety educational games and activities",
  definition: "Programmation de diverses activités éducatives pendant les vacances scolaires, comprenant des ateliers théoriques, de dessin et coloriage, digitaux, jeux éducatifs, pratiques, et ateliers de conduite sous influences pour adolescents et jeunes.",
  objectives: [
  "Maintenir l'apprentissage pendant les vacances",
  "Proposer des activités ludiques et variées",
  "Renforcer les acquis de l'année scolaire",
  "Sensibiliser aux risques estivaux (vacances)",
  "Créer des souvenirs positifs liés à la SR"],

  targets: {
    age: "6-18 ans",
    description: "Enfants et adolescents en colonies de vacances"
  },
  tools: [
  "Ateliers théoriques adaptés",
  "Dessin et coloriage thématiques",
  "Jeux digitaux et applications",
  "Ateliers pratiques en extérieur"],

  impact: {
    stat1: "28 colonies partenaires",
    stat2: "3,500+ enfants/été"
  }
},
{
  id: "cier",
  name: "Centres Interactifs (CIER)",
  category: "Innovation Pédagogique",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14da7870e-1770034871034.png",
  alt: "Modern interactive learning center with digital road safety simulation equipment and engaged students",
  definition: "Centres d'apprentissage et d'acquisition de mécanismes et de compétences qui s'appuient sur des moyens ludiques et pédagogiques modernes. Les CIER offrent une expérience immersive et interactive de l'éducation à la sécurité routière.",
  objectives: [
  "Offrir une expérience d'apprentissage immersive",
  "Utiliser les technologies éducatives modernes",
  "Développer des compétences pratiques",
  "Créer un espace d'apprentissage attractif",
  "Innover dans les méthodes pédagogiques"],

  targets: {
    age: "Tous âges",
    description: "Enfants, adolescents, adultes - visites groupes"
  },
  tools: [
  "Simulateurs de conduite",
  "Écrans interactifs",
  "Parcours virtuels",
  "Jeux éducatifs numériques"],

  impact: {
    stat1: "6 centres opérationnels",
    stat2: "18,000+ visiteurs/an"
  }
},
{
  id: "curriculum",
  name: "Matières Porteuses",
  category: "Curriculum Primaire",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_171bda636-1770034867676.png",
  alt: "Primary school textbooks showing integrated road safety lessons in language and civic education",
  definition: "Dans le cadre de la révision du curriculum du cycle primaire, les concepts de l'éducation à la sécurité routière ont été intégrés et renforcés dans des matières dites porteuses : langues, éducation civique, mathématiques, etc.",
  objectives: [
  "Intégrer la SR dans le cursus officiel",
  "Assurer une exposition continue aux concepts",
  "Renforcer par la répétition transversale",
  "Légitimer l'importance de la SR",
  "Former tous les élèves sans exception"],

  targets: {
    age: "6-12 ans",
    description: "Tous les élèves du cycle primaire"
  },
  tools: [
  "Manuels scolaires adaptés",
  "Exercices intégrés",
  "Évaluations continues",
  "Supports pédagogiques enseignants"],

  impact: {
    stat1: "100% écoles publiques",
    stat2: "1.2M élèves/an"
  }
},
{
  id: "school-life",
  name: "Activités Vie Scolaire",
  category: "Vie Scolaire",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ff88e830-1770034884814.png",
  alt: "After-school activities with students learning road safety through interactive club sessions",
  definition: "Intégration de la sécurité routière dans les activités de la vie scolaire, principalement à travers les clubs d'éducation à la sécurité routière qui complètent l'enseignement formel par des activités périscolaires.",
  objectives: [
  "Compléter l'enseignement formel",
  "Offrir des activités périscolaires SR",
  "Créer une continuité éducative",
  "Impliquer les élèves volontaires",
  "Renforcer par la pratique"],

  targets: {
    age: "6-15 ans",
    description: "Élèves primaire et collège (activités extra-scolaires)"
  },
  tools: [
  "Clubs SR",
  "Événements scolaires",
  "Concours inter-écoles",
  "Projets étudiants"],

  impact: {
    stat1: "320 écoles actives",
    stat2: "8,500+ élèves impliqués"
  }
},
{
  id: "life-skills",
  name: "Compétences de Vie (Life Skills)",
  category: "Curriculum Primaire",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_123ab063a-1770034868505.png",
  alt: "Primary school classroom teaching life skills with focus on road safety awareness",
  definition: "Nouvelle dimension curriculaire adoptée ayant pour but l'introduction des compétences de vie au cycle primaire. La sécurité routière constitue l'un des trois domaines essentiels, aux côtés de l'éducation financière et de la découverte des métiers.",
  objectives: [
  "Introduire la SR comme compétence de vie",
  "Développer l'autonomie et la responsabilité",
  "Préparer aux défis du quotidien",
  "Former des citoyens conscients",
  "Créer des compétences transférables"],

  targets: {
    age: "6-12 ans",
    description: "Tous les élèves du cycle primaire"
  },
  tools: [
  "Modules Life Skills",
  "Projets personnels",
  "Évaluations compétences",
  "Portfolios élèves"],

  impact: {
    stat1: "Déploiement national",
    stat2: "Curriculum officiel 2025"
  }
}];


export default function ProjectTabs() {
  const [selectedProject, setSelectedProject] = useState<string>(projects[0].id);

  const currentProject = projects.find((p) => p.id === selectedProject) || projects[0];

  return (
    <div className="space-y-8">
      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-4">
        {projects.map((project) =>
        <button
          key={project.id}
          onClick={() => setSelectedProject(project.id)}
          className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all flex-shrink-0 ${
          selectedProject === project.id ?
          "bg-primary text-primary-foreground" :
          "bg-muted text-muted-foreground hover:bg-muted/70"}`
          }>

            {project.name}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="creative-card overflow-hidden">
        {/* Header */}
        <div className="relative h-80">
          <AppImage
            src={currentProject.image}
            alt={currentProject.alt}
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <span className="age-badge age-badge-primary mb-4 inline-block">
              {currentProject.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {currentProject.name}
            </h2>
          </div>
        </div>

        {/* Details */}
        <div className="p-8 lg:p-12 space-y-12">
          {/* Definition */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="InformationCircleIcon" size={24} className="text-primary" />
              <h3 className="text-2xl font-bold">Définition</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {currentProject.definition}
            </p>
          </div>

          {/* Objectives */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="CheckCircleIcon" size={24} className="text-primary" />
              <h3 className="text-2xl font-bold">Objectifs</h3>
            </div>
            <ul className="space-y-3">
              {currentProject.objectives.map((objective, index) =>
              <li key={`${currentProject.id}_obj_${index}`} className="flex items-start gap-3">
                  <Icon name="ArrowRightIcon" size={20} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Targets */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="UserGroupIcon" size={24} className="text-primary" />
              <h3 className="text-2xl font-bold">Cibles</h3>
            </div>
            <div className="flex items-center gap-4">
              <span className="age-badge age-badge-primary text-base">
                {currentProject.targets.age}
              </span>
              <p className="text-muted-foreground">{currentProject.targets.description}</p>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="WrenchScrewdriverIcon" size={24} className="text-primary" />
              <h3 className="text-2xl font-bold">SUPPORTS Pédagogiques</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {currentProject.tools.map((tool, index) =>
              <div
                key={`${currentProject.id}_tool_${index}`}
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">

                  <Icon name="CheckBadgeIcon" size={20} className="text-success flex-shrink-0" />
                  <span className="text-sm font-medium">{tool}</span>
                </div>
              )}
            </div>
          </div>

          {/* Impact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="ChartBarIcon" size={24} className="text-primary" />
              <h3 className="text-2xl font-bold">Impact</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="creative-card p-6 bg-success/5 border-success/20">
                <p className="text-4xl font-black text-success mb-2">
                  {currentProject.impact.stat1}
                </p>
                <p className="text-sm text-muted-foreground">Depuis le lancement</p>
              </div>
              <div className="creative-card p-6 bg-primary/5 border-primary/20">
                <p className="text-4xl font-black text-primary mb-2">
                  {currentProject.impact.stat2}
                </p>
                <p className="text-sm text-muted-foreground">Portée actuelle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}