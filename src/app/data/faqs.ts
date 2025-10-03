export interface FaqEntry {
  question: string;
  answer: string;
  categories: string[];
}

export const faqs: FaqEntry[] = [
  {
    question: "What is Signos?",
    answer: "Signos ...",
    categories: ["General"],
  },
  {
    question: "How do I purchase a plan?",
    answer: "Signos ..",
    categories: ["Sales"],
  },
  {
    question: "How many sensor do I get with my plan?",
    answer: "Signos ..",
    categories: ["Sales", "CGM"],
  },
  {
    question: "What is the difference between Signos and other CGM solutions?",
    answer: "Signos ...",
    categories: ["CGM", "General"],
  },
  {
    question: "How does Signos work?",
    answer: "Signos ...",
    categories: ["CGM"],
  },
];
