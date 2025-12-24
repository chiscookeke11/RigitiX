import type { LucideIcon } from "lucide-react";

export interface EventsDataType {
  id: number,
  hostName: string,
  hostImage: string,
  eventName: string,
  eventDescription: string,
  eventTime: Date,
  eventLocation: string,
  town: string,
  state: string,
  country: string,
  timeCreated: Date,
  eventImage: string,
  category: string,
  number_of_likes: number,
  number_of_comments: number,
  xUrl: string,
  linkedInUrl: string,
  facebookUrl: string,
  status: "Free" | "Paid",
  tags?: string[],
  galleryImages?: string[],
  sponsors?: {
    color: string;
    image: string;
  }[],
  speakers?: {
    name: string;
    image: string;
    profession: string;
    linkedInUrl: string;
    instaUrl: string;
    xUrl: string
  }[],
  price?: {
    Regular: {
      price: number,
      amountLeft: number,
    },
    VIP: {
      price: number,
      amountLeft: number,
    },
    VVIP: {
      price: number,
      amountLeft: number,
    },
  }
}


export interface TestimonialCardTypes {
  image: string;
  name: string;
  testimony: string;
}


export interface customSelectTypes {
  label: string;
  value: string
}


export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}





export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  type: string;
}



export interface CountryDataType {
    label: string;
    value: string;
    iso: string
}