<template>
    <div class="footer">
        <figure>
            <SanityImage :asset-id="footer.footerLogo.logo.asset._ref" auto="format">
                <template #default="{ src }">
                    <nuxt-link to="/">
                        <img :src="src" />
                    </nuxt-link>
                </template>
            </SanityImage>
        </figure>
        <div class="footer-list">
            <ul>
                <li v-for="items in footer.footerPages">
                    <a :href="items.pageid" target="_blank">{{ items.pageName }}</a>
                </li>
            </ul>
        </div>
        <div class="copyright">
            {{ footer.copyright }}
        </div>
    </div>
</template>

<script setup>
const query = groq`*[_type == "footer"] `;
const dataApi = await useSanityQuery(query);
let footer = dataApi.data.value[0].footer;
</script>

<style lang="scss" scoped>

</style>
