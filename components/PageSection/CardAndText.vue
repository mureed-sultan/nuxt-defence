<template>
  <div class="card-and-text" :class="sections.theme ? sections.theme : 'card-default'">
    <div class="card">
      <GlobalPrimaryCard :card="sections.card" />
    </div>
    <div class="description">
      <SanityContent :blocks="sections.content" :serializers="serializers" />
    </div>
  </div>
  <!-- {{ sections }} -->
</template>

<script setup>
import InlineImage from '../global/InlineImage.vue';
const props = defineProps({
  sections: Object,
});
const serializers = {
  types: {
    image: InlineImage
  }
}
onMounted(() => {
  const container = document.querySelector('.description');
  const imgs = container.querySelectorAll('figure');
  Array.from(imgs).forEach(e => {
    const card = document.createElement('div');
    card.classList.add('card');
    const p = e.nextSibling;
    card.appendChild(e)
    card.appendChild(p)
    container.appendChild(card)
  })
  // for (let i = 0; i < 3; i++) {
  //   container.removeChild(children[i])
  // }
})
</script>
