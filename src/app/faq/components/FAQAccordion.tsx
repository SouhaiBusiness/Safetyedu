"use client";
import { useState } from "react";
import Icon from "@/components/ui/AppIcon";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  faqs: FAQ[];
}

interface FAQAccordionProps {
  categories: FAQCategory[];
}

export default function FAQAccordion({ categories }: FAQAccordionProps) {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.id} className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
          <div className="space-y-3">
            {category.faqs.map((faq) => (
              <div key={faq.id} className="creative-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/30 transition-colors text-left"
                >
                  <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
                  <Icon
                    name={openFAQ === faq.id ? "MinusIcon" : "PlusIcon"}
                    size={24}
                    className="text-primary flex-shrink-0"
                  />
                </button>
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}