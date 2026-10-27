import type { IconName } from "@/components/icon";
import { events, news, services, statuses } from "./city";

export type HubImageAsset = {
  src: string;
  alt: string;
  placeholder?: boolean;
  icon?: IconName;
};

// Add each missing image at its src path, then remove placeholder: true.
// Existing images remain shared; no homepage assets are overwritten.
export const residentImages = {
  hero: {
    src: "/images/downtown.png",
    alt: "Brick storefronts, shade trees, and welcoming sidewalks on Main Street",
  },
  parks: {
    src: "/images/park.png",
    alt: "Neighbors walking a dog on a tree-lined park path beside the river",
  },
movie: {
  src: "/images/parkmovie.png",
  alt: "Brookhaven residents gathered for an outdoor movie in the park",
},
} satisfies Record<string, HubImageAsset>;

const quickServiceIds = [
  "utility-bill",
  "trash",
  "permits",
  "concern",
  "parks",
];

export const residentServices = services.filter((service) =>
  quickServiceIds.includes(service.id),
);

// The directory and popular list use the same records as the homepage.
export const popularServices = services.filter((service) =>
  ["utility-bill", "concern", "permits", "trash"].includes(service.id),
);

export type PulsePreviewItem = {
  icon: IconName;
  label: string;
  value: string;
};

export const residentStatuses: PulsePreviewItem[] = [
  { icon: "sun", label: "Weather", value: "72° · Sunny" },
  ...statuses,
  { icon: "alert", label: "Alerts", value: "None" },
];

type ResidentNews = (typeof news)[number] & {
  image: HubImageAsset;
};

const newsImages: Record<string, HubImageAsset> = {
  "main-street": {
    src: "/images/storefront.png",
    alt: "Downtown Brookhaven streetscape improvements nearing completion",
  },
  council: {
    src: "/images/residents/news/city-hall.jpg",
    alt: "City Hall photography placeholder",
    placeholder: true,
    icon: "building",
  },
  cleanup: {
    src: "/images/residents/news/fall-clean-up.jpg",
    alt: "Fall Clean-Up Day photography placeholder",
    placeholder: true,
    icon: "tree",
  },
};

export const residentNews: ResidentNews[] = [
  ...news.map((story) => ({
    ...story,
    image: newsImages[story.id] ?? newsImages.council,
  })),
  {
    id: "community-center",
    category: "Community",
    date: "2026-09-24",
    displayDate: "September 24, 2026",
    title: "New Community Center",
    description: "A new place to learn, connect, and grow together.",
    details:
      "This illustrative community center project imagines flexible spaces for recreation, classes, and neighborhood gatherings. It is fictional; no construction or registration is underway.",
    image: {
      src: "/images/residents/news/community-center.jpg",
      alt: "Community center photography placeholder",
      placeholder: true,
      icon: "building",
    },
  },
];

type CityProgram = {
  id: string;
  title: string;
  image: HubImageAsset;
  description: string;
  serviceId?: string;
};

export const cityPrograms: CityProgram[] = [
  {
    id: "housing",
    title: "Housing & Neighborhoods",
    image: {
      src: "/images/residents/programs/housing.jpg",
      alt: "Housing and neighborhoods photography placeholder",
      placeholder: true,
      icon: "building",
    },
    description:
      "A place for neighborhood resources, property care, and housing information. Local assistance programs will be listed when municipal records are connected.",
  },
  {
    id: "roads",
    title: "Roads & Transportation",
    image: {
      src: "/images/residents/programs/roads.jpg",
      alt: "Roads and transportation photography placeholder",
      placeholder: true,
      icon: "road",
    },
    description:
      "Find guidance for reporting street and sidewalk concerns. Transportation schedules and construction notices are not connected in this demonstration.",
    serviceId: "concern",
  },
  {
    id: "safety",
    title: "Public Safety",
    image: {
      src: "/images/residents/programs/public-safety.jpg",
      alt: "Public safety photography placeholder",
      placeholder: true,
      icon: "alert",
    },
    description:
      "Future resources will include preparedness, prevention, and non-emergency contacts. This demonstration does not accept incident reports. For an actual emergency, call 911.",
  },
  {
    id: "careers",
    title: "Jobs & Careers",
    image: {
      src: "/images/residents/programs/careers.jpg",
      alt: "Jobs and careers photography placeholder",
      placeholder: true,
      icon: "card",
    },
    description: "Explore information about working for the city.",
    serviceId: "jobs",
  },
  {
    id: "volunteer",
    title: "Volunteer Opportunities",
    image: {
      src: "/images/residents/programs/volunteer.jpg",
      alt: "Volunteer photography placeholder",
      placeholder: true,
      icon: "tree",
    },
    description:
      "Help care for shared spaces and connect with neighbors. The sample Fall Clean-Up Day appears in Upcoming Events. Volunteer sign-ups are not yet available.",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    image: {
      src: "/images/residents/programs/sustainability.jpg",
      alt: "Sustainability photography placeholder",
      placeholder: true,
      icon: "tree",
    },
    description:
      "Small everyday choices can help keep Brookhaven clean and green. Start with the trash and recycling service guidance.",
    serviceId: "trash",
  },
  {
    id: "maps",
    title: "Maps & GIS",
    image: {
      src: "/images/residents/programs/maps.jpg",
      alt: "City map image placeholder",
      placeholder: true,
      icon: "pin",
    },
    description:
      "A future home for city boundaries, public facilities, and neighborhood maps. No geographic data or interactive map is connected yet.",
  },
  {
    id: "more-services",
    title: "More Services",
    image: {
      src: "/images/residents/programs/more-services.jpg",
      alt: "City services photography placeholder",
      placeholder: true,
      icon: "building",
    },
    description:
      "Browse the resident service directory for billing, permits, reporting, recreation, and employment guidance.",
  },
];

type ResidentPark = {
  id: string;
  name: string;
  description: string;
  details: string;
  image: HubImageAsset;
};

export const residentParks: ResidentPark[] = [
  {
    id: "riverside",
    name: "Riverside Park",
    description: "Trails, playground, and river views.",
    details:
      "An imagined riverside gathering place with picnic lawns, a playground, and walking paths. Facility reservations are not yet connected.",
    image: residentImages.parks,
  },
  {
    id: "heritage-grove",
    name: "Heritage Grove Park",
    description: "Picnic areas and fields.",
    details:
      "A fictional neighborhood park with shade trees and space for recreation. Hours and accessibility information will be added with verified park records.",
    image: {
      src: "/images/heritagegrovepark.png",
      alt: "Heritage Grove Park playground, picnic pavilion, and neighborhood green space",
    },
  },
  {
    id: "maplewood",
    name: "Maplewood Trails",
    description: "Walking & biking paths.",
    details:
      "An illustrative network of woodland trails. Route maps, trail conditions, and accessible facilities will be listed in a future phase.",
    image: {
      src: "/images/trails.png",
      alt: "Wooded Maplewood Trails path for walking and biking",
    },
  },
  {
    id: "oak-creek",
    name: "Oak Creek Preserve",
    description: "Nature trails and wildlife.",
    details:
      "A fictional natural area for quiet walks and wildlife observation. No real trailhead or visitor facilities are represented by this sample record.",
    image: {
      src: "/images/oakcreek.png",
      alt: "Oak Creek Preserve wetland, creek, and wildlife observation area",
    },
  },
];

export const movieEvent = events.find((event) => event.id === "movie")!;