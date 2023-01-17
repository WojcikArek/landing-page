import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon,FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faInstagram, faTwitter,faLinkedinIn)

import "./assets/main.css";

const app = createApp(App);

createApp(App)
.use(createPinia())
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.component('font-awesome-layers', FontAwesomeLayers)
.component('font-awesome-layer-text', FontAwesomeLayersText)
.mount('#app')

