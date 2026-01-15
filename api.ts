// src/api.ts
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8001';

// --- TYPES (Matching your Python Models) ---
export type HomePageData = {
    hero_title: string;
    hero_subtitle: string;
    hero_cta_primary: string;
    hero_cta_secondary: string;
    ticker_items: { label: string, value: string }[];
};

export type BlogPost = {
    slug: string;
    title: string;
    summary: string;
    category: string;
    created_at: string;
    published: boolean;
};

export type Engine = {
    id: string;
    name: string;
    description: string;
    modules: { title: string }[];
};

// --- THE FETCHERS ---
export const api = {
    // 1. Get Homepage Data
    getHomePage: async (): Promise<HomePageData> => {
        try {
            const res = await fetch(`${API_URL}/homepage`);
            if (!res.ok) throw new Error('Failed to fetch home');
            return res.json();
        } catch (e) {
            console.error(e);
            // Fallback to prevent crash if backend is empty
            return {
                hero_title: "System Offline",
                hero_subtitle: "Could not connect to Resinen Core.",
                hero_cta_primary: "Retry",
                hero_cta_secondary: "Contact",
                ticker_items: []
            };
        }
    },

    // 2. Get Engines
    getEngines: async (): Promise<Engine[]> => {
        const res = await fetch(`${API_URL}/engines`);
        return res.json();
    },

    // 3. Get Blog Posts (Insights)
    getPosts: async (): Promise<BlogPost[]> => {
        const res = await fetch(`${API_URL}/posts`);
        return res.json();
    }
};