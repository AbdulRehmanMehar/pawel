<template>
    <div class="container is-fluid">
        <div class="head-wrapper">
            <div class="head">
                <h1 class="title">Login</h1>
                <p class="sub-title">Enter your details below to continue</p>
            </div>
        </div>

        <div class="form-wrapper">
            <form class="form">
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <img :src="ProfileUserIcon">
                        <input class="input" type="text" placeholder="">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                        <img :src="LockIcon">
                        <input class="input" type="text" placeholder="">
                    </div>
                </div>

                <div class="field">
                    <p class="has-text-centered is-size-7">
                        Forgot 
                        <b>USERNAME/PASSWORD?</b>
                    </p>
                </div>
            </form>
        </div>
        
        <div class="foot-wrapper">
            <p class="has-text-centered is-size-7">
                Create your Account!
            </p>
        </div>
    </div>
</template>

<script>
import LockIcon from '../assets/icons/lock.png'
import ProfileUserIcon from '../assets/icons/profile-user.png'

export default {
    name: 'Login',

    data() {
        return {
            LockIcon: LockIcon,
            ProfileUserIcon: ProfileUserIcon
        }
    }
}
</script>

<style scoped>
    .container {
        height: 100vh;
        font-family: Titillium Web;
        background-color: #2176D4;
        color: #FFFFFF;
    }

    .head-wrapper {
        width: 400px;
        margin: 0 auto;
        padding-top: 4rem;
        padding-bottom: 6rem;
        position: relative;
    }

    .title {
        text-align: left;
        /* font: normal normal bold calc(60px/91px) Titillium Web; */
        font-size: 2.4em;
        font-weight: bold;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        margin-bottom: 0px !important;
    }

    .sub-title {
        font-size: .8em;
    }


    .form-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    
    .field {
        width: 380px;
        margin-bottom: 20px;
    }

    .field .label {
        color: #FFFFFF !important;
        font-weight: 600;
        margin-left: 15px;
    }
    .field .control img {
        position: absolute;
        z-index: 999;
        height: 18px;
        width: 18px;
        top: 10px;
        left: 15px;
    }
    .field .input {
        border-radius: 40px;
        padding-left: 45px;
    }

    .foot-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-bottom: 1.5em;
    }    

</style>