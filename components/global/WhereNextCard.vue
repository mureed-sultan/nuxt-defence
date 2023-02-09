<template>
    <div class="where-next-card">
        <figure>
            <SanityImage :asset-id="card.image.asset._ref">
                <template #default="{ src }">
                    <img :src="src" alt="sections.bgimage.alt" />
                </template>
            </SanityImage>
        </figure>
        <div class="content">
            <h1>
                <span v-if="card.heading1" :class="card.heading1.headingTheme.toLowerCase()">{{
                    card.heading1.text
                }}</span>
                <span v-if="card.heading2" :class="card.heading2.headingTheme.toLowerCase()">{{
                    card.heading2.text
                }}</span>
                <span v-if="card.heading3" :class="card.heading3.headingTheme.toLowerCase()">{{
                    card.heading3.text
                }}</span>
            </h1>
        </div>
        <div class="details" v-if="card.description">
            <p>{{ card.description }}</p>
        </div>
        <div class="button">
            <button :href="card.button.btnlink">{{ card.button.buttonname }}</button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    card: Object,
});
</script>
