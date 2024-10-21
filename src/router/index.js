import { createWebHashHistory, createRouter } from 'vue-router'
import routes from './route'
// console.log(routes)
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router