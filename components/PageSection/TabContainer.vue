<template>
    <div v-for="tab in sections.sectionBuilder" class="tab-container">
        <PageSectionCardAndText v-if="tab.tagline == 'Adjacent Industries' && tabSection == 'Adjacent Industries'"
            :sections="tab.body[0]" />
        <PageSectionCardStack v-if="tab.tagline == 'What jobs can i do?' && tabSection == 'What jobs can i do?'"
            :sections="tab.body[0]" />
        <PageSectionCardPoint v-if="tab.tagline == 'What are the benefits?' && tabSection == 'What are the benefits?'"
            :sections="tab.body[0]" />
        <PageSectionFormatedText v-if="tab.tagline == 'Where can i work?' && tabSection == 'Where can i work?'"
            :sections="tab.body[0]" />
    </div>
</template>

<script setup>
const props = defineProps({
    sections: Object
})
const tabSection = tabName()
// setInterval(() => {
//     console.log(tabSection.value)
// }, 1000);
</script>
