import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import  layout from './components/layout.vue'
const app = createApp(App)



app.use(router).use(Antd).component('layout',layout).mount('#app')
