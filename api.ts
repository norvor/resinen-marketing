// src/api.ts

// 1. Point to your local backend port (8000)
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api/v1';

export type ContentBlock = {
    slug: string;
    section: string;
    title: string;
    body: string;
    image_url?: string;
    link_text?: string;
    link_url?: string;
    is_active: boolean;
};

export type SiteConfig = {
    brand_name: string;
    footer_text: string;
    navigation: { label: string; path: string }[];
    social_links: { linkedin?: string; x?: string; github?: string };
};

export const api = {
    // 1. Get a specific block (e.g. 'home_hero')
    getContentBlock: async (slug: string): Promise<ContentBlock | null> => {
        try {
            const res = await fetch(`${API_URL}/content/${slug}`);
            if (!res.ok) return null;
            return res.json();
        } catch (e) {
            console.error(`Error fetching block ${slug}:`, e);
            return null;
        }
    },

    // 2. Get all blocks for a section (e.g. 'home_features')
    getSectionBlocks: async (section: string): Promise<ContentBlock[]> => {
        try {
            const res = await fetch(`${API_URL}/content/section/${section}`);
            if (!res.ok) return [];
            return res.json();
        } catch (e) {
            console.error(`Error fetching section ${section}:`, e);
            return [];
        }
    },

    // 3. Get Site Config (Footer, Socials)
    getConfig: async (): Promise<SiteConfig> => {
        try {
            const res = await fetch(`${API_URL}/config`);
            if (!res.ok) return {
                brand_name: "RESINEN",
                footer_text: "System Nominal",
                navigation: [],
                social_links: {}
            };
            return res.json();
        } catch (e) {
            return {
                brand_name: "RESINEN",
                footer_text: "System Nominal",
                navigation: [],
                social_links: {}
            };
        }
    }
};