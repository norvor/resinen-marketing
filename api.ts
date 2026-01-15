// src/api.ts

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8001';

// --- TYPES ---
export type HomePageData = {
    hero_title: string;
    hero_subtitle: string;
    hero_cta_primary: string;
    hero_cta_secondary: string;
    ticker_items: { label: string, value: string }[];
};

export type SiteConfig = {
    brand_name: string;
    navigation: { label: string; path: string }[];
    social_links: { linkedin?: string; x?: string; github?: string };
    footer_text: string;
};

export type BlogPost = {
    slug: string;
    title: string;
    summary: string;
    category: string;
    created_at: string;
    published: boolean;
};

// --- RICH ENGINE TYPES ---
export type EngineModule = {
    title: string;
    problem: string;
    solution: string;
    detail: string;
};

export type ComparisonRow = {
    feature: string;
    standard: string;
    resinen: string;
};

export type Engine = {
    id: string;
    name: string;
    category: string;
    description: string;
    bottomLine: string;
    hero: {
        title: string;
        subtitle: string;
        solution: string;
    };
    modules: EngineModule[];
    comparison: {
        intro: string;
        analogy: string;
        rows: ComparisonRow[];
    };
};

// --- THE FETCHER OBJECT ---
export const api = {
    // 1. Get Homepage Data
    getHomePage: async (): Promise<HomePageData> => {
        const res = await fetch(`${API_URL}/homepage`);
        if (!res.ok) throw new Error('Failed to fetch home');
        return res.json();
    },

    // 2. Get All Engines (List for Grid)
    getEngines: async (): Promise<Engine[]> => {
        const res = await fetch(`${API_URL}/engines`);
        return res.json();
    },

    // 3. Get Single Engine (Detail Page) <--- THIS WAS MISSING
    getEngine: async (id: string): Promise<Engine> => {
        const res = await fetch(`${API_URL}/engines/${id}`);
        if (!res.ok) throw new Error('Engine not found');
        return res.json();
    },

    // 4. Get Blog Posts
    getPosts: async (): Promise<BlogPost[]> => {
        const res = await fetch(`${API_URL}/posts`);
        return res.json();
    },

    getConfig: async (): Promise<SiteConfig> => {
        const res = await fetch(`${API_URL}/config`);
        if (!res.ok) throw new Error('Failed to load config');
        return res.json();
    }


};