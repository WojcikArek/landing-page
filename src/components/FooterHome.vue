<script>
    import { RouterLink,RouterView } from 'vue-router';
</script>

<template>
    <div class="footer-theme">
        <div class="footer-logo">
            <RouterLink to="/"><img src="../assets/img/logo-name-nobg.png" alt="company-name"></RouterLink>
        </div>
        <div class="company-info">
            <h4>Furniture Modern Design</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam magnam quos quia maxime explicabo! Aliquam doloribus 
                molestias, dolorem corporis enim quod ea ratione, deserunt, voluptates fuga eveniet quasi perferendis voluptas!</p>
        </div>
        <div class="footer-nav">
            <nav>
                <ul>
                    <li><RouterLink to="/project">Our Projects</RouterLink></li>
                    <li><RouterLink to="/about">About Us</RouterLink></li>
                    <li><RouterLink to="/contact">Contact</RouterLink></li>
                    <li><RouterLink to="/policy">Private Policy</RouterLink></li>
                    <li><RouterLink to="/cookies">Cookies</RouterLink></li>
                </ul>
            </nav>
        </div>
    </div>
    <div class="copy-info">
            <p>© 2023 Furniture Modern Design, All Rights Reserved</p>
            <p>Made with 💕 by Arek</p>
        </div>
</template>

<style lang="scss" scoped>
 .footer-theme{

    display: flex;
    justify-content: space-around;
    margin-top: 1em;
    border-top: 1px black solid;
    font-family: 'Montserrat', sans-serif;

    .footer-logo{

        align-self: center;

    }


    .company-info{

        align-self: center;
        width: 25em;
        color:#346083;

        h4{

            margin: 1em 0 1em 0;

        }
    }

    .footer-nav{

        align-self: center;

        nav{

            ul{
                list-style: none;
                li{
                    margin: 1em;
                    a{
                        color:#346083;
                        text-decoration: none;
                        font-weight: 500;
                    }
                   
                }
            }
        }
    }

 }
 .copy-info{

    display: flex;
    justify-content: space-between;
    margin-top: 2em ;
    border-top: 1px black solid;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8em;

    p{

        margin: 1em;

    }
 }
</style>