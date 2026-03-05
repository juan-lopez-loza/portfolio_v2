import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "Site Vitrine Infirmière",
        url: "https://juan-lopez-loza.github.io/nurse_website/",
        description: "Le tout premier site vitrine que j'ai réaliser, dans l'optique de présenter et mettre en avant une infirmière libérale.",
        technologies: ["HTML", "CSS"],
        state: "End"
    },
    {
        id: 2,
        title: "Alt-Tab MacOS",
        url: null,
        description: "Utilitaire système développé en Swift afin de reproduire le alt-tab window sur mac-os",
        technologies: ["Swift", "AppKit"],
        state: "In progress"
    },
    {
        id: 3,
        title: "To-do liste",
        url: null,
        description: "En binôme j'ai réliser une application web de to-do liste avec une gestion utilisateur et un système de partage de to-do liste.",
        technologies: ["React/Next.js", "Express.js", "Tailwind.css"],
        state: "End"
    },
    {
        id: 4,
        title: "Habitly",
        url: "https://juan-lopez-loza.github.io/Habitly/",
        description: "Application web de gestion d'habitudes avec une gestion utilisateur.",
        technologies: ["HTML", "CSS", "JS", "Supabase"],
        state: "In progress"
    }
];