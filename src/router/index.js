import {createRouter, createWebHistory} from 'vue-router'
import home from '@/components/home.vue'
import product from '@/components/product.vue'
import productlist from '@/components/product-list.vue'
import basket from '@/components/basket.vue'


const routes = [
    {path: '/', name: 'home', component: home},
    {path: '/product/:id', name: 'product', component: product, props: true},
    {path: '/productlist', name: 'productlist', component: productlist},
    {path: '/basket', name: 'basket', component: basket, props: true}
    
] 

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router