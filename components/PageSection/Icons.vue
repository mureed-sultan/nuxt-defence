<template>
    <div class="icons">
        <h1>{{ sections.Heading }}</h1>
        <div class="icon">
            <figure v-for="image in sections.icons">
                <SanityImage :asset-id="image.asset._ref">
                    <template #default="{ src }">
                        <img :src="src" alt="card.image.alt" />
                    </template>
                </SanityImage>
            </figure>
        </div>
        <!-- {{ sections }} -->
    </div>
</template>

<script setup>
const props = defineProps({
    sections: Object,
});
</script>
