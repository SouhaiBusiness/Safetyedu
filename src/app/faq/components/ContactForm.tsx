"use client";
import { useState } from "react";
import Icon from "@/components/ui/AppIcon";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", question: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="creative-card p-8 lg:p-12">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
          <Icon name="EnvelopeIcon" size={32} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Vous ne trouvez pas votre réponse?</h2>
        <p className="text-muted-foreground">Notre équipe est là pour vous aider</p>
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <Icon name="CheckCircleIcon" size={48} className="text-success mx-auto mb-4" />
          <p className="text-lg font-bold text-success">Message envoyé avec succès!</p>
          <p className="text-muted-foreground mt-2">Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="question" className="block text-sm font-bold mb-2">
              Votre Question
            </label>
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="Posez votre question ici..."
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center">
            <Icon name="PaperAirplaneIcon" size={16} />
            Envoyer la question
          </button>
        </form>
      )}
    </div>
  );
}