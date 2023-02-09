<template>
    <section>
        <PageHero v-if="section._type=='pageHero'" :sections="section"/>
        <PageSectionCardAndText v-else-if="section._type == 'cardandtext'" :sections="section"/>
        <PageSectionCardPoint v-else-if="section._type=='cardPoint'" :sections="section"/>
        <PageSectionCardHeroSplit v-else-if="section._type == 'cardHeroSplit'" :sections="section"/>
        <PageSectionCardStack v-else-if="section._type=='cardStack'" :sections="section"/>
        <PageSectionIcons v-else-if="section._type=='icons'" :sections="section"/>
        <PageSectionFormatedText v-else-if="section._type=='formatedText'" :sections="section"/>
        <PageSectionTabButton v-else-if="section._type=='tabButton'" :sections="section"/>
        <PageSectionTabContainer v-else-if="section._type=='sectionArray'" :sections="section"/>
        <PageSectionWhereNextCard v-else-if="section._type=='whereNextCard'" :sections="section"/>
        <h1 v-else>{{ section._type }}</h1>
    </section>
</template>

<script setup>

const props = defineProps({
    section:Object
})
</script>