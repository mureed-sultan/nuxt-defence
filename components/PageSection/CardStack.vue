<template>
  <div class="card-stack" :class="sections.theme">
    <div class="title">
      <h1><span>{{ sections.Heading }}</span></h1>
      <p>{{ sections.Description }}</p>
    </div>
    <Carousel :breakpoints="breakpoint" :wrapAround = true>
      <Slide v-for="items in sections.iconCardsSection" :key="items">
        <GlobalContentCard :card="items" />
      </Slide>
      <template #addons="{slideWidth}">
      <Navigation />
    </template>
    </Carousel>
    <!-- {{ sections.iconCardsSection[0] }} -->
  </div>
</template>

<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
const props = defineProps({
  sections: Object,
});
let itemNo= Object.keys(props.sections.iconCardsSection).length;
let itemtoShow = itemNo>=4 ? 4 : itemNo
const breakpoint={
  700: {
        itemsToShow: 3,
        snapAlign: 'center',
      },  1024: {
        itemsToShow: itemtoShow,
        snapAlign: 'center',
      },
}
</script>

<style lang="scss" scoped></style>
