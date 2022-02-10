import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router'


const app = createApp(App);

app.config.errorHandler=(err)=>{

}
app.component('',)
app.use(router).mount('#app')

