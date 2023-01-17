<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from './components/NavBar.vue';
import FormValid from "./components/FormValid.vue";
import Footer from "./components/Footer.vue"
</script>

<template>
 <NavBar/>
 <RouterView/>
 <FormValid/>
 <Footer/>
</template>

<style scoped>

</style>
