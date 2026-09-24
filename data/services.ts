import {
  AirVent,
  Brush,
  ChefHat,
  LayoutGrid,
  Shirt,
  WashingMachine,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/**
 * Service categories shown on the marketing site. The final production categories
 * live in the Servy app, so this list is intentionally easy to edit.
 */
export const services: Service[] = [
  {
    title: "Cleaning",
    description: "Keep your home fresh, clean and comfortable.",
    icon: Brush,
  },
  {
    title: "Cooking",
    description: "Find professionals for everyday cooking needs.",
    icon: ChefHat,
  },
  {
    title: "Washing",
    description: "Get your laundry handled with ease.",
    icon: WashingMachine,
  },
  {
    title: "Ironing",
    description: "Fresh, pressed clothes without the hassle.",
    icon: Shirt,
  },
  {
    title: "AC Service",
    description: "Seasonal servicing and repairs for your air conditioner.",
    icon: AirVent,
  },
  {
    title: "Plumbing",
    description: "Fix leaks, taps and fittings with a skilled hand.",
    icon: Wrench,
  },
  {
    title: "Electrical",
    description: "Get everyday electrical work done safely.",
    icon: Zap,
  },
  {
    title: "More",
    description: "More household services are being added to Servy.",
    icon: LayoutGrid,
  },
];
