<template>
    <div class="primary-card">
        <figure>
            <SanityImage :asset-id="card.image.asset._ref">
                <template #default="{ src }">
                    <img :src="src" alt="card.image.alt" />
                </template>
            </SanityImage>
        </figure>
        <div class="heading">
            <h1 v-if="card.heading1" :class="card.heading1.headingTheme.toLowerCase()">{{ card.heading1.text }}</h1>
            <h1 v-if="card.heading2" :class="card.heading2.headingTheme.toLowerCase()">{{ card.heading2.text }}</h1>
            <h1 v-if="card.heading3 && Object.keys(card.heading3).length != 0" :class="card.heading3.headingTheme.toLowerCase()">{{ card.heading3.text }}</h1>
            <p>{{ card.description }}</p>
        </div>
    </div>
    <!-- {{ card.image }} -->
</template>

<script setup>
const props= defineProps({
    card:Object
})

</script>

<style lang="scss" scoped>

</style>