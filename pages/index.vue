<template>
  <main>
    <PageComponent v-for="(item, index) in sections" :key="index" :section="item" />
  </main>
</template>

<script setup>
const query = groq`*[_type == "pages" && tagline == 'home'] `;
const dataApi = await useSanityQuery(query)
let sections = dataApi.data.value[0].body
// (section)
useHead({
  title:"Defence Industry | Home"
})
</script>
