"use client";


import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import ProjectFAQ from "./components/ProjectFAQ";

const allProjects = [
{
  id: "fmps",
  title: "Convention avec la FMPS",
  fullTitle: "Programme d\'éducation à la sécurité routière en milieu préscolaire – Convention avec la FMPS",
  image: "https://images.unsplash.com/photo-1663491548896-db2d08b5ea63",
  alt: "Preschool children learning road safety with colorful educational materials and teacher guidance",
  category: "ÉDUCATION PRÉSCOLAIRE",
  definition: "Partenariat stratégique avec la Fondation Marocaine de la Promotion de l\'Enseignement préScolaire pour développer un programme pédagogique complet destiné aux enfants de grande section préscolaire.",
  objectifs: [
  "Initier les enfants dès le plus jeune âge aux règles de base de la sécurité routière",
  "Développer des comportements sûrs et responsables dans l\'espace routier",
  "Former les éducateurs préscolaires aux méthodes d\'enseignement de la sécurité routière",
  "Créer des supports pédagogiques adaptés à l\'âge préscolaire"],

  cibles: ["Enfants de 3 à 5 ans", "Éducateurs préscolaires", "Parents d\'enfants préscolaires"],
  supports: [
  "Kits pédagogiques ludiques avec jeux et activités",
  "Guides pour éducateurs",
  "Supports visuels adaptés (pictogrammes, dessins)",
  "Ateliers pratiques en classe"],

  impact: "Plus de 5,000 enfants formés dans 150 établissements préscolaires partenaires, avec une amélioration notable de la conscience des risques routiers dès le plus jeune âge.",
  faqs: [
  {
    question: "À quel âge peut-on commencer l\'éducation à la sécurité routière?",
    answer: "L'éducation à la sécurité routière peut commencer dès 3 ans en préscolaire. À cet âge, les enfants peuvent assimiler les règles de base comme traverser sur les passages piétons et reconnaître les feux de signalisation."
  },
  {
    question: "Comment les éducateurs sont-ils formés à ce programme?",
    answer: "Les éducateurs bénéficient de formations spécifiques dispensées par nos experts, incluant des méthodes pédagogiques adaptées à l'âge préscolaire, l'utilisation des kits pédagogiques et des techniques d'animation ludiques."
  },
  {
    question: "Les parents peuvent-ils participer au programme?",
    answer: "Oui, nous encourageons fortement la participation des parents à travers des ateliers parents-enfants et des guides pratiques pour renforcer l'apprentissage à la maison."
  }]

},
{
  id: "curricula",
  title: "Intégration dans les Curricula",
  fullTitle: "Intégration des concepts de l\'éducation à la sécurité routière dans les Curricula",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7f6dd31-1770368125669.png",
  alt: "Classroom with educational textbooks showing integrated road safety lessons in curriculum",
  category: "VIE SCOLAIRE",
  definition: "Intégration transversale des concepts de sécurité routière dans les matières scolaires existantes (langues, mathématiques, éducation civique, sciences) pour un apprentissage continu et contextualisé.",
  objectifs: [
  "Ancrer la sécurité routière dans le parcours éducatif quotidien",
  "Utiliser les disciplines scolaires comme vecteurs d\'apprentissage",
  "Assurer une continuité pédagogique sur toute la scolarité",
  "Renforcer les compétences transversales"],

  cibles: ["Élèves du primaire et secondaire", "Enseignants de toutes disciplines", "Concepteurs de curricula"],
  supports: [
  "Modules intégrés dans les manuels scolaires",
  "Exercices thématiques en mathématiques (calcul de distances, vitesses)",
  "Textes et rédactions en langues",
  "Projets interdisciplinaires"],

  impact: "Intégration réussie dans 300 écoles pilotes, touchant plus de 50,000 élèves avec une approche pédagogique innovante et durable.",
  faqs: [
  {
    question: "Comment la sécurité routière s\'intègre-t-elle dans les matières scolaires?",
    answer: "La sécurité routière est intégrée de manière transversale : calculs de distances en mathématiques, rédactions sur le thème en langues, études des panneaux en sciences, et projets citoyens en éducation civique."
  },
  {
    question: "Cela remplace-t-il le programme scolaire normal?",
    answer: "Non, il s'agit d'une intégration qui enrichit les matières existantes sans remplacer le programme. Les concepts de sécurité routière servent de contexte d'application pour les apprentissages."
  },
  {
    question: "Les enseignants reçoivent-ils une formation spécifique?",
    answer: "Oui, tous les enseignants participant au programme bénéficient d'une formation sur l'intégration des concepts de sécurité routière dans leur discipline respective."
  }]

},
{
  id: "assr",
  title: "ASSR",
  fullTitle: "Attestation scolaire de sécurité routière (ASSR)",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd47751b-1770127592462.png",
  alt: "Students receiving road safety certification in school ceremony",
  category: "VIE SCOLAIRE",
  definition: "Programme de certification officielle validant les connaissances et compétences des élèves en matière de sécurité routière à différents niveaux scolaires.",
  objectifs: [
  "Valider officiellement les acquis en sécurité routière",
  "Motiver les élèves par une reconnaissance formelle",
  "Établir des standards nationaux de compétences",
  "Préparer les jeunes à la conduite responsable"],

  cibles: ["Élèves de 5ème année primaire", "Élèves de 3ème année collège", "Établissements scolaires publics et privés"],
  supports: [
  "Tests théoriques standardisés",
  "Évaluations pratiques",
  "Plateforme numérique de préparation",
  "Certificats officiels"],

  impact: "Plus de 20,000 attestations délivrées depuis le lancement, créant une culture de certification et de reconnaissance des compétences en sécurité routière.",
  faqs: [
  {
    question: "Quels sont les niveaux d\'attestation disponibles?",
    answer: "L'ASSR est délivrée à deux niveaux : ASSR 1 pour les élèves de 5ème année primaire et ASSR 2 pour les élèves de 3ème année collège, chacune adaptée au niveau de développement des élèves."
  },
  {
    question: "Comment se déroule l\'examen de l\'ASSR?",
    answer: "L'examen comprend une partie théorique avec des questions à choix multiples et des mises en situation, ainsi qu'une évaluation pratique des comportements en situation réelle ou simulée."
  },
  {
    question: "L\'attestation est-elle reconnue officiellement?",
    answer: "Oui, l'ASSR est une certification officielle reconnue par le Ministère de l'Éducation Nationale et constitue un prérequis pour certaines formations à la conduite."
  }]

},
{
  id: "clubs",
  title: "Clubs d\'éducation",
  fullTitle: "Clubs d\'éducation à la sécurité routière dans les établissements scolaires",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5aadaf1-1770034869735.png",
  alt: "Students participating in road safety club activities with interactive games",
  category: "ÉDUCATION NON-FORMELLE",
  definition: "Création de clubs dédiés à l'éducation routière dans les établissements éducatifs et les maisons de jeunes, offrant des activités périscolaires variées et engageantes.",
  objectifs: [
  "Créer des espaces d\'apprentissage ludiques et volontaires",
  "Former des ambassadeurs de la sécurité routière parmi les jeunes",
  "Organiser des activités de sensibilisation communautaire",
  "Développer le leadership et l\'engagement citoyen"],

  cibles: ["Élèves du primaire et secondaire", "Jeunes des maisons de jeunes", "Animateurs et encadrants"],
  supports: [
  "Kits d\'animation pour clubs",
  "Jeux de rôle et simulations",
  "Matériel de signalisation pédagogique",
  "Supports pour campagnes de sensibilisation"],

  impact: "180 clubs actifs dans tout le pays, mobilisant plus de 8,000 jeunes ambassadeurs qui organisent régulièrement des campagnes de sensibilisation dans leurs communautés.",
  faqs: [
  {
    question: "Comment créer un club de sécurité routière dans mon établissement?",
    answer: "Pour créer un club, contactez-nous via notre formulaire. Nous vous fournirons un kit de démarrage, une formation pour les animateurs et un accompagnement personnalisé pour lancer les activités."
  },
  {
    question: "Quelles activités sont proposées dans les clubs?",
    answer: "Les clubs organisent des jeux de rôle, des simulations de situations routières, des campagnes de sensibilisation, des concours créatifs, des sorties éducatives et des projets communautaires."
  },
  {
    question: "Les clubs sont-ils ouverts toute l\'année?",
    answer: "Oui, les clubs fonctionnent tout au long de l'année scolaire avec des activités hebdomadaires et des événements spéciaux lors des campagnes nationales de sécurité routière."
  }]

},
{
  id: "cier",
  title: "CIER",
  fullTitle: "Centres Interactifs de l'Education Routière (CIER)",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14da7870e-1770034871034.png",
  alt: "Modern interactive learning center with digital road safety simulation equipment and students",
  category: "INNOVATION PÉDAGOGIQUE",
  definition: "Centres d'apprentissage modernes équipés de technologies éducatives de pointe (simulateurs, réalité virtuelle, parcours pratiques) pour une formation immersive à la sécurité routière.",
  objectifs: [
  "Offrir une expérience d\'apprentissage immersive et innovante",
  "Utiliser les technologies pour simuler des situations réelles",
  "Créer des espaces de référence en éducation routière",
  "Accueillir tous les publics (enfants, jeunes, adultes)"],

  cibles: ["Tous publics", "Groupes scolaires", "Familles", "Associations"],
  supports: [
  "Simulateurs de conduite",
  "Parcours pratiques avec vélos et trottinettes",
  "Salles de formation multimédia",
  "Espaces de réalité virtuelle"],

  impact: "3 CIER opérationnels accueillant plus de 15,000 visiteurs par an, devenant des références nationales en matière d'éducation routière innovante.",
  faqs: [
  {
    question: "Où sont situés les CIER?",
    answer: "Actuellement, 3 CIER sont opérationnels dans les principales villes du Maroc. Nous travaillons à l'extension du réseau pour couvrir davantage de régions."
  },
  {
    question: "Comment réserver une visite au CIER?",
    answer: "Les visites se font sur réservation via notre plateforme en ligne ou par téléphone. Nous proposons des créneaux pour les groupes scolaires, les familles et les visites individuelles."
  },
  {
    question: "Quel est l\'âge minimum pour utiliser les simulateurs?",
    answer: "Les simulateurs sont accessibles à partir de 8 ans avec des programmes adaptés à chaque tranche d\'âge. Les plus jeunes peuvent profiter des parcours pratiques et des activités interactives."
  }]

},
{
  id: "colonies",
  title: "Colonies de vacances",
  fullTitle: "Colonies de vacances",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_127c8678a-1770034875379.png",
  alt: "Summer camp with children participating in outdoor road safety educational activities and games",
  category: "ACTIVITÉS ESTIVALES",
  definition: "Programmes éducatifs estivaux combinant loisirs et apprentissage de la sécurité routière à travers des ateliers variés : théorie, arts plastiques, activités numériques, jeux éducatifs et pratique.",
  objectifs: [
  "Profiter des vacances pour renforcer les apprentissages",
  "Proposer des activités ludiques et éducatives",
  "Toucher les enfants hors cadre scolaire",
  "Créer des souvenirs positifs liés à la sécurité routière"],

  cibles: ["Enfants de 6 à 14 ans", "Familles", "Centres de loisirs"],
  supports: [
  "Ateliers de dessin et création",
  "Jeux éducatifs en plein air",
  "Parcours pratiques",
  "Activités numériques et applications"],

  impact: "Plus de 3,000 enfants accueillis chaque été dans 25 colonies partenaires, avec des taux de satisfaction élevés et un apprentissage durable.",
  faqs: [
  {
    question: "Quand ont lieu les colonies de vacances?",
    answer: "Les colonies se déroulent principalement pendant les vacances d'été (juillet-août) avec des sessions d'une ou deux semaines. Certains centres proposent également des programmes pendant les vacances de printemps."
  },
  {
    question: "Quel est le coût d\'inscription aux colonies?",
    answer: "Les tarifs varient selon la durée et le centre. Nous proposons des tarifs préférentiels et des bourses pour les familles à revenus modestes. Contactez-nous pour plus d'informations."
  },
  {
    question: "Les repas et l\'hébergement sont-ils inclus?",
    answer: "Oui, nos colonies en formule résidentielle incluent l'hébergement, tous les repas, les activités éducatives et les sorties. Des formules en demi-journée sont également disponibles."
  }]

},
{
  id: "formation",
  title: "Formation des cadres",
  fullTitle: "La formation des cadres",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e921f31-1770127592457.png",
  alt: "Professional training session for educators learning road safety teaching methods",
  category: "FORMATION PROFESSIONNELLE",
  definition: "Programme de formation continue destiné aux enseignants, éducateurs, animateurs et encadrants pour les outiller en méthodologies et outils d'enseignement de la sécurité routière.",
  objectifs: [
  "Former les formateurs à la pédagogie de la sécurité routière",
  "Diffuser les bonnes pratiques éducatives",
  "Créer un réseau de professionnels qualifiés",
  "Assurer la qualité et la cohérence des programmes"],

  cibles: ["Enseignants", "Éducateurs", "Animateurs", "Responsables pédagogiques"],
  supports: [
  "Modules de formation certifiants",
  "Guides pédagogiques",
  "Ressources numériques",
  "Accompagnement et suivi"],

  impact: "Plus de 1,200 cadres formés à travers le pays, créant un effet multiplicateur avec des milliers d'enfants bénéficiaires indirects.",
  faqs: [
  {
    question: "Quelle est la durée de la formation des cadres?",
    answer: "La formation de base dure 3 jours avec des modules théoriques et pratiques. Des formations continues et des sessions de perfectionnement sont proposées tout au long de l\'année."
  },
  {
    question: "La formation est-elle certifiante?",
    answer: "Oui, les participants reçoivent une certification officielle reconnue par le Ministère de l'Éducation Nationale, attestant de leurs compétences en pédagogie de la sécurité routière."
  },
  {
    question: "Comment s\'inscrire à une formation?",
    answer: "Les inscriptions se font via notre plateforme en ligne ou par l\'intermédiaire de votre établissement. Nous organisons des sessions régionales tout au long de l\'année."
  }]

},
{
  id: "supports",
  title: "Supports pédagogiques",
  fullTitle: "Développement de supports et plateformes pédagogiques de sécurité routière",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14da7870e-1770034871034.png",
  alt: "Digital educational platform showing road safety learning materials and interactive content",
  category: "OUTILS PÉDAGOGIQUES",
  definition: "Création et diffusion de supports pédagogiques variés (manuels, vidéos, applications, jeux) et développement de plateformes numériques pour faciliter l'enseignement et l'apprentissage de la sécurité routière.",
  objectifs: [
  "Mettre à disposition des ressources de qualité",
  "Faciliter le travail des éducateurs",
  "Rendre l'apprentissage accessible et attractif",
  "Innover dans les méthodes pédagogiques"],

  cibles: ["Éducateurs", "Élèves", "Parents", "Grand public"],
  supports: [
  "Plateforme e-learning",
  "Applications mobiles éducatives",
  "Vidéos pédagogiques",
  "Manuels et fiches pratiques"],

  impact: "Plus de 50 supports créés et diffusés, avec une plateforme numérique comptant 30,000 utilisateurs actifs et des milliers de téléchargements.",
  faqs: [
  {
    question: "Les supports pédagogiques sont-ils gratuits?",
    answer: "Oui, la majorité de nos supports sont disponibles gratuitement en téléchargement sur notre plateforme. Certains kits physiques sont disponibles à prix coûtant pour les établissements."
  },
  {
    question: "Comment accéder à la plateforme e-learning?",
    answer: "L'accès à la plateforme est gratuit après inscription. Vous pouvez créer un compte sur notre site web et accéder immédiatement à tous les contenus pédagogiques, vidéos et activités interactives."
  },
  {
    question: "Les applications sont-elles disponibles sur tous les appareils?",
    answer: "Nos applications sont disponibles sur iOS et Android, ainsi qu'en version web accessible depuis n'importe quel navigateur. Elles fonctionnent également hors ligne une fois téléchargées."
  }]

},
{
  id: "parents",
  title: "Parents éducateurs",
  fullTitle: "Les parents, premiers éducateurs à la sécurité routière",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_114bfac53-1770127593129.png",
  alt: "Parents teaching children road safety rules during family walk",
  category: "ÉDUCATION FAMILIALE",
  definition: "Programme de sensibilisation et de formation des parents pour qu'ils deviennent les premiers éducateurs de leurs enfants en matière de sécurité routière, à travers l'exemplarité et l'accompagnement quotidien.",
  objectifs: [
  "Impliquer les parents dans l\'éducation routière",
  "Renforcer la cohérence éducative famille-école",
  "Promouvoir l\'exemplarité parentale",
  "Créer des habitudes familiales sûres"],

  cibles: ["Parents d\'enfants de tous âges", "Familles", "Associations de parents"],
  supports: [
  "Ateliers parents-enfants",
  "Guides pratiques pour parents",
  "Campagnes de sensibilisation",
  "Supports de communication"],

  impact: "Plus de 10,000 parents sensibilisés à travers des ateliers et campagnes, créant un environnement éducatif cohérent entre la maison et l'école.",
  faqs: [
  {
    question: "Pourquoi les parents sont-ils considérés comme premiers éducateurs?",
    answer: "Les enfants passent la majorité de leur temps avec leurs parents et reproduisent leurs comportements. L'exemplarité parentale dans la circulation est donc fondamentale pour ancrer les bons réflexes dès le plus jeune âge."
  },
  {
    question: "Comment participer aux ateliers parents-enfants?",
    answer: "Les ateliers sont organisés régulièrement dans les écoles partenaires et les centres communautaires. Inscrivez-vous via votre établissement ou consultez notre calendrier en ligne."
  },
  {
    question: "Quels conseils pratiques pour éduquer mon enfant au quotidien?",
    answer: "Commentez vos actions en circulation, expliquez les règles lors des trajets quotidiens, utilisez les passages piétons, respectez les feux et faites de chaque sortie une occasion d'apprentissage ludique."
  }]

},
{
  id: "safe-school",
  title: "Safe school",
  fullTitle: "Safe school - Sécurisation des abords scolaires",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_183cb9a03-1770034867294.png",
  alt: "School entrance with safety barriers and road signs protecting students",
  category: "INFRASTRUCTURE SCOLAIRE",
  definition: "Le projet « Safe school » vise à sécuriser les abords des établissements scolaires par l'installation de barrières de protection et des aménagements nécessaires autour des écoles, ainsi que par la mise en place d'une signalisation routière adaptée (signalisation verticale et horizontale), afin de garantir la sécurité des élèves lors de la traversée de la chaussée.",
  objectifs: [
  "Améliorer la sécurité routière dans l\'environnement immédiat des établissements scolaires",
  "Orienter les élèves vers les passages piétons et prévenir les traversées anarchiques de la chaussée"],

  cibles: ["Les établissements scolaires"],
  supports: [
  "Barrières de protection autour des écoles",
  "Signalisation routière verticale",
  "Signalisation routière horizontale",
  "Aménagements de sécurité aux abords des écoles"],

  impact: "Sécurisation des abords scolaires pour protéger les élèves lors de leurs déplacements quotidiens, réduction des risques d'accidents aux entrées et sorties des établissements.",
  faqs: [
  {
    question: "Quels types d\'aménagements sont installés autour des écoles?",
    answer: "Le projet Safe school comprend l'installation de barrières de protection, de passages piétons sécurisés, de panneaux de signalisation verticale et de marquages au sol horizontaux pour guider et protéger les élèves."
  },
  {
    question: "Comment une école peut-elle bénéficier du projet Safe school?",
    answer: "Les établissements scolaires peuvent faire une demande auprès de notre programme. Une évaluation des besoins en sécurité est effectuée pour déterminer les aménagements nécessaires."
  },
  {
    question: "Le projet concerne-t-il tous les niveaux scolaires?",
    answer: "Oui, le projet Safe school s'adresse à tous les établissements scolaires, du préscolaire au secondaire, pour garantir la sécurité de tous les élèves."
  }]

},
{
  id: "maisons-jeunes",
  title: "Les maisons de jeunes",
  fullTitle: "Les maisons de jeunes",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11103c973-1770034868425.png",
  alt: "Youth center with young people participating in road safety awareness activities",
  category: "ÉDUCATION NON-FORMELLE",
  definition: "Programme d'éducation à la sécurité routière destiné aux maisons de jeunes, offrant des activités adaptées aux adolescents et jeunes adultes pour développer leur conscience des risques routiers et promouvoir des comportements responsables.",
  objectifs: [
  "Sensibiliser les jeunes aux dangers de la route",
  "Développer des comportements responsables chez les futurs conducteurs",
  "Créer des ambassadeurs de la sécurité routière dans les communautés",
  "Organiser des activités de prévention adaptées aux jeunes"],

  cibles: ["Jeunes de 12 à 25 ans", "Animateurs de maisons de jeunes", "Associations de jeunesse"],
  supports: [
  "Ateliers interactifs et débats",
  "Supports multimédias adaptés aux jeunes",
  "Campagnes de sensibilisation par les pairs",
  "Activités ludiques et sportives"],

  impact: "Plus de 50 maisons de jeunes partenaires touchant plus de 5,000 jeunes chaque année, créant une dynamique de prévention par les pairs.",
  faqs: [
  {
    question: "Quelles activités sont proposées dans les maisons de jeunes?",
    answer: "Les maisons de jeunes proposent des ateliers de sensibilisation, des débats, des projections de films, des campagnes de prévention, des simulations et des activités créatives autour de la sécurité routière."
  },
  {
    question: "Comment une maison de jeunes peut-elle rejoindre le programme?",
    answer: "Les maisons de jeunes intéressées peuvent nous contacter via notre formulaire en ligne. Nous fournissons une formation pour les animateurs et tous les supports nécessaires pour lancer les activités."
  },
  {
    question: "Le programme est-il adapté aux jeunes conducteurs?",
    answer: "Oui, le programme inclut des modules spécifiques pour les jeunes en âge de conduire, abordant les risques liés à la vitesse, l'alcool, les distractions et la conduite responsable."
  }]

},
{
  id: "milieu-scolaire",
  title: "Le milieu universitaire",
  fullTitle: "Le milieu universitaire",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_171bda636-1770034867676.png",
  alt: "School environment with comprehensive road safety education program",
  category: "VIE SCOLAIRE",
  definition: "Programme global d'intégration de l'éducation à la sécurité routière dans le milieu scolaire, englobant l'ensemble des actions menées au sein des établissements pour créer une culture de sécurité routière durable.",
  objectifs: [
  "Intégrer la sécurité routière dans le projet éducatif de l'établissement",
  "Créer un environnement scolaire sensibilisé à la sécurité routière",
  "Mobiliser l\'ensemble de la communauté éducative",
  "Assurer une continuité éducative sur toute la scolarité"],

  cibles: ["Élèves de tous niveaux", "Enseignants", "Personnel éducatif", "Parents d\'élèves"],
  supports: [
  "Programme pédagogique intégré",
  "Formation du personnel éducatif",
  "Aménagements de sécurité dans l\'établissement",
  "Partenariats avec les autorités locales"],

  impact: "Approche globale touchant l'ensemble de la communauté scolaire, créant une culture de sécurité routière durable dans les établissements partenaires.",
  faqs: [
  {
    question: "En quoi consiste l\'approche globale du milieu scolaire?",
    answer: "L'approche globale intègre la sécurité routière dans tous les aspects de la vie scolaire : enseignement, activités périscolaires, aménagements, formation du personnel et implication des parents."
  },
  {
    question: "Comment un établissement peut-il mettre en place ce programme?",
    answer: "Nous accompagnons les établissements dans l'élaboration d'un projet global adapté à leur contexte, incluant diagnostic, formation, fourniture de supports et suivi sur plusieurs années."
  },
  {
    question: "Quels sont les bénéfices pour l\'établissement?",
    answer: "Au-delà de la sécurité des élèves, le programme renforce la cohésion de la communauté éducative, améliore l'image de l'établissement et développe la citoyenneté responsable."
  }]

}];


