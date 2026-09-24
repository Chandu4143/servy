import {
  BadgeCheck,
  BadgeIndianRupee,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CircleCheck,
  Compass,
  ListChecks,
  Lock,
  MapPin,
  Navigation,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  UserStar,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const trustItems: Feature[] = [
  {
    title: "Verified Professionals",
    description: "Find trusted service providers.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    description: "Know what you're paying for.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Flexible Booking",
    description: "Choose a time that works for you.",
    icon: CalendarCheck,
  },
  {
    title: "Secure Payments",
    description: "Safe and convenient payments.",
    icon: Lock,
  },
];

export const howItWorksSteps: Step[] = [
  {
    number: "01",
    title: "Find",
    description: "Tell us what service you need.",
  },
  {
    number: "02",
    title: "Choose",
    description: "Browse professionals, ratings and pricing.",
  },
  {
    number: "03",
    title: "Book",
    description: "Choose your date and preferred time.",
  },
  {
    number: "04",
    title: "Relax",
    description: "Your professional takes care of the rest.",
  },
];

export const appHighlights: Feature[] = [
  {
    title: "Discover",
    description: "Browse the services available in your neighbourhood.",
    icon: Compass,
  },
  {
    title: "Compare",
    description: "Look through profiles, ratings and pricing.",
    icon: Star,
  },
  {
    title: "Book",
    description: "Pick the date and time that suits you.",
    icon: CalendarCheck,
  },
  {
    title: "Track",
    description: "Keep an eye on your booking from start to finish.",
    icon: Navigation,
  },
];

export const providerFeatures: Feature[] = [
  {
    title: "Set your availability",
    description: "Choose when you're available for bookings.",
    icon: CalendarDays,
  },
  {
    title: "Manage your services",
    description: "Offer the services you're skilled at.",
    icon: ListChecks,
  },
  {
    title: "Manage your bookings",
    description: "Keep track of upcoming and completed work.",
    icon: CalendarCheck,
  },
  {
    title: "Track your earnings",
    description: "Monitor your income and payouts.",
    icon: TrendingUp,
  },
];

export const benefits: Feature[] = [
  {
    title: "Trusted Professionals",
    description: "Discover professionals with ratings and reviews.",
    icon: BadgeCheck,
  },
  {
    title: "Flexible Scheduling",
    description: "Book according to your preferred date and time.",
    icon: CalendarClock,
  },
  {
    title: "Transparent Pricing",
    description: "See pricing before confirming your booking.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Easy Booking",
    description: "Find and book services without unnecessary steps.",
    icon: ListChecks,
  },
  {
    title: "Local Service",
    description: "Discover professionals available around you.",
    icon: MapPin,
  },
  {
    title: "One Simple App",
    description: "Everything from discovery to booking in one place.",
    icon: Smartphone,
  },
];

export const journeySteps: Feature[] = [
  {
    title: "Search",
    description: "Pick the service you need.",
    icon: Search,
  },
  {
    title: "Choose Professional",
    description: "Compare profiles, ratings and pricing.",
    icon: UserStar,
  },
  {
    title: "Select Date & Time",
    description: "Choose a slot that fits your day.",
    icon: CalendarClock,
  },
  {
    title: "Confirm",
    description: "Review the details and confirm.",
    icon: CircleCheck,
  },
  {
    title: "Professional Arrives",
    description: "Track the visit in the Servy app.",
    icon: Navigation,
  },
  {
    title: "Service Complete",
    description: "Your task is done — rate the professional.",
    icon: Sparkles,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What can I book on Servy?",
    answer:
      "Servy covers everyday household help such as cleaning, cooking, washing and ironing, along with services like AC servicing, plumbing and electrical work.",
  },
  {
    question: "How do I find the right professional?",
    answer:
      "Browse the professionals available near you, look through their profiles, ratings and pricing, and choose the person who fits what you need.",
  },
  {
    question: "Can I choose when the service happens?",
    answer:
      "Yes. You pick the date and the time slot that works for you while booking, so the visit fits around your day.",
  },
  {
    question: "How do I keep track of my booking?",
    answer:
      "Every booking you place appears in the Servy app, so you can check the details and follow the status of the visit in one place.",
  },
  {
    question: "How does pricing work?",
    answer:
      "You see the pricing for a service before you confirm the booking, so there are no surprises at the end of the visit.",
  },
  {
    question: "I offer these services — how do I join Servy?",
    answer:
      "Download the Servy app and register as a service professional. You can then set your availability, list the services you offer and manage your bookings and earnings from the app.",
  },
];
