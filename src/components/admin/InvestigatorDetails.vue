<template>
    <div class="container">
        <h1 class="is-size-4 has-text-weight-bold mb-5">Investigator Details</h1>

        <div class="columns mt-6">
            <div class="column">

                <div class="columns">
                    <div class="column is-2">
                        <img :src="UserImage">
                    </div>
                    <div class="column is-10">
                        <h2 class="is-size-3 has-text-weight-semibold mt-3 has-text-info-custom">Nathan Miles</h2>
                        <div style="position: relative;">
                            <div class="field is-inline-block w-50-custom">
                                <div class="control">
                                    <input class="input custom-input pl-0" type="text" id="first" placeholder="nathanmiles@gmail.com">
                                </div>
                            </div>

                            <div class="field is-inline-block w-50-custom">
                                <div class="control">
                                    <input class="input custom-input pl-0" type="text" id="first" placeholder="+111 111 111 111">
                                </div>
                            </div>

                            <div class="is-inline-block pos-abs">
                                <p class="has-text-danger-custom is-uppercase has-text-weight-bold is-size-6">Disabled</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="columns is-size-7-custom" style="max-width: 80%; margin-left: 3%;">
                    <div class="column pb-0">

                        <div class="field my-5">
                            <label class="has-text-weight-semibold" for="fname">First Name</label>
                            <div class="control has-icons-right">
                                <input class="input custom-input is-size-7-custom" type="text" id="fname" placeholder="Nathan">
                                <span class="icon is-small is-right">
                                    <font-awesome-icon :icon="['fas', 'pen']" />
                                </span>
                            </div>
                        </div>

                        <div class="field my-5">
                            <label class="has-text-weight-semibold" for="uname">Username</label>
                            <div class="control has-icons-right">
                                <input class="input custom-input is-size-7-custom" type="text" id="uname" placeholder="Nathan123">
                                <span class="icon is-small is-right">
                                    <font-awesome-icon :icon="['fas', 'pen']" />
                                </span>
                            </div>
                        </div>

                        <div class="field my-5">
                            <label class="has-text-weight-semibold" for="pwd">Password</label>
                            <div class="control has-icons-right">
                                <input class="input custom-input is-size-7-custom" type="text" id="pwd" placeholder="***************">
                                <span class="icon is-small is-right">
                                    <font-awesome-icon :icon="['fas', 'pen']" />
                                </span>
                            </div>
                        </div>

                    </div>

                    <div class="column pb-0">
                        <div class="field my-5">
                            <label class="has-text-weight-semibold" for="lname">Last Name</label>
                            <div class="control has-icons-right">
                                <input class="input custom-input is-size-7-custom" type="text" id="lname" placeholder="Miles">
                                <span class="icon is-small is-right">
                                    <font-awesome-icon :icon="['fas', 'pen']" />
                                </span>
                            </div>
                        </div>

                        <div class="field my-5">
                            <label class="has-text-weight-semibold" for="phone">Phone</label>
                            <div class="control has-icons-right">
                                <input class="input custom-input is-size-7-custom" type="text" id="phone" placeholder="+111 111 111 111">
                                <span class="icon is-small is-right">
                                    <font-awesome-icon :icon="['fas', 'pen']" />
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="columns">
                    <div class="column pt-0">
                        <button class="button button-custom is-link is-rounded">Show Tickets</button>
                    </div>
                    <div class="column pt-0">
                        <div class="has-text-right">
                            <button class="mr-4 button button-custom is-success is-custom-success is-rounded">Reset Password</button>
                            <button class="mr-4 button button-custom is-success is-custom-success is-rounded">Activate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import UserImage from '../../assets/helpers/user-large.png'
export default {
    name: 'InvestigatorDetails',
    data() {
        return {
            UserImage: UserImage
        }
    }
}
</script>

<style scoped>
.has-text-info-custom {
    color: #2176D4;
}
.w-50-custom {
    width: 50%;
}
.input.custom-input {
    box-shadow: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #cccc;
    font-weight: 600;
}

.is-size-7-custom {
    font-size: .85em;
}

.is-success.is-custom-success {
    background-color: #34B54E;
}
.button-custom {
    /* padding-top: .75em !important; */
    padding-left: 2.5em !important;
    padding-right: 2.5em !important;
    /* padding-bottom: .75em !important;
    height: 0 !important; */
    font-size: .7em;
}
.has-text-danger-custom {
    color: #C40808
}
.pos-abs {
    position: absolute;
    right: 20px;
}
</style>