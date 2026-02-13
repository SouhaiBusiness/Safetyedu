import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ProfessionalSlider from "./components/ProfessionalSlider";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";
import SpecificitySection from "./components/SpecificitySection";
import PartnersScroll from "./components/PartnersScroll";



export const metadata: Metadata = {
  title: "SafetyEdu - Éducation à la Sécurité Routière au Maroc",
  description: "Programmes complets d'éducation à la sécurité routière pour enfants, étudiants et éducateurs. Réduire les accidents de 85% grâce à une formation précoce."
};

export default function Homepage() {
  const targetAudiences = [
  {
    id: "audience_1",
    icon: "UserGroupIcon",
    title: "Les enfants",
    description: "Éducation précoce et adaptée à chaque âge"
  },
  {
    id: "audience_2",
    icon: "UsersIcon",
    title: "Les parents",
    description: "Premiers éducateurs à la sécurité routière"
  },
  {
    id: "audience_3",
    icon: "AcademicCapIcon",
    title: "Les professionnels de l\'éducation",
    description: "Formation et accompagnement pédagogique"
  }];


  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Professional Slider - New Implementation */}
        <ProfessionalSlider />

        {/* Strong Message Section - Enhanced Professional Design */}
        <section className="relative py-16 lg:py-24 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-50">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-40 right-20 w-32 h-32 border-2 border-primary/20 rotate-45 rounded-lg"></div>
            <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-accent/30 rotate-12 rounded-lg"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 rotate-45"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(74,111,165,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,111,165,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Top Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-primary/20 shadow-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-foreground text-sm font-semibold tracking-wide">ALERTE MONDIALE</span>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-primary/20 shadow-xl">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent rounded-br-3xl"></div>
              
              <div className="text-center space-y-6">
                {/* Main Statistic */}
                <div className="space-y-3">
                  <div className="inline-block">
                    <div className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 leading-none drop-shadow-lg">
                      500
                    </div>
                  </div>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-relaxed max-w-3xl mx-auto">
                    enfants meurent <span className="text-red-500">chaque jour</span> sur les routes du monde
                  </p>
                </div>

                {/* Divider with Icon */}
                <div className="flex items-center justify-center gap-4 py-4">
                  <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-primary/30"></div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                    <Icon name="ExclamationTriangleIcon" size={24} className="text-red-500" />
                  </div>
                  <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-primary/30"></div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-bold max-w-2xl mx-auto leading-relaxed">
                    Un geste appris aujourd'hui, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">une vie protégée demain</span>.
                  </p>
                </div>

                {/* Divider Icon */}
                <div className="flex items-center justify-center gap-4 py-4">
                  <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-primary/30"></div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                    <Icon name="ExclamationTriangleIcon" size={24} className="text-red-500" />
                  </div>
                  <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-primary/30"></div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link href="/project-categories" className="inline-block group">
                    <button className="relative px-12 py-6 bg-primary text-white rounded-full text-sm font-black uppercase tracking-widest overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                      <span className="relative flex items-center gap-3">
                        Agir maintenant
                        <Icon name="ArrowRightIcon" size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -bottom-10 right-10 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
          </div>
        </section>

        {/* Why Road Safety Education Section - Restructured */}
        <section className="py-24 lg:py-32 px-6 bg-card pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">POURQUOI L'ÉDUCATION à la sécurité ROUTIÈRE</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Un savoir qui peut faire la différence
              </h2>
            </div>

            {/* Introduction Block - Text Left, Image Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Éduquer pour protéger
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  L'approche éducative constitue le levier le plus pertinent pour faire face à la problématique des accidents de la circulation touchant les enfants, en raison de son rôle fondamental dans l'encadrement des comportements des usagers de la route. En effet, la régulation des comportements, notamment ceux liés à l'usage de l'espace routier, s'inscrit dans un chantier de longue haleine, reposant sur une démarche pédagogique et scientifique visant à permettre à l'enfant et à l'adolescent d'acquérir les connaissances et les compétences nécessaires, adaptées à leur âge ainsi qu'à leur niveau cognitif et éducatif.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">

                </p>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_150c1523a-1770218401322.png"
                  alt="Enfants traversant la route en toute sécurité avec un éducateur, illustrant l'importance de l'éducation routière précoce"
                  className="object-cover w-full h-full" />

              </div>
            </div>

            {/* Child Specificity in Road Space Section */}
            <SpecificitySection />
          </div>
        </section>

        {/* Project Categories Preview Section */}
        <section className="py-16 lg:py-20 px-6 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Nos Programmes</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Découvrez nos programmes
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des initiatives concrètes pour éduquer et protéger nos enfants sur la route
              </p>
              
              {/* Achievement Statistics */}
              <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 mt-12 mb-8">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                    33+
                  </div>
                  <div className="text-base md:text-lg text-muted-foreground font-medium">
                    Programmes Actifs
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                    18k+
                  </div>
                  <div className="text-base md:text-lg text-muted-foreground font-medium">
                    Participants Formés
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                    6
                  </div>
                  <div className="text-base md:text-lg text-muted-foreground font-medium">
                    Catégories Cibles
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
              {
                id: "fmps",
                title: "Programme d'éducation à la sécurité routière en milieu préscolaire – Convention avec la FMPS",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_183cb9a03-1770034867294.png",
                alt: "Preschool children learning road safety with colorful educational materials and teacher guidance",
                category: "ÉDUCATION PRÉSCOLAIRE"
              },
              {
                id: "curricula",
                title: "Intégration des concepts de l'éducation à la sécurité routière dans les Curricula",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_171bda636-1770034867676.png",
                alt: "Classroom with educational textbooks showing integrated road safety lessons in curriculum",
                category: "VIE SCOLAIRE"
              },
              {
                id: "assr",
                title: "Attestation scolaire de sécurité routière (ASSR)",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd47751b-1770127592462.png",
                alt: "Students receiving road safety certification in school ceremony",
                category: "VIE SCOLAIRE"
              },
              {
                id: "clubs",
                title: "Clubs d'éducation à la sécurité routière",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_11103c973-1770034868425.png",
                alt: "Students participating in road safety club activities with interactive games",
                category: "ÉDUCATION NON-FORMELLE"
              },
              {
                id: "cier",
                title: "Centres Interactifs de l'Education Routière (CIER)",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_14da7870e-1770034871034.png",
                alt: "Modern interactive learning center with digital road safety simulation equipment and students",
                category: "INNOVATION PÉDAGOGIQUE"
              },
              {
                id: "colonies",
                title: "Colonies de vacances",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_127c8678a-1770034875379.png",
                alt: "Summer camp with children participating in outdoor road safety educational activities and games",
                category: "ACTIVITÉS ESTIVALES"
              },
              {
                id: "formation",
                title: "La formation des cadres",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e921f31-1770127592457.png",
                alt: "Professional training session for educators learning road safety teaching methods",
                category: "FORMATION PROFESSIONNELLE"
              },
              {
                id: "supports",
                title: "Développement de supports et plateformes pédagogiques de sécurité routière",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_14da7870e-1770034871034.png",
                alt: "Digital educational platform showing road safety learning materials and interactive content",
                category: "OUTILS PÉDAGOGIQUES"
              },
              {
                id: "parents",
                title: "Les parents, premiers éducateurs à la sécurité routière",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_109d385d0-1770128038250.png",
                alt: "Parents teaching children road safety rules during family walk",
                category: "ÉDUCATION FAMILIALE"
              },
              {
                id: "safe-school",
                title: "Safe school",
                image: "https://img.rocket.new/generatedImages/rocket_gen_img_183cb9a03-1770034867294.png",
                alt: "Sécurisation des abords des établissements scolaires avec barrières de protection et signalisation routière adaptée",
                category: "INFRASTRUCTURE SCOLAIRE"
              }].
              map((project) =>
              <Link key={project.id} href={`/project-categories?project=${project.id}`}>
                  <div className="group creative-card p-0 overflow-hidden hover:scale-105 transition-transform duration-300 h-full">
                    <div className="relative w-full h-64 overflow-hidden">
                      <AppImage
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-primary">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors min-h-[3.5rem]">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-4">
                        <span>Voir les détails</span>
                        <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Target Audiences Section */}
        <section className="py-24 lg:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-[2px] h-4 bg-primary"></div>
                <span className="section-label">Cibles Visées</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Pour qui sont nos programmes?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudiences.map((audience) =>
              <div key={audience.id} className="creative-card p-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                    <Icon name={audience.icon as any} size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{audience.title}</h3>
                  <p className="text-muted-foreground">{audience.description}</p>
                </div>
              )}
            </div>

            <div className="text-center mt-12">
              {/* Link to target-audiences page removed */}
            </div>
          </div>
        </section>

        {/* Partners Scroll Section */}
        <PartnersScroll />

        {/* Final CTA Section */}
        <section className="py-24 lg:py-32 px-6 bg-accent">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent-foreground">
              Rejoignez le mouvement pour<br />des routes plus sûres
            </h2>
            <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto">
              Ensemble, réduisons les accidents et sauvons des vies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/project-categories">
                <button className="px-10 py-5 bg-foreground text-background rounded-full text-xs font-black uppercase tracking-widest hover:bg-foreground/90 transition-all">
                  Découvrir nos programmes
                </button>
              </Link>
              <Link href="/educational-resources">
                <button className="px-10 py-5 border-2 border-foreground text-foreground rounded-full text-xs font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all">
                  Télécharger ressources
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>);

}