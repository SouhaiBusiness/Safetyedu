"use client";

import { useState } from "react";
import Icon from "@/components/ui/AppIcon";

interface FAQItem {
  question: string;
  answer: string;
}

interface ProjectFAQProps {
  faqs: FAQItem[];
}

export default function ProjectFAQ({ faqs }: ProjectFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="creative-card p-8">
      <div className="flex items-center gap-3 mb-6">
        <Icon name="QuestionMarkCircleIcon" size={24} className="text-primary" />
        <h2 className="text-2xl font-bold">Foire aux Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-semibold pr-4">{faq?.question}</span>
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                {faq?.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}