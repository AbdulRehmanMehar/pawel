<template>
    <div class="wrapper">

        <div class="sidebar">
            <img class="logo" :src="Logo" alt="Whistle Logo (White)" width="50">

            <div class="content">
                
                <div class="links" v-if="currentUserType == 'employee'">
                    <router-link :to="{name: 'employee-create-ticket'}">Create Ticket</router-link>
                    <router-link :to="{name: 'employee-help'}">Help</router-link>
                </div>

                <div class="links" v-if="currentUserType == 'investigator'">
                    <router-link :to="{name: 'investigator-dashboard'}">Dashboard</router-link>
                    <router-link :to="{name: 'investigator-profile'}">Profile</router-link>
                    <router-link :to="{name: 'employee-help'}">Help</router-link>
                </div>

            </div>
        </div>


        <div class="inner">
            <div class="inner-content">
                <div class="top-bar">
                    <ul class="bar-content">
                        <li>
                            <img :src="SettingsIcon" alt="">
                        </li>
                        <li>
                            <img :src="ZvonceIcon" alt="">
                            <div class="badge custom-badge has-text-weight-semibold">
                                1
                            </div>
                        </li>
                        <li class="ml-5">
                            <img :src="UserImage" alt="">
                            
                        </li>
                        <li class="max-width has-text-grey-lighter">
                            <p>Nathan Miles</p>
                        </li>
                    </ul>
                    
                    
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from './assets/logo/whistle-logo-white.png'
import SettingsIcon from './assets/icons/settings.png'
import ZvonceIcon from './assets/icons/zvonce.png'
import UserImage from './assets/helpers/user.png'

export default {
    name: 'Authenticated',
    data() {
        return {
            Logo: Logo,
            SettingsIcon: SettingsIcon,
            ZvonceIcon: ZvonceIcon,
            UserImage: UserImage
        }
    },

    computed: {
        currentUserType() {
            return this.$route.path.split('/').pop().split('-')[0].toLowerCase()
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
    font-family: Titillium Web;
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
    margin: 20px 0;
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

.wrapper .sidebar .content :not(.active):not(.router-link-exact-active) {
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
    overflow-x: hidden;
    overflow-y: auto;
    padding: 50px 90px;
}

.inner-content {
    position: relative;
}

.inner-content .top-bar {
    position: absolute;
    top: -45px; /** the padding (50px)... */
    text-align: right;
    width: 100%;
}

.top-bar .bar-content {
    height: 36px;
}

.top-bar .bar-content li {
    min-height: 36px;
    max-height: 100%;
    display: inline-block;
    position:relative;
    min-width: 25px;
    max-width: 120px;
}

.top-bar .bar-content li img {
    width: 25px;
}

.top-bar .bar-content li.max-width {
    width: 100px;
}

.top-bar .bar-content li .badge.custom-badge {
    position: absolute;
    top: -1px;
    right: 1px;
    background: #34B54E;
    height: 12px;
    width: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 8px;
    color: #FFFFFF;
}

.top-bar .bar-content li p {
    position: absolute;
    top: 13px;
    left: 5px;
    font-size: .8em;
}
</style>