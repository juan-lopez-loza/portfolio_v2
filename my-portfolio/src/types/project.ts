export type Project = {
    id: number;
    title: string;
    url: string | null;
    githubUrl: string;
    description: string;
    technologies: string[];
    state: "End" | "In progress";
};