<template>
    <main>
        <TIntro />
        <Maintenance v-if="maintenanceMode" />
        <TServices v-if="!maintenanceMode" />
        <TAbout v-if="!maintenanceMode" />
        <TWork v-if="!maintenanceMode" />
    </main>
</template>

<script setup lang="ts">
    import TIntro from "@components/sections/TIntro.vue";
    import TServices from "@components/sections/TServices.vue";
    import TAbout from "@components/sections/TAbout.vue";
    import TWork from "@components/sections/TWork.vue";
    import Maintenance from "@/components/sections/Maintenance.vue";
    
    import { useGeneralStore } from "@/stores/generalStore";
    import { onMounted } from "vue";

    let maintenanceMode = true;
    onMounted(() => {
        const store = useGeneralStore()
        const { mode, maintenance } = store.config
        maintenanceMode = (mode === 'prod' && maintenance)
    })
</script>