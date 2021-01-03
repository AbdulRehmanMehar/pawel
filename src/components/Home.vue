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
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>
