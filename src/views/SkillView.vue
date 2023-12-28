<template>
    <main>
        <TIntro :image="`${slug}.png`">
            <template #title>
                {{ slug.toUpperCase() }}
            </template>
            {{ texts[slug].subtitle }}
        </TIntro>
        <section class="highlights">
            <h2 class="section__title section__title--highlights">
                Highlights
            </h2>
            <p class="section__subtitle section__subtitle--highlights">
                What I'm proud of!
            </p>
            <TProjects :projects="projects[slug]" />
        </section>
    </main>
</template>

<script setup lang="ts">
import TIntro from "@components/sections/TIntro.vue";
import TProjects from "@components/sections/TProjects.vue";
import { useGeneralStore } from "@stores/generalStore";

const { slug } = defineProps<{ slug: string }>();

const { projects, texts } = useGeneralStore();
</script>
