import { Rocket, Users, Globe, Zap, Trophy, Sparkles } from "lucide-react";
import type { TimelineItem } from "@/types/types";

export const timelineData: TimelineItem[] = [
  {
    year: "2021",
    title: "The Beginning",
    description: "RigitiX concept born at a tech conference. Seed funding secured.",
    icon: Rocket,
    type: "milestone",
  },
  {
    year: "2022",
    title: "First Launch",
    description: "Beta platform launched with 50 pilot events. Community of 10K users.",
    icon: Users,
    type: "launch",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded to 30 countries. Processed 1M+ NFT credentials.",
    icon: Globe,
    type: "expansion",
  },
  {
    year: "2024",
    title: "Innovation Milestone",
    description: "Launched AI-powered networking. Partnered with major event platforms.",
    icon: Zap,
    type: "milestone",
  },
  {
    year: "2025",
    title: "Industry Recognition",
    description: "Named Top Web3 Event Platform. 10K+ events powered monthly.",
    icon: Trophy,
    type: "recognition",
  },
  {
    year: "Future",
    title: "What's Next",
    description: "Metaverse integration, DAO governance, and global community growth.",
    icon: Sparkles,
    type: "future",
  },
];
