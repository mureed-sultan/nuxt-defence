<template>
  <figure>
   <SanityImage :asset-id="asset._ref">
      <template #default="{ src }">
        <img :src="src" alt="sections.bgimage.alt" />
      </template>
    </SanityImage> 
  </figure>
</template>

<script setup>
const props = defineProps({
  asset: Object
})
</script>