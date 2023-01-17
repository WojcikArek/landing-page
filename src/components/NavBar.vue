<script>
import { RouterView, RouterLink } from 'vue-router';
</script>
<template>
<div>
    <h1>Nav here!</h1>
    <nav>
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/project">Our Projects</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
    </nav>
</div>
</template>