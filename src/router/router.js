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