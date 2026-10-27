import { city, services } from "./city";
import type { IconName } from "@/components/icon";

export const departmentCategories = [
  { id: "public-safety", label: "Public Safety", icon: "alert" },
  { id: "public-works", label: "Public Works", icon: "road" },
  { id: "development", label: "Community Development", icon: "building" },
  { id: "parks", label: "Parks & Recreation", icon: "tree" },
  { id: "finance", label: "Finance & Utilities", icon: "water" },
  { id: "administration", label: "Administration", icon: "file" },
] as const satisfies ReadonlyArray<{
  id: string;
  label: string;
  icon: IconName;
}>;

export type DepartmentCategoryId = (typeof departmentCategories)[number]["id"];

export type Department = {
  id: string;
  name: string;
  categoryId: DepartmentCategoryId;
  description: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    address: string;
    hours: string;
  };
  responsibilities: string[];
  serviceIds: string[];
  keywords: string[];
  featuredOrder?: number;
  page: {
    href: string;
    status: "planned" | "published";
  };
};

// All contacts are illustrative: reserved 555-01xx numbers and .example emails.
// Stable IDs and service references can support future pages and integrations.
export const departments: Department[] = [
  {
    id: "city-administration",
    name: "City Administration",
    categoryId: "administration",
    description: "City leadership, council coordination, and day-to-day operations.",
    contact: {
      phone: "(217) 555-0101",
      email: "administration@brookhaven.example",
      location: "City Hall · Administration Office",
      address: city.address,
      hours: city.hours,
    },
    responsibilities: ["City Council", "City policies", "General city inquiries"],
    serviceIds: ["concern"],
    keywords: ["mayor", "manager", "leadership", "council meetings", "city hall"],
    page: {
      href: "/departments/city-administration",
      status: "planned",
    },
  },
  {
    id: "city-clerk",
    name: "City Clerk",
    categoryId: "administration",
    description: "Public records, meeting agendas, minutes, and official city documents.",
    contact: {
      phone: "(217) 555-0102",
      email: "clerk@brookhaven.example",
      location: "City Hall · Clerk’s Office",
      address: city.address,
      hours: city.hours,
    },
    responsibilities: ["Public records requests", "Meeting agendas", "City ordinances"],
    serviceIds: [],
    keywords: ["FOIA", "minutes", "records", "documents", "ordinance"],
    page: {
      href: "/departments/city-clerk",
      status: "planned",
    },
  },
  {
    id: "community-development",
    name: "Community Development",
    categoryId: "development",
    description: "Building permits, planning, zoning, and safe, thriving neighborhoods.",
    contact: {
      phone: "(217) 555-0103",
      email: "planning@brookhaven.example",
      location: "City Hall · Development Counter",
      address: city.address,
      hours: city.hours,
    },
    responsibilities: ["Building inspections", "Zoning questions", "Property maintenance"],
    serviceIds: ["permits", "concern"],
    keywords: ["fence", "deck", "renovation", "housing", "construction", "code"],
    page: {
      href: "/departments/community-development",
      status: "planned",
    },
  },
  {
    id: "economic-development",
    name: "Economic Development",
    categoryId: "development",
    description: "Support for local businesses, investment, and downtown vitality.",
    contact: {
      phone: "(217) 555-0104",
      email: "business@brookhaven.example",
      location: "City Hall · Business Resource Office",
      address: city.address,
      hours: city.hours,
    },
    responsibilities: ["Starting a business", "Business expansion", "Downtown investment"],
    serviceIds: ["permits"],
    keywords: ["small business", "shops", "commercial", "incentives", "entrepreneur"],
    page: {
      href: "/departments/economic-development",
      status: "planned",
    },
  },
  {
    id: "finance",
    name: "Finance Department",
    categoryId: "finance",
    description: "City finances, payment questions, purchasing, and budget information.",
    contact: {
      phone: "(217) 555-0105",
      email: "finance@brookhaven.example",
      location: "City Hall · Finance Counter",
      address: city.address,
      hours: city.hours,
    },
    responsibilities: ["Billing questions", "City budget", "Purchasing & bids"],
    serviceIds: ["utility-bill"],
    keywords: ["pay", "water bill", "invoice", "tax", "fees", "procurement"],
    featuredOrder: 3,
    page: {
      href: "/departments/finance",
      status: "planned",
    },
  },
  {
    id: "fire",
    name: "Fire Department",
    categoryId: "public-safety",
    description: "Fire prevention, safety education, inspections, and emergency response.",
    contact: {
      phone: "(217) 555-0106",
      email: "fire@brookhaven.example",
      location: "Fire Station 1 · Administrative Office",
      address: "120 W. Oak Street",
      hours: "Administrative office: Monday–Friday, 8:00 AM–4:30 PM",
    },
    responsibilities: ["Fire safety education", "Fire inspections", "Smoke alarm guidance"],
    serviceIds: [],
    keywords: ["firefighter", "smoke detector", "prevention", "emergency", "fire marshal"],
    page: {
      href: "/departments/fire",
      status: "planned",
    },
  },
  {
    id: "human-resources",
    name: "Human Resources",
    categoryId: "administration",
    description: "City employment, recruitment, employee benefits, and workplace support.",
    contact: {
      phone: "(217) 555-0107",
      email: "hr@brookhaven.example",
      location: "City Hall · Human Resources Office",
      address: city.address,
      hours: city.hours,
    },
    responsibilities: ["Job opportunities", "Recruitment", "Employee benefits"],
    serviceIds: ["jobs"],
    keywords: ["career", "hiring", "employment", "work", "HR", "application"],
    page: {
      href: "/departments/human-resources",
      status: "planned",
    },
  },
  {
    id: "information-technology",
    name: "Information Technology",
    categoryId: "administration",
    description: "City technology, digital services, and dependable public-facing systems.",
    contact: {
      phone: "(217) 555-0108",
      email: "technology@brookhaven.example",
      location: "City Hall · Technology Office",
      address: city.address,
      hours: city.hours,
    },
    responsibilities: ["Website issues", "Digital accessibility", "City technology"],
    serviceIds: [],
    keywords: ["IT", "website", "online", "computer", "technical support", "accessibility"],
    page: {
      href: "/departments/information-technology",
      status: "planned",
    },
  },
  {
    id: "parks-recreation",
    name: "Parks & Recreation",
    categoryId: "parks",
    description: "Parks, trails, recreation programs, and places to gather and play.",
    contact: {
      phone: "(217) 555-0109",
      email: "parks@brookhaven.example",
      location: "Parks & Recreation Office",
      address: "240 Riverside Drive",
      hours: "Monday–Friday, 8:00 AM–5:00 PM",
    },
    responsibilities: ["Park facilities", "Recreation programs", "Trail information"],
    serviceIds: ["parks"],
    keywords: ["playground", "sports", "picnic", "shelter", "reservation", "swimming"],
    featuredOrder: 2,
    page: {
      href: "/departments/parks-recreation",
      status: "planned",
    },
  },
  {
    id: "police",
    name: "Police Department",
    categoryId: "public-safety",
    description: "Non-emergency assistance, police records, and community safety programs.",
    contact: {
      phone: "(217) 555-0110",
      email: "police@brookhaven.example",
      location: "Public Safety Building · Records Desk",
      address: "110 W. Oak Street",
      hours: "Records desk: Monday–Friday, 8:00 AM–4:30 PM",
    },
    responsibilities: ["Police records", "Community policing", "Safety education"],
    serviceIds: [],
    keywords: ["non emergency", "crime", "police report", "traffic", "safety"],
    page: {
      href: "/departments/police",
      status: "planned",
    },
  },
  {
    id: "public-works",
    name: "Public Works",
    categoryId: "public-works",
    description: "Streets, sidewalks, snow removal, waste collection, and city infrastructure.",
    contact: {
      phone: "(217) 555-0111",
      email: "publicworks@brookhaven.example",
      location: "Public Works Service Center",
      address: "600 Industrial Drive",
      hours: "Monday–Friday, 7:00 AM–3:30 PM",
    },
    responsibilities: ["Street maintenance", "Snow removal", "Waste collection"],
    serviceIds: ["concern", "trash"],
    keywords: ["pothole", "streetlight", "roads", "garbage", "recycling", "plow", "drainage"],
    featuredOrder: 1,
    page: {
      href: "/departments/public-works",
      status: "planned",
    },
  },
  {
    id: "utilities",
    name: "Utilities",
    categoryId: "finance",
    description: "Water and sewer service, account changes, and utility service questions.",
    contact: {
      phone: "(217) 555-0112",
      email: "utilities@brookhaven.example",
      location: "City Hall · Utility Service Counter",
      address: city.address,
      hours: city.hours,
    },
    responsibilities: ["Start or stop service", "Water service", "Sewer questions"],
    serviceIds: ["utility-bill", "concern"],
    keywords: ["water bill", "leak", "meter", "sewer", "moving", "account", "outage"],
    page: {
      href: "/departments/utilities",
      status: "planned",
    },
  },
];

export function getDepartmentServices(department: Department) {
  return services.filter((service) => department.serviceIds.includes(service.id));
}

export function getDepartmentSearchText(department: Department) {
  const category = departmentCategories.find(
    (item) => item.id === department.categoryId,
  );

  return [
    department.name,
    department.description,
    category?.label,
    department.contact.location,
    department.contact.address,
    department.contact.phone,
    department.contact.email,
    ...department.responsibilities,
    ...department.keywords,
    ...getDepartmentServices(department).flatMap((service) => [
      service.title,
      service.keywords,
    ]),
  ].join(" ");
}
