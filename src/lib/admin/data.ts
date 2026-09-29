import { createServerFn } from "@tanstack/react-start";
import type { PageRow, DropoffRow, VolunteerNeedRow, DonationMethodRow, ContentBlock } from "./content";

type DataType = "blocks" | "pages" | "dropoffs" | "volunteer" | "donations";

interface AdminDataMap {
  blocks: Array<{ key: string; en: string; es: string }>;
  pages: Array<{
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
  }>;
  dropoffs: Array<{
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
  }>;
  volunteer: Array<{
    id: string;
    title_en: string;
    title_es: string;
    desc_en: string;
    desc_es: string;
    image?: string;
    sort_order: number;
    visible: boolean;
  }>;
  donations: Array<{
    id: string;
    name_en: string;
    name_es: string;
    details_en: string;
    details_es: string;
    link: string;
    image?: string;
    sort_order: number;
    visible: boolean;
  }>;
}

const DATA_FILE_PATH = "data/admin-data.json";

async function readData(): Promise<AdminDataMap> {
  try {
    const fs = await import("fs/promises");
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return getDefaultData();
  }
}

async function writeData(data: AdminDataMap): Promise<void> {
  const fs = await import("fs/promises");
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2));
}

function getDefaultData(): AdminDataMap {
  return {
    blocks: [],
    pages: [],
    dropoffs: [],
    volunteer: [],
    donations: [],
  };
}

export const getData = createServerFn({ method: "POST" })
  .validator((data: { type: string }) => data)
  .handler(async ({ data }) => {
    const dataMap = await readData();
    return dataMap[data.type as keyof AdminDataMap] || [];
  });

export const saveItem = createServerFn({ method: "POST" })
  .validator((data: { type: string; item: any }) => data)
  .handler(async ({ data }) => {
    const dataMap = await readData();
    const key = data.type as keyof AdminDataMap;
    const items = dataMap[key] || [];
    
    const existingIndex = items.findIndex((item: any) => 
      item.id === data.item.id || item.key === data.item.key
    );
    
    if (existingIndex >= 0) {
      items[existingIndex] = data.item;
    } else {
      items.push(data.item);
    }
    
    dataMap[key] = items;
    await writeData(dataMap);
    return { success: true };
  });

export const deleteItem = createServerFn({ method: "POST" })
  .validator((data: { type: string; id: string }) => data)
  .handler(async ({ data }) => {
    const dataMap = await readData();
    const key = data.type as keyof AdminDataMap;
    const items = dataMap[key] || [];
    
    const filtered = items.filter((item: any) => 
      item.id !== data.id && item.key !== data.id
    );
    
    dataMap[key] = filtered;
    await writeData(dataMap);
    return { success: true };
  });

export const cloneItem = createServerFn({ method: "POST" })
  .validator((data: { type: string; id: string }) => data)
  .handler(async ({ data }) => {
    const dataMap = await readData();
    const key = data.type as keyof AdminDataMap;
    const items = dataMap[key] || [];
    
    const item = items.find((item: any) => 
      item.id === data.id || item.key === data.id
    );
    
    if (!item) {
      throw new Error("Item not found");
    }
    
    const cloned = { 
      ...item, 
      id: `${item.id || item.key}-copy-${Date.now()}`,
      slug: item.slug ? `${item.slug}-copy` : undefined,
      key: item.key ? `${item.key}-copy-${Date.now()}` : undefined,
    };
    
    const itemsWithClone = [...(dataMap[key] || []), cloned];
    dataMap[key] = itemsWithClone;
    await writeData(dataMap);
    
    return { success: true, item: cloned };
  };

export const reorderItems = createServerFn({ method: "POST" })
  .validator((data: { type: string; items: any[] }) => data)
  .handler(async ({ data }) => {
    const dataMap = await readData();
    const key = data.type as keyof AdminDataMap;
    dataMap[key] = data.items;
    await writeData(dataMap);
    return { success: true };
  });