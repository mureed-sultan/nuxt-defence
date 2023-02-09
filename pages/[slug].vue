<template>
  <main>
    <PageComponent v-for="(item, index) in sections" :key="index" :section="item" />
  </main>
</template>

<script setup>
const route = useRoute()
const query = groq`*[_type == "pages" && tagline == '${route.params.slug}'] `;
const dataApi = await useSanityQuery(query)
let sections = dataApi.data.value[0].body
// (section)
useHead({
  title:`Defence Industry | ${route.params.slug}`
})
</script>