function ProjectContent() {
  const searchParams = useSearchParams();
  const projectParam = searchParams?.get("project");
  const [selectedProject, setSelectedProject] = useState(allProjects?.[0]);

  useEffect(() => {
    if (projectParam) {
      const project = allProjects?.find((p) => p?.id === projectParam);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [projectParam]);

  return (
    <>
      <main className="pt-24 lg:pt-32 pb-24">
        {/* Horizontal Project Navigation */}
        <section className="sticky top-20 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
              {allProjects?.map((project) =>
              <button
                key={project?.id}
                onClick={() => setSelectedProject(project)}
                className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                selectedProject?.id === project?.id ?
                "bg-primary text-primary-foreground shadow-lg" :
                "bg-muted text-muted-foreground hover:bg-muted/80"}`
                }>

                  {project?.title}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            {/* Project Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">{selectedProject?.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {selectedProject?.fullTitle}
              </h1>
            </div>

            {/* Project Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12">
              <AppImage
                src={selectedProject?.image}
                alt={selectedProject?.alt}
                className="object-cover w-full h-full" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Project Content */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Definition */}
                <div className="creative-card p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="InformationCircleIcon" size={24} className="text-primary" />
                    <h2 className="text-2xl font-bold">Définition</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject?.definition}
                  </p>
                </div>

                {/* Objectifs */}
                <div className="creative-card p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="CheckCircleIcon" size={24} className="text-primary" />
                    <h2 className="text-2xl font-bold">Objectifs</h2>
                  </div>
                  <ul className="space-y-3">
                    {selectedProject?.objectifs?.map((obj, index) =>
                    <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{obj}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Cibles */}
                <div className="creative-card p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="UserGroupIcon" size={24} className="text-primary" />
                    <h2 className="text-2xl font-bold">Cibles</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject?.cibles?.map((cible, index) =>
                    <span key={index} className="age-badge age-badge-primary">
                        {cible}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Supports */}
                <div className="creative-card p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="WrenchScrewdriverIcon" size={24} className="text-primary" />
                    <h2 className="text-2xl font-bold">Supports</h2>
                  </div>
                  <ul className="space-y-3">
                    {selectedProject?.supports?.map((support, index) =>
                    <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{support}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Impact */}
                <div className="creative-card p-8 bg-primary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="ChartBarIcon" size={24} className="text-primary" />
                    <h2 className="text-2xl font-bold">Impact</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject?.impact}
                  </p>
                </div>

                {/* FAQ Section */}
                {selectedProject?.faqs && selectedProject?.faqs?.length > 0 &&
                <ProjectFAQ faqs={selectedProject?.faqs} />
                }
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 px-6">
          <div className="max-w-4xl mx-auto text-center creative-card p-12 lg:p-16">
            <Icon name="QuestionMarkCircleIcon" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intéressé par ce programme?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible pour vous fournir plus d'informations et vous accompagner
            </p>
            <Link href="/faq">
              <button className="btn-primary">
                Nous contacter
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>);

}

export default function ProjectCategoriesPage() {
  return (
    <>
      <Header />
      <Suspense fallback={
      <div className="pt-24 lg:pt-32 pb-24 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement...</p>
          </div>
        </div>
      }>
        <ProjectContent />
      </Suspense>
      <Footer />
    </>);

}