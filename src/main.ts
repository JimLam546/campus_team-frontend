import { createApp } from 'vue'
import App from './App.vue'
// 2. 引入组件样式
import 'vant/lib/index.css'
import Vant from 'vant'
import './assets/global.css'
import router from "./router";


const app = createApp(App)
// 3. 注册你需要的组件
app.use(Vant)
app.use(router)
app.mount('#app')



