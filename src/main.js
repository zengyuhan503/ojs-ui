import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import "normalize.css"
import './style.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import router from './router';

import '@material-icons/font/css/all.css';



const app = createApp(App);
app.use(ArcoVueIcon);
app.use(ArcoVue);
app.use(router)
app.mount('#app');