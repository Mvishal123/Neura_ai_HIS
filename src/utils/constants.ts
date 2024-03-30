import { finance, markdown, news, traveller } from "@/assets";
import { describe } from "node:test";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Marketplace",
    href: "/marketplace",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
];

export const MAIN_NAV_LINKS = [
  {
    label: "Create",
    href: "/create",
  },
  {
    label: "Marketplace",
    href: "/marketplace",
  },
];

export const PRICING_DETAILS = [
  {
    type: "Free",
    price: 20,
    sub: "For learners",
    features: ["1000 credits"],
  },
  {
    type: "Standard",
    price: 49.99,
    sub: "Most popular",
    features: ["1000 credits"],
  },
  {
    type: "Pro",
    price: 69.99,
    sub: "For rigorous users",
    features: [
      "Everything in standard +",
      "1000 credits",
      "2 crew models",
      "24/7 support",
    ],
  },
  {
    type: "Custom",
    price: "Contact us",
    sub: "For enterprises",
    features: ["unlimited credits", "unlimited crew models", "24/7 support"],
  },
];

export const MY_CREW = [
  {
    id: 1,
    image: finance,
    name: "Stock analysts",
    description:
      "We'll help you with your finances. From daily savings to stock analysis we got you",
  },
  {
    id: 2,
    image: traveller,
    name: "Travel Guides",
    description:
      "Navigating your journey! From flight bookings to local attractions, count on us for a seamless travel experience.",
  },
  {
    id: 3,
    image: markdown,
    name: "Markdown Masters",
    description:
      "Transforming your content! Whether it's markdown to HTML or vice versa, we simplify markup conversion for your projects.",
  },
  {
    id: 4,
    image: news,
    name: "News Navigators",
    description:
      "Stay informed, stay ahead! We curate and deliver daily news summaries tailored to your interests, keeping you updated with the latest happenings.",
  },
];
