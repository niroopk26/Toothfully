export interface Service {
  title: string;
  description: string;
  benefits: string[];
  whoNeedsIt: string;
  icon: string;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
}
