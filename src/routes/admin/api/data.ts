"use server";

import { createServerFn } from "@tanstack/react-start";
import type { PageRow, DropoffRow, VolunteerNeedRow, DonationMethodRow, ContentBlock } from "./content";
import { defaultAdminData } from "@/lib/admin/defaultData";

// In-memory storage (resets on serverless cold starts, but works for demo)
// For production, use Vercel KV, Upstash Redis, or a database
const memoryStore = {
  pages: [...defaultAdminData.pages] as any[],
  contentBlocks: defaultAdminData.contentBlocks || {} as any,
  dropoffs: [...defaultAdminData.dropoffs] as any[],
  volunteerNeeds: [...defaultAdminData.volunteerNeeds] as any[],
  donationMethods: [...defaultAdminData.donationMethods] as any[],
};

async function readAllData() {
  return {
    pages: memoryStore.pages,
    contentBlocks: memoryStore.contentBlocks,
    dropoffs: memoryStore.dropoffs,
    volunteerNeeds: memoryStore.volunteerNeeds,
    donationMethods: memoryStore.donationMethods,
  };
}

export const getAdminData = createServerFn({ method: "POST" })
  .handler(async () => {
    const data = await readAllData();
    return data;
  });

export const savePage = createServerFn({ method: "POST" })
  .validator((data: { page: any }) => data)
  .handler(async ({ data }) => {
    const pages = memoryStore.pages;
    const existingIndex = pages.findIndex((p: any) => p.id === data.page.id);
    
    if (data.page.id && existingIndex >= 0) {
      pages[existingIndex] = data.page;
    } else {
      data.page.id = `page-${Date.now()}`;
      pages.push(data.page);
    }
    
    return { success: true };
  });

export const deletePage = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    memoryStore.pages = memoryStore.pages.filter((p: any) => p.id !== data.id);
    return { success: true };
  });

export const clonePage = createServerFn({ method: "POST" })
  .validator((data: { id: string; slug: string; title_en: string; title_es: string }) => data)
  .handler(async ({ data }) => {
    const pages = memoryStore.pages;
    const page = pages.find((p: any) => p.id === data.id);
    
    if (!page) throw new Error("Page not found");
    
    const cloned = {
      ...page,
      id: `page-${Date.now()}`,
      slug: `${data.slug}-copy`,
      title_en: `${data.title_en} (Copy)`,
      title_es: `${data.title_es} (Copia)`,
    };
    
    pages.push(cloned);
    return { success: true, page: cloned };
  });

export const saveDropoff = createServerFn({ method: "POST" })
  .validator((data: { dropoff: any }) => data)
  .handler(async ({ data }) => {
    const dropoffs = memoryStore.dropoffs;
    const existingIndex = dropoffs.findIndex((d: any) => d.id === data.dropoff.id);
    
    if (data.dropoff.id && existingIndex >= 0) {
      dropoffs[existingIndex] = data.dropoff;
    } else {
      data.dropoff.id = `dropoff-${Date.now()}`;
      dropoffs.push(data.dropoff);
    }
    
    return { success: true };
  });

export const cloneDropoff = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const dropoffs = memoryStore.dropoffs;
    const dropoff = dropoffs.find((d: any) => d.id === data.id);
    
    if (!dropoff) throw new Error("Dropoff not found");
    
    const cloned = {
      ...dropoff,
      id: `dropoff-${Date.now()}`,
      name: `${dropoff.name} (Copy)`,
    };
    
    dropoffs.push(cloned);
    return { success: true, dropoff: cloned };
  });

export const saveVolunteerNeed = createServerFn({ method: "POST" })
  .validator((data: { need: any }) => data)
  .handler(async ({ data }) => {
    const needs = memoryStore.volunteerNeeds;
    const existingIndex = needs.findIndex((n: any) => n.id === data.need.id);
    
    if (data.need.id && existingIndex >= 0) {
      needs[existingIndex] = data.need;
    } else {
      data.need.id = `volunteer-${Date.now()}`;
      needs.push(data.need);
    }
    
    return { success: true };
  });

export const cloneVolunteerNeed = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const needs = memoryStore.volunteerNeeds;
    const need = needs.find((n: any) => n.id === data.id);
    
    if (!need) throw new Error("Volunteer need not found");
    
    const cloned = {
      ...need,
      id: `volunteer-${Date.now()}`,
      title_en: `${need.title_en} (Copy)`,
      title_es: `${need.title_es} (Copia)`,
    };
    
    needs.push(cloned);
    return { success: true, need: cloned };
  });

export const saveDonationMethod = createServerFn({ method: "POST" })
  .validator((data: { method: any }) => data)
  .handler(async ({ data }) => {
    const methods = memoryStore.donationMethods;
    const existingIndex = methods.findIndex((m: any) => m.id === data.method.id);
    
    if (data.method.id && existingIndex >= 0) {
      methods[existingIndex] = data.method;
    } else {
      data.method.id = `donation-${Date.now()}`;
      methods.push(data.method);
    }
    
    return { success: true };
  });

export const cloneDonationMethod = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const methods = memoryStore.donationMethods;
    const method = methods.find((m: any) => m.id === data.id);
    
    if (!method) throw new Error("Donation method not found");
    
    const cloned = {
      ...method,
      id: `donation-${Date.now()}`,
      name_en: `${method.name_en} (Copy)`,
      name_es: `${method.name_es} (Copia)`,
    };
    
    methods.push(cloned);
    return { success: true, method: cloned };
  });

export const deleteDropoff = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    memoryStore.dropoffs = memoryStore.dropoffs.filter((d: any) => d.id !== data.id);
    return { success: true };
  });

export const deleteVolunteerNeed = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    memoryStore.volunteerNeeds = memoryStore.volunteerNeeds.filter((n: any) => n.id !== data.id);
    return { success: true };
  });

export const deleteDonationMethod = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    memoryStore.donationMethods = memoryStore.donationMethods.filter((m: any) => m.id !== data.id);
    return { success: true };
  });

export const saveContentBlock = createServerFn({ method: "POST" })
  .validator((data: { block: any }) => data)
  .handler(async ({ data }) => {
    const blocks = memoryStore.contentBlocks;
    const key = data.block.key;
    
    if (blocks[key]) {
      blocks[key] = { ...blocks[key], ...data.block };
    } else {
      blocks[key] = data.block;
    }
    
    return { success: true };
  });

export const deleteContentBlock = createServerFn({ method: "POST" })
  .validator((data: { key: string }) => data)
  .handler(async ({ data }) => {
    delete memoryStore.contentBlocks[data.key];
    return { success: true };
  });

export const reorderItems = createServerFn({ method: "POST" })
  .validator((data: { type: string; items: any[] }) => data)
  .handler(async ({ data }) => {
    (memoryStore as any)[data.type] = data.items;
    return { success: true };
  });