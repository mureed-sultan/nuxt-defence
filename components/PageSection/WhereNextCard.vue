<template>
    <div class="where-next-card-container" :class="sections.theme">
        <GlobalWhereNextCard v-for="card in sections.cards" :card="card" />
        <!-- {{ sections }} -->
    </div>
</template>

<script setup>
const props = defineProps({
    sections: Object
})

</script>

<style lang="scss" scoped>

</style>