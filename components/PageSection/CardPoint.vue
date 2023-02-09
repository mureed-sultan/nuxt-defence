<template>
  <div class="card-point" :class="sections.theme">
    <h1>{{ sections.Heading }}</h1>
    <Carousel :breakpoints="breakpoint" :wrapAround = true>
      <Slide v-for="items in sections.iconCardsSection" :key="items">
        <GlobalContentCard :card="items" />
      </Slide>
      <template #addons="{ slideWidth }">
        <Navigation />
      </template>
    </Carousel>
    <!-- {{ sections.iconCardsSection[0] }} -->
  </div>
</template>
<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
const props = defineProps({
  sections: Object,
});
let itemNo= Object.keys(props.sections.iconCardsSection).length;
let itemtoShow = itemNo>=4 ? 4 : itemNo
const breakpoint = {
  700: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: itemtoShow,
    snapAlign: "center",
  },
};
</script>
