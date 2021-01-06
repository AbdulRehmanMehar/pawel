<template>
    <div class="container">
        <h1 class="is-size-4 has-text-weight-bold mb-5">Investigators</h1>

        <div class="columns mt-1" style="max-width: 95%">
            <div class="column py-0">

                <div class="select">
                    <select class="custom-select has-text-weight-semibold pl-0">
                        <option>List of all investigators</option>
                        <option>With options</option>
                    </select>
                </div>

            </div>
            <div class="column has-text-right	 py-0">
                <label for="sort-select" class="is-inline-block pt-3 has-text-grey-light mr-1 is-size-7">Sort by</label>
                <div class="select is-inline-block">
                    <select id="sort-select" class="is-size-7 pt-3 is-uppercase custom-select custom-select-no-padding ">
                        <option>Name</option>
                        <option>With options</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="columns" style="max-width: 99%; margin-left: 1%;">
            <div class="column py-0" v-for="i of 2" :key="i">
                <div class="card my-6" v-for="j of 3" :key="j">
                    <div class="card-content custom-card-content-padding">
                        
                        <div class="columns">
                            <div class="column is-2 py-0">
                                <img :src="UserImage" alt="profile pic">
                            </div>
                            <div class="column is-10 py-0">
                                <h3 class="is-size-7-custom has-text-weight-bold">Aronas Duncan</h3>
                                <div class="columns">
                                    <div class="column pb-0">
                                        <p class="is-size-7 has-text-grey-light">email123@gmail.com</p>
                                    </div>
                                    <div class="column pb-0">
                                        <p class="is-size-7 has-text-grey-light">
                                            Open cases: 
                                            <strong class="has-text-link">5</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>                        

                        <div class="has-text-right" style="margin-top: -25px; margin-right: 10px">
                            <p v-if="i-j < 1" class="is-uppercase has-text-success-custom has-text-weight-bold">active</p>
                            <p v-else class="is-uppercase has-text-danger-custom has-text-weight-bold">disabled</p>
                        </div>

                        <div class="mt-4">
                            <button class="mr-1 button button-custom is-success is-custom-success is-rounded">Reset Password</button>
                            <button class="mr-1 button button-custom is-danger is-custom-danger is-rounded">Deactivate</button>
                            <button class="mr-1 button button-custom is-link is-rounded">Show Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserImage from '../../assets/helpers/user.png'
export default {
    name: 'Dashboard',
    data() {
        return {
            UserImage: UserImage
        }
    }
}
</script>

<style scoped>

.select select.custom-select {
    background-color: transparent;
    border-color: transparent;
    border: 0px !important;
    outline: none !important;
}

.select select.custom-select.custom-select-no-padding {
    padding-left: 0px !important;
    padding-right: 0px !important;
}

.select select.custom-select:hover, .select select.custom-select:focus {
    outline: none !important;
}

.card {
    border-radius: 15px;
}
.is-size-7-custom {
    font-size: .9em;
}
.custom-card-content-padding {
    padding-top: .7em;
    padding-bottom: .7em;
}

.has-text-danger-custom {
    color: #C40808
}
.has-text-success-custom {
    color: #34B54E;
}

.button-custom {
    /* padding-top: .75em !important; */
    padding-left: 2.5em !important;
    padding-right: 2.5em !important;
    /* padding-bottom: .75em !important;
    height: 0 !important; */
    font-size: .55em;
    font-weight: 600;
}
.is-success.is-custom-success {
    background-color: #34B54E;
}

.is-danger.is-custom-danger {
    background-color: #C40808;
}

</style>