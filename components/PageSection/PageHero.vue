<template>
    <div class="page-hero">
        <div class="hero-image">
            <figure>
                <SanityImage :asset-id="sections.bgimage.asset._ref">
                    <template #default="{ src }">
                        <img :src="src" :alt="sections.bgimage.alt" />
                    </template>
                </SanityImage>
            </figure>
            <div class="content">

                <h1 class="heading">
                    <span v-if="sections.heading1" :class="sections.heading1.headingTheme.toLowerCase()">{{
                        sections.heading1.text
                    }}</span>
                    <span v-if="sections.heading2" :class="sections.heading2.headingTheme.toLowerCase()">{{
                        sections.heading2.text
                    }}</span>
                    <span v-if="sections.heading3 && Object.keys(sections.heading3).length != 0"
                        :class="sections.heading3.headingTheme.toLowerCase()">{{ sections.heading3.text }}</span>
                </h1>
                <article v-if="sections.content" class="description">
                    <!-- {{ sections.content }} -->
                    <SanityContent :blocks="sections.content"/>
                </article>
            </div>
        </div>
        <div class="hero-bottom" v-if="sections.details">
            <SanityContent :blocks="sections.details"/>
        </div>
    </div>
    <!-- <p v-if="sections.heading3 != {}"> -->

    <!-- </p> -->
</template>

<script setup>
const props = defineProps({
    sections: Object
})
</script>
