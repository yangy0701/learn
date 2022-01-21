
import  allRouter  from "./router/router";
import {createRouter,createWebHashHistory} from 'vue-router';
const router  = createRouter({
    history:createWebHashHistory(),
    routes:allRouter,
})
router.beforeEach((to,from)=>{

})
export default router;