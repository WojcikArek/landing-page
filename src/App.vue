<script setup>

import {RouterLink, RouterView } from "vue-router";
import NavBar from './components/NavBar.vue';
import FooterHome from "./components/FooterHome.vue"

</script>

<template>
 <NavBar/>
 <RouterView/>
 <FooterHome/>
</template>