export type Project = {
    id: number;
    title: string;
    url: string | null;
    description: string;
    technologies: string[];
    state: "End" | "In progress";
    link?: string;
};