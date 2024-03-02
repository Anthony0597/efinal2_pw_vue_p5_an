import { createRouter, createWebHashHistory } from "vue-router"


import NoFoundPage from '@/pages/NoFoundPage'

const routes = [
    {
        path:'/generar',
        component:()=>import('@/pages/TokenGenerar')
    },
    {
        path:'/guardar',
        component:()=>import('@/pages/EstudianteGuardar')
    },
    {
        path:'/:pathMatch(.*)*',
        component:NoFoundPage
    },

]

const router = createRouter({history: createWebHashHistory(), routes})

export default router