<template>
    <section class="work" id="work">
        <header>
            <h2 class="section__title section__title--work">My Work</h2>
            <p class="section__subtitle section__subtitle--work">
                A selection of my range of work
            </p>
        </header>
        <div class="portfolio">
            <router-link
                v-for="(skill, i) in Object.values(skills)" :key="`${skill.id}-${i}`"
                
                :to="{
                    name: 'skill',
                    params: { slug: skill.slug },
                }"
                class="portfolio__item"
            >
                <TCard
                    class="portfolio__card"
                    :header="skill.name"
                    bg-color="--color-light-tr"
                    padding="1em"
                    bd-radius="1em"
                >
                    <template #img>
                        <img
                            class="card__img"
                            :src="getSRC(`${skill.slug}.png`)"
                            :alt="skill.name"
                        />
                    </template>

                    {{  skill.description  }}
                </TCard>
            </router-link>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useGeneralStore } from "@stores/generalStore";
import TCard from "@components/TCard.vue";

const { getSRC, skills } = useGeneralStore()
</script>
