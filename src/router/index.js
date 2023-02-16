import {createRouter, createWebHistory} from 'vue-router'
import home from '@/components/home.vue'
import product from '@/components/product.vue'
import productlist from '@/components/product-list.vue'


const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/product/:id', name: 'product', component: product},
    {path: '/productlist', name: 'productlist', component: productlist}
    
] 

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router