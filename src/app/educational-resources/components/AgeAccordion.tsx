"use client";
import { useState } from "react";
import Icon from "@/components/ui/AppIcon";

interface Resource {
  id: string;
  name: string;
  format: string;
}

interface AgeGroup {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  resources: Resource[];
}

interface AgeAccordionProps {
  ageGroups: AgeGroup[];
}

export default function AgeAccordion({ ageGroups }: AgeAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {ageGroups.map((group, index) => (
        <div key={group.id} className="creative-card overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full p-6 flex items-center justify-between hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-4 text-left">
              <span className="age-badge age-badge-primary">{group.ageRange}</span>
              <div>
                <h3 className="text-xl font-bold">{group.title}</h3>
                <p className="text-sm text-muted-foreground">{group.description}</p>
              </div>
            </div>
            <Icon
              name={openIndex === index ? "ChevronUpIcon" : "ChevronDownIcon"}
              size={24}
              className="text-muted-foreground"
            />
          </button>
          
          {openIndex === index && (
            <div className="p-6 pt-0 border-t border-border">
              <div className="space-y-3">
                {group.resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="DocumentTextIcon" size={20} className="text-primary" />
                      <span className="font-medium">{resource.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-muted-foreground px-2 py-1 bg-background rounded">
                        {resource.format}
                      </span>
                      <button className="text-primary hover:text-primary/80">
                        <Icon name="ArrowDownTrayIcon" size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}