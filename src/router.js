import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/Home.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./components/Login.vue')
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('./Authenticated.vue'),
            children: [
                // Employee Routes.....

                {
                    path: 'employee-create-ticket',
                    name: 'employee-create-ticket',
                    component: () => import('./components/employee/CreateTicket.vue')
                },
                {
                    path: 'employee-ticket-details',
                    name: 'employee-ticket-details',
                    component: () => import('./components/employee/TicketDetails.vue')
                },

                // Investigator Routes.....
                {
                    path: 'investigator-dashboard',
                    name: 'investigator-dashboard',
                    component: () => import('./components/investigator/Dashboard.vue')
                },
                {
                    path: 'investigator-ticket-details',
                    name: 'investigator-ticket-details',
                    component: () => import('./components/investigator/TicketDetails.vue')
                },
                {
                    path: 'investigator-edit-profile',
                    name: 'investigator-edit-profile',
                    component: () => import('./components/investigator/EditProfile.vue')
                },

                // Admin Routes.....
                {
                    path: 'admin-dashboard',
                    name: 'admin-dashboard',
                    component: () => import('./components/admin/Dashboard.vue')
                },
            ]
        }
    ]
})