<template>
    <main>
        <TIntro :image="`${slug}.png`">
            <template #title>
                {{  skill?.name.toUpperCase() }}
            </template>
            {{ texts[skill.id!].subtitle }}
        </TIntro>
        <section class="highlights">
            <h2 class="section__title section__title--highlights">
                Highlights
            </h2>
            <p class="section__subtitle section__subtitle--highlights">
                What I'm proud of!
            </p>
            <TProjects :projects="projects[skill.id!]" />
        </section>
    </main>
</template>

<script setup lang="ts">
import TIntro from "@components/sections/TIntro.vue";
import TProjects from "@components/sections/TProjects.vue";
import { useGeneralStore } from "@stores/generalStore";
import { computed } from "vue";

const { slug } = defineProps<{ slug: string }>();

const { projects, texts, skills } = useGeneralStore();
const skill = computed(() => skills[slug])
</script>
