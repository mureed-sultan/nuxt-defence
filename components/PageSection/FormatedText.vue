<template>
    <div class="formated-text" :class="sections.theme ? sections.theme:'default'">
        <h1>{{ sections.Heading }}</h1>
        <SanityContent :blocks="sections.content" :serializers="serializers"
 />
    </div>
</template>

<script setup>
import InlineImage from '../global/InlineImage.vue';
const props = defineProps({
    sections: Object
})
const serializers = {
    types:{
        image:InlineImage
    }
}
</script>
