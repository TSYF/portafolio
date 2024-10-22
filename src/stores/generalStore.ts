import { defineStore } from "pinia";

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../../../back-end/src'
import type { Project } from "../../../back-end/src/entities/Project";
import type { SkillViewText } from "./interfaces/project";
import type { Skill } from "../../../back-end/src/entities/Skill";
import { computed, reactive } from "vue";
import type { z } from "zod";
import configuration from "../../../back-end/src/parsers/configuration";

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

    type Config = z.infer<typeof configuration>
    let configs: Config = reactive(configuration.safeParse({}).data!)
    const config = computed(() => configs)
    const skills: Record<typeof Skill.prototype.slug, Skill> = reactive({})
    const projects: Record <number, Project[]> = reactive({})
    const texts: Record<number, SkillViewText> = reactive({})

    const getSRC = (name: string) => new URL(`../assets/img/${name}`, import.meta.url).toString();
    const navToggle = () => document.body.classList.toggle("nav-open");

    trpc.readSiteConfig.query()
        .then(conf => conf ?? {})
        .then(conf => configs = conf)
        .catch(err => {
            console.warn("Error fetching site state");
            console.error(err);
        })
        
    trpc.readSkillsWithProjects.query()
        .then(sks => sks ?? [])
        .then(fetchedSkills => {
            fetchedSkills.forEach(skill => {
                    const { id, projects: p, subtitle, description } = skill;
                    projects[id!] = [...p ?? []]
                    texts[id!] = {
                        subtitle,
                        description
                    }
                    delete skill.projects
                    skills[skill.slug] = skill
                })
        }).catch(err => {
            console.warn("Error fetching skills with projects");
            console.error(err);
        })
    
    return {
        config,
        skills,
        projects,
        texts,
        getSRC,
        navToggle
    }
});
