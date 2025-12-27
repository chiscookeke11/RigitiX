import type { EventsDataType } from "../types/types";

export const cityEvents: EventsDataType[] = [
  {
    id: 101,
    hostName: "Dribbble Meetup",
    hostImage: "/images/featuredEvents/host.png",
    eventName: "Mail Design Conference",
    eventDescription:
      "Join me for a live chat tomorrow at 6 PM! Let’s talk design, trends, and everything UI.",
    eventTime: new Date("2024-06-29T18:00:00"),
    eventLocation: "Christ Chapel International Churches",
    town: "Nsukka",
    state: "Enugu",
    country: "Nigeria",
    timeCreated: new Date(),
    eventImage: "/images/cityEvents/vibes-with_the_oldies.jpg",
    category: "conferences & seminars",
    number_of_likes: 47,
    number_of_comments: 366,
    status: "Free",
    tags: ["Conference", "Design", "UI"],
    galleryImages: [
      "/images/cityEvents/vibes-with_the_oldies.jpg",
      "/images/cityEvents/creative-hangout.jpg",
    ],
    sponsors: [
      {
        color: "#1D6CFC",
        image: "/images/event-sponsors/Vector (2).svg",
      },
    ],
    speakers: [
      {
        name: "Chukwu Adeyemi",
        image: "/images/speakers/chukwu.jpg",
        instaUrl: "",
        linkedInUrl: "",
        profession: "Product Designer",
        xUrl: "",
      },
    ],
    price: {
      Regular: {
        amountLeft: 200,
        price: 0,
      },
      VIP: {
        amountLeft: 50,
        price: 5000,
      },
      VVIP: {
        amountLeft: 20,
        price: 10000,
      },
    },
    facebookUrl: "",
    linkedInUrl: "",
    xUrl: "",
  },

  {
    id: 102,
    hostName: "Dribbble Meetup",
    hostImage: "/images/featuredEvents/host.png",
    eventName: "Creative Hangout",
    eventDescription:
      "A relaxed creative hangout for designers and creatives to connect and share ideas.",
    eventTime: new Date("2024-07-05T16:00:00"),
    eventLocation: "Christ Chapel International Churches",
    town: "Nsukka",
    state: "Enugu",
    country: "Nigeria",
    timeCreated: new Date(),
    eventImage: "/images/cityEvents/creative-hangout.jpg",
    category: "community & networking",
    number_of_likes: 47,
    number_of_comments: 366,
    status: "Free",
    tags: ["Creatives", "Networking", "Design"],
    galleryImages: [
      "/images/cityEvents/creative-hangout.jpg",
      "/images/cityEvents/church.jpg",
    ],
    sponsors: [],
    speakers: [],
    price: {
      Regular: {
        amountLeft: 150,
        price: 0,
      },
      VIP: {
        amountLeft: 30,
        price: 3000,
      },
      VVIP: {
        amountLeft: 10,
        price: 7000,
      },
    },
    facebookUrl: "",
    linkedInUrl: "",
    xUrl: "",
  },

  {
    id: 103,
    hostName: "Dribbble Meetup",
    hostImage: "/images/featuredEvents/host.png",
    eventName: "Sunday Worship Experience",
    eventDescription:
      "A powerful worship and community experience filled with music and inspiration.",
    eventTime: new Date("2024-07-07T09:00:00"),
    eventLocation: "Christ Chapel International Churches",
    town: "Nsukka",
    state: "Enugu",
    country: "Nigeria",
    timeCreated: new Date(),
    eventImage: "/images/cityEvents/church.jpg",
    category: "arts & culture",
    number_of_likes: 47,
    number_of_comments: 366,
    status: "Free",
    tags: ["Worship", "Community", "Faith"],
    galleryImages: ["/images/cityEvents/church.jpg"],
    sponsors: [],
    speakers: [],
    price: {
      Regular: {
        amountLeft: 500,
        price: 0,
      },
      VIP: {
        amountLeft: 0,
        price: 0,
      },
      VVIP: {
        amountLeft: 0,
        price: 0,
      },
    },
    facebookUrl: "",
    linkedInUrl: "",
    xUrl: "",
  },

  {
    id: 104,
    hostName: "Dribbble Meetup",
    hostImage: "/images/featuredEvents/host.png",
    eventName: "Designers Meetup",
    eventDescription:
      "An exclusive meetup for designers to network, learn, and collaborate.",
    eventTime: new Date("2024-07-12T17:00:00"),
    eventLocation: "Christ Chapel International Churches",
    town: "Nsukka",
    state: "Enugu",
    country: "Nigeria",
    timeCreated: new Date(),
    eventImage: "/images/featuredEvents/dribble-meetup4.jpg",
    category: "community & networking",
    number_of_likes: 47,
    number_of_comments: 366,
    status: "Free",
    tags: ["Design", "Meetup", "UI/UX"],
    galleryImages: ["/images/featuredEvents/dribble-meetup4.jpg"],
    sponsors: [],
    speakers: [],
    price: {
      Regular: {
        amountLeft: 120,
        price: 0,
      },
      VIP: {
        amountLeft: 20,
        price: 4000,
      },
      VVIP: {
        amountLeft: 10,
        price: 8000,
      },
    },
    facebookUrl: "",
    linkedInUrl: "",
    xUrl: "",
  },
];
