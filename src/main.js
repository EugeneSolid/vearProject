import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { store } from './store/store'
import '@flaticon/flaticon-uicons/css/all/all.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.scss'

window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'