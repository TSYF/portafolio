<template>
    <article class="projects">
        <a
            v-if="!!projects.length"
            class="projects__item"
            v-for="(
                { title, image, description, link, download }, i
            ) in projects"
            :key="`${i}-${title.toLowerCase().replace(' ', '_')}`"
            :href="link"
            target="_blank"
            :download="download"
        >
            <figure class="projects__figure">
                <img :src="getSRC(image)" :alt="title" class="projects__img" />
                <figcaption class="projects__caption">
                    <h3 class="projects__title">{{ title }}</h3>
                    <p class="projects__description">{{ description }}</p>
                </figcaption>
            </figure>
        </a>
        <h3 role="alert" v-else>
            Whoops! Not any projects yet. I'll add some soon though!
        </h3>
    </article>
</template>

<script setup lang="ts">
import { useGeneralStore } from "@stores/generalStore";
import { type Project } from '@stores/interfaces/project';

const { getSRC } = useGeneralStore();

const { projects } = defineProps<{ projects: Project[] }>();
</script>
