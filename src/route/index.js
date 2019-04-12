import Vue from "vue";
import VueRouter from "vue-router";
// import Router from "vue-router";
// import login from "../components/login.vue"
// import welcome from "../components/welcome.vue";
Vue.use(VueRouter);
export default new VueRouter({
    base: __dirname,
    routes: [{
        path: "/",
        redirect: {
            // path: "/login"
            path: "/home"
        }
    },
    {
        name: "home",
        path: "/home",
        component: () => import('../components/home.vue')
    },
    {
        name: "register",
        path: "/register",
        component: () => import('../components/register.vue')

    },
    {
        name: "login",
        path: "/login",
        component: () => import('../components/login.vue')

    },
    {
        name: "welcome",
        path: "/welcome",
        component: () => import("../components/welcome.vue")
    },
    {
        name: "profile",
        path: "/profile",
        component: () => import('../components/profile.vue')
    },
    {
        name: "addexp",
        path: "/addexp",
        component: () => import('../components/addexp.vue')
    },
    {
        name: "getprofile",
        path: "/getprofile",
        component: () => import('../components/getprofile.vue')
    },
    {
        name: "new",
        path: "/new",
        component: () => import('../components/new.vue')
    }
    ],

})
// new Vue({
//     router,
//     render: h => h(App)

// }).$mount("#app");