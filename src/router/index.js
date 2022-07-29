import Login from "@/views/Login";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import backView from "@/views/backView";
import ShouYe from "@/views/shouYe";
import yongHuGuanli from "@/views/yongHuGuanli";
import role from "@/views/role";
import detp from "@/views/detp";

const routes=[
    {
        path:'/',
        name:"Login",
        component:Login,
    },
    {
        path: "/backView",
        name: "backView",
        component: backView,

        children: [
            {
                path: 'shouYe',
                name: 'shouYe',
                // meta: {
                //     name: '首页 /'
                // },
                component: ShouYe,
            },
            {
                path: 'sys/user',
                name: 'user',
                meta: {
                    name: '  /  系统管理  /  用户管理'
                },
                component: yongHuGuanli,
            },
            {
                path: 'sys/role',
                name: 'role',
                meta: {
                    name: '  /  系统管理  /  角色管理'
                },
                component: role,
            },
            {
                path: 'sys/dept',
                name: 'dept',
                meta: {
                    name: '  /  系统管理  /  机构管理'
                },
                component: detp,
            },
        ]
    },

]

const router = createRouter({
        history: createWebHistory(),
        routes
    }
)
export {router}