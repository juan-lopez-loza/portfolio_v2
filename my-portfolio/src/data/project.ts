import { Project } from "@/types/project";

export const projects = {
    project: [
        {
            id: 1,
            title: "Nurse Website",
            url: "https://www.lydgie-cottard.fr",
            githubUrl: "https://github.com/juan-lopez-loza/nurse_website",
            description: "Le tout premier site vitrine que j'ai réaliser, dans l'optique de présenter et mettre en avant une infirmière libérale.",
            technologies: ["HTML", "CSS"],
            state: "End"
        },
        {
            id: 2,
            title: "Habitly",
            url: "https://juan-lopez-loza.github.io/Habitly/",
            githubUrl: "https://juan-lopez-loza.github.io/Habitly/",
            description: "Application web de gestion d'habitudes avec une gestion utilisateur.",
            technologies: ["HTML", "CSS", "JS", "Supabase"],
            state: "In progress"
        },
        {
            id: 3,
            title: "Petzl Ai Chatbot",
            url: null,
            githubUrl: "https://github.com/juan-lopez-loza/Eliza_Epitech",
            description: "En binôme, nous avons réalisé un chatbot expert en excalade disponible sur discord et slack mais aussi sur une landig page.",
            technologies: ["Python", "JS", "React", "Tailwind.css", "LM Studio"],
            state: "End"
        },
        {
            id: 4,
            title: "Alt-Tab MacOS",
            url: null,
            githubUrl: "https://github.com/juan-lopez-loza/alt_tab",
            description: "Utilitaire système développé en Swift afin de reproduire le alt-tab window sur mac-os",
            technologies: ["Swift", "AppKit"],
            state: "In progress"
        },
        {
            id: 5,
            title: "To-do liste",
            url: null,
            githubUrl: "https://github.com/juan-lopez-loza/E-todo-Epitech",
            description: "En binôme j'ai réliser une application web de to-do liste avec une gestion utilisateur et un système de partage de to-do liste.",
            technologies: ["React/Next.js", "Express.js", "Tailwind.css"],
            state: "End"
        }
    ]
}