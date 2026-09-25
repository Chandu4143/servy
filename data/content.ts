/**
 * Page copy + feature lists for every section.
 *
 * EDITING GUIDE: change text here instead of inside components.
 * Each export feeds one section (e.g. `howItWorksSteps` → HowItWorks,
 * `faqItems` → Faq). `Feature.icon` must be a `lucide-react` icon.
 * Keep descriptions short (1 line) so cards stay uniform.
 */
import {
  ArrowDownToLine,
  BadgeCheck,
  BadgeIndianRupee,
  BellRing,
  Building2,
  CalendarCheck,
  CircleCheck,
  FileCheck2,
  FileText,
  Files,
  Fingerprint,
  HandCoins,
  History,
  IdCard,
  Landmark,
  Lock,
  ReceiptText,
  ScrollText,
  ShieldCheck,
  Smartphone,
  UserPlus,
  Users,
  Wallet,
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

/** The Servy Model — what Servy does in the middle. */
export const servyModelItems: Feature[] = [
  {
    title: "Employment Record",
    description: "Who works for whom, in what role, since when.",
    icon: IdCard,
  },
  {
    title: "Salary Processing",
    description: "Monthly salary recorded through the Servy process.",
    icon: HandCoins,
  },
  {
    title: "Invoice",
    description: "A household service expense record every month.",
    icon: ReceiptText,
  },
  {
    title: "Salary Slip",
    description: "Digital proof of pay for the worker, every month.",
    icon: FileText,
  },
  {
    title: "Payment Record",
    description: "A clear history both sides can refer back to.",
    icon: History,
  },
];

export const householdFeatures: Feature[] = [
  {
    title: "Add Domestic Workers",
    description: "Create a record for each worker you employ.",
    icon: UserPlus,
  },
  {
    title: "Set Salary",
    description: "Record monthly salary and employment details.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Make / Record Salary Payments",
    description: "Maintain a clear, month-by-month payment history.",
    icon: Wallet,
  },
  {
    title: "Receive Servy Invoice",
    description: "Get an invoice for the household service expense.",
    icon: ReceiptText,
  },
  {
    title: "Download Records",
    description: "Keep invoices and payment records organized.",
    icon: ArrowDownToLine,
  },
];

export const workerFeatures: Feature[] = [
  {
    title: "My Employer",
    description: "See who you work for, on record.",
    icon: Building2,
  },
  {
    title: "My Role & Salary",
    description: "Your role and monthly salary, documented.",
    icon: BadgeCheck,
  },
  {
    title: "My Salary Slips",
    description: "A new digital slip every month you are paid.",
    icon: FileText,
  },
  {
    title: "My Payment History",
    description: "Every salary payment, with dates, in one place.",
    icon: History,
  },
  {
    title: "My Employment History",
    description: "Your work history builds month after month.",
    icon: ScrollText,
  },
];

export const workerMonthlyFlow: Step[] = [
  {
    number: "01",
    title: "Salary Paid",
    description: "The month's salary is paid and recorded.",
  },
  {
    number: "02",
    title: "Servy Salary Slip",
    description: "A digital slip is generated for the worker.",
  },
  {
    number: "03",
    title: "Employment Record",
    description: "The month joins the worker's employment record.",
  },
  {
    number: "04",
    title: "Work History",
    description: "History grows — proof that the work is real.",
  },
];

export const howItWorksSteps: Step[] = [
  {
    number: "01",
    title: "Household registers",
    description: "Create your household account.",
  },
  {
    number: "02",
    title: "Add worker",
    description: "Add your domestic worker and employment details.",
  },
  {
    number: "03",
    title: "Define employment",
    description: "Record role, salary and start date.",
  },
  {
    number: "04",
    title: "Salary is paid",
    description: "Payment is recorded through the Servy process.",
  },
  {
    number: "05",
    title: "Household receives invoice",
    description: "The household receives its Servy invoice.",
  },
  {
    number: "06",
    title: "Worker receives salary slip",
    description: "The worker receives a digital salary slip.",
  },
  {
    number: "07",
    title: "Records build over time",
    description: "Every month adds to employment and income history.",
  },
];

export const whoServesHousehold: string[] = [
  "Worker records",
  "Salary management",
  "Payments",
  "Invoices",
  "Employment records",
];

export const whoServesWorker: string[] = [
  "Employment profile",
  "Salary slips",
  "Payment history",
  "Employment history",
  "Documented income",
];

export const trustItems: Feature[] = [
  {
    title: "Secure account access",
    description: "Accounts protected with appropriate safeguards.",
    icon: Lock,
  },
  {
    title: "Identity verification",
    description: "Appropriate checks so records mean something.",
    icon: Fingerprint,
  },
  {
    title: "Secure payments",
    description: "Salary moves through secure payment infrastructure.",
    icon: ShieldCheck,
  },
  {
    title: "Privacy controls",
    description: "Your information stays yours — controlled sharing.",
    icon: BellRing,
  },
  {
    title: "Employment records",
    description: "Tamper-evident, organized records for both sides.",
    icon: Files,
  },
  {
    title: "Downloadable documents",
    description: "Invoices and slips you can keep and share.",
    icon: FileCheck2,
  },
  {
    title: "Support & grievance",
    description: "A clear process when something needs fixing.",
    icon: Landmark,
  },
];

export const appHighlights: Feature[] = [
  {
    title: "Workers",
    description: "Add workers and keep employment details in one place.",
    icon: Users,
  },
  {
    title: "Salary",
    description: "Set monthly salary and track what is paid.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Payments",
    description: "Record salary payments with dates and status.",
    icon: Wallet,
  },
  {
    title: "Invoices & Records",
    description: "Download invoices and keep household records organized.",
    icon: ReceiptText,
  },
];

export const workerAppHighlights: Feature[] = [
  {
    title: "Employer",
    description: "See your employer and employment details.",
    icon: Building2,
  },
  {
    title: "Salary",
    description: "Know your monthly salary, on record.",
    icon: HandCoins,
  },
  {
    title: "Salary Slips",
    description: "Open every month's slip whenever you need it.",
    icon: FileText,
  },
  {
    title: "Employment History",
    description: "Watch your documented work history grow.",
    icon: ScrollText,
  },
];

export const benefits: Feature[] = [
  {
    title: "For households",
    description: "Pay → Receive Invoice → Keep Records.",
    icon: ReceiptText,
  },
  {
    title: "For workers",
    description: "Work → Receive Salary Slip → Build Work History.",
    icon: FileText,
  },
  {
    title: "One trusted bridge",
    description:
      "Servy connects informal domestic work with organized records.",
    icon: CircleCheck,
  },
  {
    title: "Every month counts",
    description: "Each salary adds to a longer financial story.",
    icon: CalendarCheck,
  },
  {
    title: "Documents both sides",
    description: "Invoices for the household, slips for the worker.",
    icon: Files,
  },
  {
    title: "One simple app",
    description: "Workers, salary, payments and records in your pocket.",
    icon: Smartphone,
  },
];

export const journeySteps: Feature[] = [
  {
    title: "Register",
    description: "Household creates its account.",
    icon: UserPlus,
  },
  {
    title: "Add worker",
    description: "Worker and employment details recorded.",
    icon: Users,
  },
  {
    title: "Define salary",
    description: "Role, salary and start date set.",
    icon: BadgeIndianRupee,
  },
  {
    title: "Salary paid",
    description: "Monthly payment recorded.",
    icon: Wallet,
  },
  {
    title: "Invoice issued",
    description: "Household receives its record.",
    icon: ReceiptText,
  },
  {
    title: "Slip issued",
    description: "Worker receives proof of pay.",
    icon: FileText,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is Servy?",
    answer:
      "Servy connects households and domestic workers through organized employment, salary payments, invoices and financial records — one relationship, two financial records.",
  },
  {
    question: "What does a household get every month?",
    answer:
      "Each month the salary is paid and recorded, the household receives a Servy invoice — a document for the household service expense, with invoice number, worker, service period, amount and payment status.",
  },
  {
    question: "What does a domestic worker get every month?",
    answer:
      "Each month the worker receives a digital Servy salary slip showing employer, role, salary month, salary paid, payment date and employment ID — plus a growing employment and payment history.",
  },
  {
    question: "Can household expenses be claimed for tax?",
    answer:
      "Keep your Servy invoice with your household financial records. Where applicable, consult your tax professional regarding whether and how such expenses can be claimed or reported under current tax rules.",
  },
  {
    question: "Does Servy guarantee loans or credit approval?",
    answer:
      "No. Servy creates organized records of employment and income. These records may help workers demonstrate work and income history to institutions, but financial institutions make their own decisions.",
  },
  {
    question: "How do I start?",
    answer:
      "A household registers, adds the domestic worker with role, salary and start date, then records the monthly salary through the Servy process. Invoices and salary slips follow automatically each month.",
  },
];
