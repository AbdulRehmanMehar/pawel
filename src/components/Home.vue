<template>
    <div class="container">
        <h3>Welcome Pawel!</h3>
        <p>Here are the links to screens.</p>

        <ul>
            <li>
                <router-link :to="{name: 'login'}">Login</router-link>
            </li>
            <li>
                <b>Employee Routes</b>
            </li>
            <li>
                <router-link :to="{name: 'employee-create-ticket'}">Create Ticket</router-link>
            </li>
            <li>
                <router-link :to="{name: 'employee-ticket-details'}">Ticket Details</router-link>
            </li>
            <li>
                <b>Investigator Routes</b>
            </li>
            <li>
                <router-link :to="{name: 'investigator-dashboard'}">Dashboard</router-link>
            </li>
            <li>
                <router-link :to="{name: 'investigator-ticket-details'}">Ticket Details</router-link>
            </li>
            <li>
                <router-link :to="{name: 'investigator-edit-profile'}">Edit Profile</router-link>
            </li>
            <li>
                <b>Admin Routes</b>
            </li>
            <li>
                <router-link :to="{name: 'admin-dashboard'}">Dashboard</router-link>
            </li>
            <li>
                <router-link :to="{name: 'admin-statistics'}">Statistics</router-link>
            </li>
            <li>
                <router-link :to="{name: 'admin-archive'}">Archive</router-link>
            </li>
            <li>
                <router-link :to="{name: 'admin-investigators'}">Investigators</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>
