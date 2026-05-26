export interface StampService {
  id: string;
  name: string;
  tagline: string;
  description: string;
  inkColors: string[];
  approxPrice: string;
  shape: "round" | "rectangle" | "oval" | "signature";
  iconName: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "Ordering" | "Stamps" | "Delivery" | "Legality";
}

export interface GalleryItem {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
  features: string[];
}

export interface StampCustomizerState {
  stampText: string;
  subtitle: string;
  stampType: "proprietorship" | "company_seal" | "office_seal" | "gst" | "signature" | "check_approved" | "logo" | "common";
  size: "small" | "medium" | "large" | "round_35mm" | "round_45mm";
  inkColor: "blue" | "red" | "black" | "violet";
  businessNature: string;
}

export interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  keywords: string[];
}
