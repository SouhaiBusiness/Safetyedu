'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function SpecificitySection() {
  const [activeSection, setActiveSection] = useState<'child' | 'adolescent' | null>(null);

  const childSpecificities = [
    {
      icon: "EyeIcon",
      title: "Vision limitée et perception imprécise",
      description: "L'enfant a un champ de vision réduit de 30% par rapport à l'adulte. Il met plus de temps à identifier les objets, confond la taille et la distance et évalue difficilement les vitesses."
    },
    {
      icon: "ArrowPathIcon",
      title: "Difficulté à percevoir les mouvements",
      description: "Il perçoit la scène routière de manière plutôt fixe et ne saisit pas rapidement les changements de mouvement des véhicules ni l\'évolution des situations."
    },
    {
      icon: "SpeakerWaveIcon",
      title: "Attention auditive partielle",
      description: "Dans le bruit de la rue, il a du mal à localiser l'origine des sons. Il se concentre souvent sur un seul son et peut ignorer d'autres signaux importants de la circulation."
    },
    {
      icon: "BoltIcon",
      title: "Comportement moteur imprévisible",
      description: "Ses mouvements peuvent être rapides et brusques, rendant son comportement sur la route difficile à anticiper. Il peut également avoir du mal à maintenir son équilibre."
    },
    {
      icon: "ExclamationTriangleIcon",
      title: "Réactions limitées face aux situations soudaines",
      description: "Son contrôle moteur fin est encore en développement, ce qui rend ses réactions moins efficaces face à un danger imprévu."
    },
    {
      icon: "LightBulbIcon",
      title: "Compréhension et anticipation en développement",
      description: "Il a des difficultés à estimer les distances d'arrêt des véhicules, à anticiper l'évolution des situations de circulation et à comprendre la signalisation routière. Il ne peut pas se déplacer seul en toute sécurité sans supervision."
    }
  ];

  const adolescentSpecificities = [
    {
      icon: "FireIcon",
      title: "Attirance pour le risque",
      description: "L'adolescent associe souvent le danger à la recherche de sensations fortes, d'excitation ou d'aventure. Il peut rechercher des risques physiques et sociaux sans relier spontanément sécurité et danger."
    },
    {
      icon: "ExclamationTriangleIcon",
      title: "Sous-estimation du danger",
      description: "Il ne perçoit pas toujours le risque réel et ne fait pas naturellement le lien entre ses actions, la santé et la sécurité."
    },
    {
      icon: "UserGroupIcon",
      title: "Influence des pairs",
      description: "L'adolescent se conforme inconsciemment aux normes de son groupe de pairs afin de se sentir accepté et appartenir au groupe."
    },
    {
      icon: "ArrowTrendingUpIcon",
      title: "Mise à l\'épreuve de ses limites",
      description: "Il est dans une phase d'évaluation de sa force et cherche à savoir jusqu'où il peut faire face à des situations difficiles ou dangereuses."
    },
    {
      icon: "BoltIcon",
      title: "Sentiment d\'invulnérabilité",
      description: "Il peut avoir le sentiment d'être unique, observé par les autres et moins exposé au danger, ce qui l'empêche d'identifier clairement ses limites."
    },
    {
      icon: "EyeSlashIcon",
      title: "Perception erronée du risque",
      description: "Il surestime ses capacités, minimise les facteurs de risque et ne prend pas en compte la probabilité réelle d'un accident ni ses conséquences négatives."
    }
  ];

  return (
    <div className="mb-20">
      {/* Two Clickable Blocks Side by Side */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Child Block */}
        <button
          onClick={() => setActiveSection(activeSection === 'child' ? null : 'child')}
          className={`creative-card p-8 text-left transition-all duration-300 hover:scale-105 ${
            activeSection === 'child' ? 'ring-4 ring-primary shadow-2xl' : ''
          }`}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-[2px] h-4 bg-primary flex-shrink-0 mt-2"></div>
            <span className="section-label">Comprendre l'enfant</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Les spécificités de l'enfant dans l'espace routier
          </h3>
          <div className="flex items-center gap-2 text-primary font-semibold">
            <span>{activeSection === 'child' ? 'Masquer le contenu' : 'Voir le contenu'}</span>
            <Icon 
              name={activeSection === 'child' ? 'ChevronUpIcon' : 'ChevronDownIcon'} 
              size={20} 
              className="transition-transform"
            />
          </div>
        </button>

        {/* Adolescent Block */}
        <button
          onClick={() => setActiveSection(activeSection === 'adolescent' ? null : 'adolescent')}
          className={`creative-card p-8 text-left transition-all duration-300 hover:scale-105 ${
            activeSection === 'adolescent' ? 'ring-4 ring-primary shadow-2xl' : ''
          }`}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-[2px] h-4 bg-primary flex-shrink-0 mt-2"></div>
            <span className="section-label">Comprendre l'adolescent</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Les spécificités de l'adolescent dans l'espace routier
          </h3>
          <div className="flex items-center gap-2 text-primary font-semibold">
            <span>{activeSection === 'adolescent' ? 'Masquer le contenu' : 'Voir le contenu'}</span>
            <Icon 
              name={activeSection === 'adolescent' ? 'ChevronUpIcon' : 'ChevronDownIcon'} 
              size={20} 
              className="transition-transform"
            />
          </div>
        </button>
      </div>

      {/* Content Display */}
      {activeSection && (
        <div className="animate-fade-in">
          {activeSection === 'child' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {childSpecificities.map((item, index) => (
                <div key={index} className="creative-card p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon name={item.icon as any} size={28} />
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'adolescent' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adolescentSpecificities.map((item, index) => (
                <div key={index} className="creative-card p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon name={item.icon as any} size={28} />
                  </div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}