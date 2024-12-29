import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "he", "ar", "ru"],

  // Used when no locale matches
  defaultLocale: "he",

  // A mapping of pathnames
  pathnames: {
    "/": "/",
    "/pathnames": {
      en: "/pathnames",
      he: "/he/pathnames",
      ar: "/ar/pathnames",
      ru: "/ru/pathnames",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
