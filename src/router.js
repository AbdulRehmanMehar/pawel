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
                {
                    path: 'admin-statistics',
                    name: 'admin-statistics',
                    component: () => import('./components/admin/Statistics.vue')
                },
                {
                    path: 'admin-archive',
                    name: 'admin-archive',
                    component: () => import('./components/admin/Archive.vue')
                },
                {
                    path: 'admin-investigators',
                    name: 'admin-investigators',
                    component: () => import('./components/admin/Investigators.vue')
                },
                {
                    path: 'admin-investigator-details',
                    name: 'admin-investigator-details',
                    component: () => import('./components/admin/InvestigatorDetails.vue')
                },
                
            ]
        },

        //help
        {
            path: '/help',
            name: 'help',
            component: () => import('./components/Help.vue')
        }
    ]
})