import { IFooterLink } from "@type/type";
import { food, entertainment, nature } from "lib/ActivCategory/activCategory";

export const footerLink: IFooterLink[] = [
  {
    href: "/food",
    actions: food,
    label: "Еда",
    category: "food",
  },
  {
    href: "/entertainment",
    actions: entertainment,
    label: "Развлечение",
    category: "entertainment",
  },
  {
    href: "/nature",
    actions: nature,
    label: "Отдых",
    category: "nature",
  },
];
