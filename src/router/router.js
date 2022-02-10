
// vue3版本必须加后缀名
import login from '/@/view/login.vue'
import Index from '/@/view/index.vue'
import config from '/@/view/introduce/config.vue'
import observe from '/@/view/demo/observe.vue'
const allRouter = [
    {
        path: '/',
        redirect:'/index',
        component: Index
    },
    {
        path: '/login',
        component: login,
        name:'login'
    },
    {
        path: '/index',
        component: Index,
        name:'index'
    },
    {
        path: '/config',
        component: config,
        name:'config'
    },
    {
        path: '/observe',
        component: observe,
        name:'observe'
    }
]
export default allRouter;