import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FAQAccordion from "./components/FAQAccordion";
import ContactForm from "./components/ContactForm";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - SafetyEdu",
  description: "Questions fréquentes sur nos programmes d'éducation à la sécurité routière au Maroc. Trouvez des réponses à vos questions.",
};

export default function FAQPage() {
  const faqCategories = [
    {
      id: "general",
      title: "Général",
      faqs: [
        {
          id: "faq_1",
          question: "Qu\'est-ce que l\'éducation à la sécurité routière?",
          answer: "L'éducation à la sécurité routière est un ensemble de programmes et d'actions visant à transmettre aux citoyens, dès le plus jeune âge, les connaissances, compétences et comportements nécessaires pour se déplacer en toute sécurité sur la route. Elle comprend l'apprentissage des règles de circulation, la reconnaissance de la signalisation, et le développement de réflexes de prudence adaptés à chaque âge.",
        },
        {
          id: "faq_2",
          question: "Pourquoi est-ce important dès l\'enfance?",
          answer: "Former les enfants dès le plus jeune âge permet d'ancrer des comportements sûrs qui deviendront des réflexes durables. Les études montrent que l'éducation précoce à la sécurité routière réduit significativement les risques d'accidents tout au long de la vie. De plus, les enfants formés deviennent des ambassadeurs qui sensibilisent leur entourage familial.",
        },
        {
          id: "faq_3",
          question: "Qui peut bénéficier de ces programmes?",
          answer: "Nos programmes s'adressent à tous : enfants de 3 à 18 ans (préscolaire, primaire, collège, lycée, université), parents, enseignants, animateurs, et éducateurs. Chaque programme est adapté à l'âge et au contexte éducatif des participants. Nous couvrons également l'éducation non-formelle à travers les maisons de jeunes et les colonies de vacances.",
        },
      ],
    },
    {
      id: "programs",
      title: "Programmes",
      faqs: [
        {
          id: "faq_4",
          question: "Comment inscrire mon enfant à un programme?",
          answer: "L'inscription dépend du type de programme. Pour les programmes scolaires (clubs, matières porteuses), contactez l'établissement de votre enfant. Pour les colonies de vacances, inscriptions via les organisateurs partenaires. Pour les CIER, visites sur réservation. Consultez la section 'Catégories de Projets' pour les contacts spécifiques à chaque programme.",
        },
        {
          id: "faq_5",
          question: "Les programmes sont-ils gratuits?",
          answer: "La majorité de nos programmes scolaires (clubs, matières porteuses, Safe School) sont gratuits car intégrés dans le cursus ou financés par des partenariats. Les colonies de vacances et certains ateliers spécialisés peuvent avoir un coût variable selon l'organisateur. Les visites aux CIER sont généralement gratuites pour les groupes scolaires.",
        },
        {
          id: "faq_6",
          question: "Quelle est la durée des programmes?",
          answer: "La durée varie selon le programme : les clubs scolaires fonctionnent toute l'année avec des séances hebdomadaires, les matières porteuses sont intégrées au cursus complet, les colonies proposent des sessions de 1 à 2 semaines en été, les ateliers universitaires durent généralement 2 à 4 heures, et les visites CIER prennent environ 2 heures.",
        },
      ],
    },
    {
      id: "resources",
      title: "Ressources",
      faqs: [
        {
          id: "faq_7",
          question: "Puis-je télécharger des ressources gratuitement?",
          answer: "Oui, toutes nos ressources éducatives (guides pédagogiques, infographies, fiches d'activités, vidéos) sont disponibles gratuitement sur notre site. Consultez la section 'Ressources Éducatives' pour accéder à plus de 50 documents téléchargeables et 24 vidéos éducatives adaptées à chaque tranche d'âge.",
        },
        {
          id: "faq_8",
          question: "Les ressources sont-elles adaptées à tous les âges?",
          answer: "Absolument. Nos ressources sont catégorisées par tranche d'âge (3-5 ans, 6-10 ans, 11-15 ans, 16+ ans) avec des contenus spécifiquement adaptés au développement cognitif de chaque groupe. Les pictogrammes pour les tout-petits, les jeux interactifs pour les primaires, les simulations pour les adolescents, et les études de cas pour les étudiants.",
        },
      ],
    },
    {
      id: "impact",
      title: "Impact",
      faqs: [
        {
          id: "faq_9",
          question: "Les programmes sont-ils efficaces?",
          answer: "Oui, nos données montrent une réduction de 85% des accidents dans les zones où nos programmes sont déployés par rapport aux zones sans intervention. Plus de 15,000 enfants ont été formés en 2025, avec un taux de satisfaction de 98% des parents. Les comportements sûrs acquis perdurent dans le temps selon nos études de suivi.",
        },
        {
          id: "faq_10",
          question: "Comment mesurez-vous l\'impact?",
          answer: "Nous utilisons plusieurs indicateurs : taux d'accidents avant/après déploiement, évaluations des compétences acquises par les enfants, enquêtes de satisfaction auprès des parents et enseignants, observations comportementales, et suivi longitudinal des cohortes formées. Nos statistiques sont publiées annuellement et disponibles dans la section 'Statistiques'.",
        },
      ],
    },
    {
      id: "partnerships",
      title: "Partenariats",
      faqs: [
        {
          id: "faq_11",
          question: "Comment devenir école partenaire?",
          answer: "Pour devenir école partenaire, contactez-nous via le formulaire de contact en précisant votre établissement, le nombre d'élèves, et les programmes qui vous intéressent. Notre équipe vous présentera les modalités de partenariat (club SR, Safe School, ou autre) et vous accompagnera dans la mise en place. Le processus prend généralement 1 à 2 mois.",
        },
        {
          id: "faq_12",
          question: "Quels sont les critères pour les partenariats?",
          answer: "Nous recherchons des établissements motivés à intégrer durablement la sécurité routière dans leur projet pédagogique. Critères : engagement de la direction, implication d'au moins un enseignant référent, espace dédié aux activités, volonté de former un club ou d'intégrer les contenus SR. Nous accompagnons tous types d'établissements (public, privé, urbain, rural).",
        },
      ],
    },
  ];

  const resourceLinks = [
    {
      id: "link_guides",
      icon: "DocumentTextIcon",
      title: "Guides de Démarrage",
      description: "Commencez avec nos ressources pédagogiques",
      link: "/educational-resources",
    },
    {
      id: "link_programs",
      icon: "ClipboardDocumentListIcon",
      title: "Liste des Programmes",
      description: "Explorez tous nos programmes détaillés",
      link: "/project-categories",
    },
    {
      id: "link_stats",
      icon: "ChartBarIcon",
      title: "Statistiques & Impact",
      description: "Découvrez l\'efficacité de nos actions",
      link: "/statistics",
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
              <span className="section-label">Aide</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos programmes d'éducation à la sécurité routière
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* FAQ Accordion */}
          <FAQAccordion categories={faqCategories} />

          {/* Contact Form */}
          <ContactForm />

          {/* Resource Links */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center mb-4">Ressources Utiles</h2>
              <p className="text-muted-foreground text-center">
                Explorez nos autres sections pour plus d'informations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {resourceLinks.map((resource) => (
                <Link key={resource.id} href={resource.link}>
                  <div className="creative-card p-6 text-center space-y-4 h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                      <Icon name={resource.icon as any} size={24} />
                    </div>
                    <h3 className="text-lg font-bold">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="mt-24 px-6">
          <div className="max-w-4xl mx-auto text-center creative-card p-12 lg:p-16 bg-accent">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              D'autres questions? Contactez-nous directement.
            </h2>
            <p className="text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions spécifiques
            </p>
            <button className="px-10 py-5 bg-foreground text-background rounded-full text-xs font-black uppercase tracking-widest hover:bg-foreground/90 transition-all">
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
              Envoyer un message
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}