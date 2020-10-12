import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from '@/page/Home.vue';

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', component: Home }
    ]
});

export default router