"use server";

import { createServerFn } from "@tanstack/react-start";
import type { PageRow, DropoffRow, VolunteerNeedRow, DonationMethodRow, ContentBlock } from "./content";
import { writeFile, readFile, mkdir } from "fs/promises";
import { join } from "path";

const DATA_DIR = "data/admin";
const PAGES_FILE = "pages.json";
const CONTENT_BLOCKS_FILE = "content-blocks.json";
const DROPOFFS_FILE = "dropoffs.json";
const VOLUNTEER_FILE = "volunteer-needs.json";
const DONATIONS_FILE = "donation-methods.json";

const DATA_DIR_PATH = "data/admin";

async function ensureDataDir() {
  const { mkdir } = await import("fs/promises");
  await mkdir("data/admin", { recursive: true });
}

async function readJsonFile<T>(filename: string, defaultValue: any[] = []): Promise<any[]> {
  try {
    const { readFile } = await import("fs/promises");
    const data = await readFile(`data/admin/${filename}`, "utf-8");
    return JSON.parse(data);
  } catch {
    return defaultValue;
  }
}

async function writeJsonFile(filename: string, data: any): Promise<void> {
  const { writeFile } = await import("fs/promises");
  await writeFile(`data/admin/${filename}`, JSON.stringify(data, null, 2));
}

async function readAllData() {
  const [pages, contentBlocks, dropoffs, volunteerNeeds, donationMethods] = await Promise.all([
    readJsonFile("pages.json", []),
    readJsonFile("content-blocks.json", []),
    readJsonFile("dropoffs.json", []),
    readJsonFile("volunteer-needs.json", []),
    readJsonFile("donation-methods.json", []),
  ]);
  return { pages, contentBlocks, dropoffs, volunteerNeeds, donationMethods };
}

async function writeData(key: string, data: any) {
  const filename = `${key}.json`;
  await writeJsonFile(filename, data);
}

export const getAdminData = createServerFn({ method: "POST" })
  .handler(async () => {
    const data = await readAllData();
    return data;
  });

export const savePage = createServerFn({ method: "POST" })
  .validator((data: { page: any }) => data)
  .handler(async ({ data }) => {
    const pages = await readJsonFile("pages.json", []);
    const existingIndex = pages.findIndex((p: any) => p.id === data.page.id);
    
    if (data.page.id) {
      const index = pages.findIndex((p: any) => p.id === data.page.id);
      if (index >= 0) {
        pages[index] = data.page;
      } else {
        pages.push(data.page);
      }
    } else {
      data.page.id = `page-${Date.now()}`;
      pages.push(data.page);
    }
    
    await writeJsonFile("pages.json", pages);
    return { success: true };
  });

export const deletePage = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const pages = await readJsonFile("pages.json", []);
    await writeJsonFile("pages.json", pages.filter((p: any) => p.id !== data.id));
    return { success: true };
  });

export const clonePage = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const pages = await readJsonFile("pages.json", []);
    const page = pages.find((p: any) => p.id === data.id);
    
    if (!page) throw new Error("Page not found");
    
    const cloned = {
      ...page,
      id: `page-${Date.now()}`,
      slug: `${data.slug}-copy`,
      title_en: `${data.title_en} (Copy)`,
      title_es: `${data.title_es} (Copia)`,
    };
    
    const allPages = await readJsonFile("pages.json", []);
    allPages.push(cloned);
    await writeJsonFile("pages.json", allPages);
    
    return { success: true, page: cloned };
  });

export const saveDropoff = createServerFn({ method: "POST" })
  .validator((data: { dropoff: any }) => data)
  .handler(async ({ data }) => {
    const allDropoffs = await readJsonFile("dropoffs.json", []);
    const existingIndex = allDropoffs.findIndex((d: any) => d.id === data.dropoff.id);
    
    if (data.dropoff.id && existingIndex >= 0) {
      allDropoffs[existingIndex] = data.dropoff;
    } else {
      data.dropoff.id = `dropoff-${Date.now()}`;
      allDropoffs.push(data.dropoff);
    }
    
    await writeJsonFile("dropoffs.json", allDropoffs);
    return { success: true };
  });

export const cloneDropoff = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const allDropoffs = await readJsonFile("dropoffs.json", []);
    const dropoff = allDropoffs.find((d: any) => d.id === data.id);
    
    if (!dropoff) throw new Error("Dropoff not found");
    
    const cloned = {
      ...dropoff,
      id: `dropoff-${Date.now()}`,
      name: `${dropoff.name} (Copy)`,
    };
    
    allDropoffs.push(cloned);
    await writeJsonFile("dropoffs.json", allDropoffs);
    
    return { success: true, dropoff: cloned };
  });

export const saveVolunteerNeed = createServerFn({ method: "POST" })
  .validator((data: { need: any }) => data)
  .handler(async ({ data }) => {
    const allNeeds = await readJsonFile("volunteer-needs.json", []);
    const existingIndex = allNeeds.findIndex((n: any) => n.id === data.need.id);
    
    if (data.need.id && existingIndex >= 0) {
      allNeeds[existingIndex] = data.need;
    } else {
      data.need.id = `volunteer-${Date.now()}`;
      allNeeds.push(data.need);
    }
    
    await writeJsonFile("volunteer-needs.json", allNeeds);
    return { success: true };
  });

export const cloneVolunteerNeed = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const allNeeds = await readJsonFile("volunteer-needs.json", []);
    const need = allNeeds.find((n: any) => n.id === data.id);
    
    if (!need) throw new Error("Volunteer need not found");
    
    const cloned = {
      ...need,
      id: `volunteer-${Date.now()}`,
      title_en: `${need.title_en} (Copy)`,
      title_es: `${need.title_es} (Copia)`,
    };
    
    allNeeds.push(cloned);
    await writeJsonFile("volunteer-needs.json", allNeeds);
    
    return { success: true, need: cloned };
  });

export const saveDonationMethod = createServerFn({ method: "POST" })
  .validator((data: { method: any }) => data)
  .handler(async ({ data }) => {
    const allMethods = await readJsonFile("donation-methods.json", []);
    const existingIndex = allMethods.findIndex((m: any) => m.id === data.method.id);
    
    if (data.method.id && existingIndex >= 0) {
      allMethods[existingIndex] = data.method;
    } else {
      data.method.id = `donation-${Date.now()}`;
      allMethods.push(data.method);
    }
    
    await writeJsonFile("donation-methods.json", allMethods);
    return { success: true };
  });

export const cloneDonationMethod = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const allMethods = await readJsonFile("donation-methods.json", []);
    const method = allMethods.find((m: any) => m.id === data.id);
    
    if (!method) throw new Error("Donation method not found");
    
    const cloned = {
      ...method,
      id: `donation-${Date.now()}`,
      name_en: `${method.name_en} (Copy)`,
      name_es: `${method.name_es} (Copia)`,
    };
    
    allMethods.push(cloned);
    await writeJsonFile("donation-methods.json", allMethods);
    
    return { success: true, method: cloned };
  });

export const reorderItems = createServerFn({ method: "POST" })
  .validator((data: { type: string; items: any[] }) => data)
  .handler(async ({ data }) => {
    const filename = `${data.type}.json`;
    await writeJsonFile(`${data.type}.json`, data.items);
    return { success: true };
  });