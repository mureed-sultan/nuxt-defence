<template>
    <div class="card-hero-split">
        <GlobalPrimaryCard :card="sections.card1"/>
        <GlobalPrimaryCard :card="sections.card2"/>
    </div>
</template>

<script setup>
const props = defineProps({
    sections:Object
})
</script>

<style lang="scss" scoped>

</style>