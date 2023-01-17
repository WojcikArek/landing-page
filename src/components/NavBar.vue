
<template>
<div class="nav-bar">
    <div class="logo-type">
        <RouterLink to="/"><img src="../assets/img/logo-type-nobg.png" alt="logo-furniture"></RouterLink>
    </div>
    <nav class="main-nav">
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/project">Our Projects</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
    </nav>
</div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';
  
export default {
    name: 'App'
  }
</script>

<style lang="scss" scoped>
.nav-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em ;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    border-bottom: 1px solid black;
    .logo-type{

        img{

            margin: 2em;
            width: 9em;

        }
    }
    .main-nav{

       margin-right: 2em;

        ul{

            display: flex;
            justify-content: space-around;
            list-style: none;

            li{

                margin: 1em;

              a{

                color:#346083;
                text-decoration: none;

              }  
            }
        }
    }
}
</style>