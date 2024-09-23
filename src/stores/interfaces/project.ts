export interface Project {
    // title, image, description, link, download
    title: string;
    image: string;
    description: string;
    link: string;
    download: boolean;
}

// export interface Portfolio { [key: string]: Project[] };

export interface SkillViewText { subtitle: string, description?: string };