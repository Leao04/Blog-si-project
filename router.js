import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import('./pages/index.vue') },
    { path: '/Publicação', component: () => import('./pages/publications.vue') },
    { path: '/Publicar', component: () => import('./pages/publish.vue') }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
