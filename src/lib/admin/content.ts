export interface ContentBlock {
  key: string;
  en: string;
  es: string;
}

export interface PageRow {
  id: string;
  slug: string;
  label_en: string;
  label_es: string;
  title_en: string;
  title_es: string;
  body_en: string;
  body_es: string;
  image?: string;
  sort_order: number;
  visible: boolean;
  is_system: boolean;
}

export interface DropoffRow {
  id: string;
  name: string;
  address: string;
  hours_en: string;
  hours_es: string;
  phone: string;
  map_url: string;
  image?: string;
  sort_order: number;
  visible: boolean;
}

export interface VolunteerNeedRow {
  id: string;
  title_en: string;
  title_es: string;
  desc_en: string;
  desc_es: string;
  image?: string;
  sort_order: number;
  visible: boolean;
}

export interface DonationMethodRow {
  id: string;
  name_en: string;
  name_es: string;
  details_en: string;
  details_es: string;
  link: string;
  image?: string;
  sort_order: number;
  visible: boolean;
}

export interface ContentBlock {
  key: string;
  en: string;
  es: string;
}

export interface PageRow {
  id: string;
  slug: string;
  label_en: string;
  label_es: string;
  title_en: string;
  title_es: string;
  body_en: string;
  body_es: string;
  image?: string;
  sort_order: number;
  visible: boolean;
  is_system: boolean;
}

export interface DropoffRow {
  id: string;
  name: string;
  address: string;
  hours_en: string;
  hours_es: string;
  phone: string;
  map_url: string;
  image?: string;
  sort_order: number;
  visible: boolean;
}

export interface VolunteerNeedRow {
  id: string;
  title_en: string;
  title_es: string;
  desc_en: string;
  desc_es: string;
  image?: string;
  sort_order: number;
  visible: boolean;
}

export interface DonationMethodRow {
  id: string;
  name_en: string;
  name_es: string;
  details_en: string;
  details_es: string;
  link: string;
  image?: string;
  sort_order: number;
  visible: boolean;
}

export interface ContentBlock {
  key: string;
  en: string;
  es: string;
}

export const SYSTEM_PATHS: Record<string, string> = {
  home: "/",
  values: "/values",
  help: "/help",
  volunteer: "/volunteer",
  "drop-off": "/drop-off",
  donate: "/donate",
  contact: "/contact",
  team: "/team",
  about: "/about",
};

export function pagePath(p: { slug: string; is_system: boolean }) {
  return p.is_system ? (SYSTEM_PATHS[p.slug] ?? "/") : `/${p.slug}`;
}