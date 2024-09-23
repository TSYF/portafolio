import { defineStore } from "pinia";

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../../../back-end/src'
import type { Project } from "../../../back-end/src/entities/Project";
import type { SkillViewText } from "./interfaces/project";
import type { Skill } from "../../../back-end/src/entities/Skill";
import { reactive } from "vue";

export const useGeneralStore = defineStore("general", () => {
    const { VITE_BACKEND_LOCATION } = import.meta.env

    console.log(VITE_BACKEND_LOCATION);
    const trpc = createTRPCProxyClient<AppRouter>({
        links: [
            httpBatchLink({
                url: VITE_BACKEND_LOCATION!
            })
        ]
    })
    const skills: Record<typeof Skill.prototype.slug, Skill> = reactive({})
    const projects: Record <number, Project[]> = reactive({})
    const texts: Record<number, SkillViewText> = reactive({})

    const getSRC = (name: string) => {
        return (new URL(`../assets/img/${name}`, import.meta.url)).toString();
    }
    const navToggle = () => document.body.classList.toggle("nav-open");

    (async () => {
        let fetchedSkills
        try {
            fetchedSkills = await trpc.readSkillsWithProjects.query() ?? []
            fetchedSkills?.forEach(skill => {
                    const { id, projects: p, subtitle, description } = skill;
                    projects[id!] = [...p ?? []]
                    texts[id!] = {
                        subtitle,
                        description
                    }
                    delete skill.projects
                    skills[skill.slug] = skill
                })
            
        } catch (err) {
            console.error(err);
        }
    })()
    
    
    return {
        skills,
        projects,
        texts,
        getSRC,
        navToggle
    }
});
