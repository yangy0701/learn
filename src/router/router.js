
// vue3版本必须加后缀名
import login from '/src/view/login.vue'
const allRouter = [
    {
        path: '/',
        redirect:'/login',
        component: login
    },
    {
        path: '/login',
        component: login,
        name:'login'
    }
]
export default allRouter;