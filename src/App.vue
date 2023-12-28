<template>
    <THeader />
    <router-view></router-view>
    <TFooter />
</template>

<script setup lang="ts">
    import THeader from "@components/THeader.vue";
    import TFooter from "@components/sections/TFooter.vue";
</script>
