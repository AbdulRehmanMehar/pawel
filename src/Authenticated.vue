<template>
    <div class="wrapper">

        <div class="sidebar">
            <img class="logo" :src="Logo" alt="Whistle Logo (White)" width="50">

            <div class="content">
                
                <div class="links">
                    <router-link :to="{name: 'employee-create-ticket'}">Create Ticket</router-link>
                    <router-link :to="{name: 'employee-help'}">Help</router-link>
                </div>

            </div>
        </div>


        <div class="inner">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Logo from './assets/logo/whistle-logo-white.png'
export default {
    name: 'Authenticated',
    data() {
        return {
            Logo: Logo
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden !important;
    background-color: #2176D4;
    position: relative;
}

.wrapper .sidebar {
    margin: 10px;
    margin-left: 15px;
    margin-right: 0px;
    width: calc(200px - 20px + 10px - 15px); /** ignore the margin for right side */
    height: calc(100vh);
    position: relative;
}

.wrapper .sidebar .content {
    margin: 70px 0;
    height: calc(100% - 280px);
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
}

.wrapper .sidebar .content a {
    color: #FFFFFF;
    width: calc(100% - 2px);
    display: block;
    font-size: 1em;
    font-weight: 500;
    position: relative;
    z-index: 999;
    padding-top: 47px;
    padding-left: 35px;
}

.wrapper .sidebar .content a.active, .wrapper .sidebar .content a.router-link-exact-active {
    color: #2176D4;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    position: relative;
}

.wrapper .sidebar .content a:not(.active), .wrapper .sidebar .content a:not(.router-link-exact-active) {
    padding-top: 20px;
}

.wrapper .sidebar .content a.active::after, .wrapper .sidebar .content a.router-link-exact-active::after {
    content: ' ';
    display: block;
    color: #FFFFFF;
    height: 120px;
    width: calc(100% + 30px);
    background-image: url('/sidebar-active-link-bg.png');
    background-position: center center;
    background-size: cover;
    position: absolute;
    right: -30px;
    top: 0;
    bottom: 0;
    z-index: -1;
    cursor: none;
    pointer-events: none;
}

.inner {
    width: calc(100vw - 200px);
    height: calc(100vh - 20px);
    background: #FFFFFF;
    position: absolute;
    top: 10px;
    left: 190px ;
    border-radius: 35px;
    z-index: 0;
}
</style>