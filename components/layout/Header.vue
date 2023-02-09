<template>
    <header>
        <!-- menu button  -->
        <button @click="toggle" :class="change?'change':' '" class="menu"></button>
        <!-- logo section  -->
        <div class="logo">
            <SanityImage :asset-id="nav.navigation.Banner.logo.asset._ref" auto="format">
                <template #default="{ src }">
                    <nuxt-link to="/">
                        <img :src="src" />
                    </nuxt-link>
                </template>
            </SanityImage>
        </div>
        <!-- menu section  -->
        <nav :class="menu?'active':' '">
            <ul>
                <li v-for="(item, index) in nav.navigation.pagelist" :key="index"><nuxt-link @click="menu = false" :to="item.pageid">{{item.pageName}}</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const query = groq`*[_type == "navigation"] `;
const dataApi = await useSanityQuery(query)
let nav = dataApi.data.value[0]
let change = ref(false)
let menu= ref(false)
const toggle = ()=>{
    change.value = !change.value
    menu.value = !menu.value
}
</script>