import { defineStore } from "pinia";
import type { Project, ProjectText } from "@stores/interfaces/project";
import type { Portfolio } from '@stores/interfaces/project';

export const useGeneralStore = defineStore("general", {
    state: () => ({
        slugs: {
            vue: "vue",
            basicFrontEnd: "html-css-js",
            python: "python",
            java: "java",
        },
        projects: <Portfolio> {
            vue: [
                {
                    title: "Cursos Alfaweb",
                    image: "projects/cursos-alfaweb_project.png",
                    description: "Vue + Firebase online course app",
                    link: "https://vue-fb-desafio-latam.web.app",
                    download: false,
                },
                {
                    title: "E-Library",
                    image: "projects/e-library_project.png",
                    description: "Vue + Firebase online library app",
                    link: "https://vuefire-vite.web.app",
                    download: false,
                },
            ],
            "html-css-js": [
                /* {
                        title: "Suricata",
                        image: "notyet",
                        description: "Bootstrap 5 restaurant themed website",
                        link: "#",
                        download: false,
                    }, */
            ],
            python: [
                /* {
                        title: "Table renamer",
                        image: "notyet",
                        description: "Table renamer for Oracle SQL Developer",
                        link: "#",
                        download: true,
                    }, */
            ],
            java: [],
        },
        texts: <{ [key: string]: ProjectText }>{
            vue: {
                subtitle: "Front End!",
            },
            "html-css-js": {
                subtitle: "The main pillars!",
            },
            python: {
                subtitle: "King of data!",
            },
            java: {
                subtitle: "Mine and craft!",
            },
        },
    }),
    actions: {
        getSRC(name: string): string {
            return (new URL(`../assets/img/${name}`, import.meta.url)).toString();
        },
        navToggle(): void {
            document.body.classList.toggle("nav-open");
        },
    },
    getters: {},
});
