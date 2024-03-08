import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import BaiduMap from 'vue3-baidu-map-gl';

const app = createApp(App)
app.use(ElementPlus)
app.use(BaiduMap, {
    ak: 'voMP8EuTAM5gMjpN1qVHGn3sCfUGahEo',
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// app.use(router)

app.mount('#app')
