<template>
  <div class="tab-buttons">
    <h1>{{ sections.Heading }}</h1>
    <div class="content">
      <SanityContent :blocks="sections.Description" />
    </div>
    <div class="tab-button">
      <button :class="tab == sections.buttons.button1.url ? 'active' : ' '"
        @click="tabNavigation(sections.buttons.button1.url)">{{ sections.buttons.button1.linkText }}</button>
      <button :class="tab == sections.buttons.button2.url ? 'active' : ' '"
        @click="tabNavigation(sections.buttons.button2.url)">{{ sections.buttons.button2.linkText }}</button>
      <button :class="tab == sections.buttons.button3.url ? 'active' : ' '"
        @click="tabNavigation(sections.buttons.button3.url)">{{ sections.buttons.button3.linkText }}</button>
      <button :class="tab == sections.buttons.button4.url ? 'active' : ' '"
        @click="tabNavigation(sections.buttons.button4.url)">{{ sections.buttons.button4.linkText }}</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sections: Object,
});
const tab = tabName()

const tabNavigation = (e) => {
  tab.value = e

}

</script>
<style>
.active{
  border-bottom: 1px solid white;
}
</style>