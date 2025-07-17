interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface Benefit {
  text: string;
}

interface Faq {
  question: string;
  answer: string;
}

export interface ServiceType {
  title: string;
  subtitle: string;
  info: string;
  description1: string;
  description2: string;
  dots: string[];
  processSteps: ProcessStep[];
  benefits: Benefit[];
  faqs: Faq[];
  img: string;
  img2: string;
  href: string;
}
