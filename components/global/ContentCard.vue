<template>
    <div class="content-card">
        <figure>
            <SanityImage :asset-id="card.iconImage.asset._ref">
                <template #default="{ src }">
                    <img :src="src" alt="alt" />
                </template>
            </SanityImage>
        </figure>
        <div class="content">
            <h5>
                <span v-if="card.heading.text" 
                :class="card.heading.headingTheme ? card.heading.headingTheme.toLowerCase():'nothing'">{{ card.heading.text }}</span>
                <span v-if="card.heading.texts" :class="card.heading.headingThemes.toLowerCase()">{{ card.heading.texts }}</span>
            </h5>
            <p v-if="card.content">{{ card.content[0].children[0].text }}</p>
        </div>
    </div>
    <!-- {{ card }} -->
</template>

<script setup>
const props = defineProps({
    card: Object
})
</script>
