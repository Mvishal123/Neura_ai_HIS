import { finance } from "@/assets";

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
    features: [
      "unlimited credits",
      "unlimited crew models",
      "24/7 support",
    ],
  },
];
