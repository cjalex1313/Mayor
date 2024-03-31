import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { inject } from '@vercel/analytics'

inject(process.env.NODE_ENV === 'development' ? 'development' : 'production')

const app = createApp(App)

app.use(router)

app.mount('#app')
