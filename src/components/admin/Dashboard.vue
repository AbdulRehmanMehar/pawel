<template>
    <div class="container">
        <h1 class="is-size-4 has-text-weight-bold mb-6">Dashboard</h1>
        <div class="columns">
            <div class="column">

                <div class="columns mt-1">
                    <div class="column py-0">

                        <div class="pt-3">
                            <label for="asdb-select" class="is-inline-block has-text-weight-bold pt-2 has-text-danger-custom is-size-7-custom">NOT</label>
                            <div class="select is-inline-block">
                                <select id="asdb-select" class="has-text-weight-bold custom-select is-size-7-custom" style="padding-right: 35px">
                                    <option>assigned tickets</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="column py-0 has-text-right">
                        <div class="pt-3">
                            <label for="sort-select" class="is-inline-block has-text-grey-light pt-3 mr-1 is-size-7">Sort by</label>
                            <div class="select is-inline-block">
                                <select id="sort-select" class="is-size-7 pt-3 is-uppercase custom-select custom-select-no-padding">
                                    <option>NAME</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column py-0">
                        <div class="card my-5" v-for="i of 4" :key="i">
                            <div class="card-content custom-card-content-padding">
                                
                                <div class="columns mb-0">
                                    <div class="column">
                                        <h3 class="is-size-6 has-text-weight-semibold is-inline-block mr-3">Ticket Name</h3>
                                        <p class="is-size-7 has-text-grey-light is-inline-block">ID 123456</p>
                                    </div>
                                </div>

                                <p class="is-size-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aut fugit libero esse numquam fuga sequi voluptates iure. Ut repellendus consectetur nisi quis quibusdam esse cumque placeat vel minima vitae?</p>
                                <div class="columns">
                                    <div class="column">
                                        <p class="is-size-7 has-text-grey-light is-inline-block">
                                            Ticket create date: 23.10.2020
                                        </p>
                                    </div>
                                    <div class="column has-text-right">
                                        <p class="is-size-7 has-text-grey-light is-inline-block">
                                            Last update: 23.10.2020
                                        </p>
                                    </div>
                                    
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="column">
                <div class="columns mt-1">
                    <div class="column py-0">

                        <div class="pt-3">
                            <!-- <label for="asdb-select" class="is-inline-block has-text-weight-bold pt-2 has-text-danger-custom is-size-7-custom">NOT</label> -->
                            <div class="select is-inline-block">
                                <select id="asdb-select" class="has-text-weight-bold custom-select is-size-7-custom" style="padding-right: 35px">
                                    <option>Assigned tickets</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="column py-0 has-text-right">
                        <div class="pt-3">
                            <label for="sort-select" class="is-inline-block has-text-grey-light pt-3 mr-1 is-size-7">Sort by</label>
                            <div class="select is-inline-block">
                                <select id="sort-select" class="is-size-7 pt-3 is-uppercase custom-select custom-select-no-padding">
                                    <option>NAME</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column py-0">
                        <div class="card my-5" v-for="i of 4" :key="i">
                            <div class="card-content custom-card-content-padding">
                                
                                <div class="columns mb-0">
                                    <div class="column">
                                        <h3 class="is-size-6 has-text-weight-semibold is-inline-block mr-3">Ticket Name</h3>
                                        <p class="is-size-7 has-text-grey-light is-inline-block">ID 123456</p>
                                    </div>
                                </div>

                                <p class="is-size-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aut fugit libero esse numquam fuga sequi voluptates iure. Ut repellendus consectetur nisi quis quibusdam esse cumque placeat vel minima vitae?</p>
                                <div class="columns">
                                    <div class="column">
                                        <p class="is-size-7 has-text-grey-light is-inline-block">
                                            Ticket create date: 23.10.2020
                                        </p>
                                    </div>
                                    <div class="column has-text-right">
                                        <p class="is-size-7 has-text-grey-light is-inline-block">
                                            Last update: 23.10.2020
                                        </p>
                                    </div>
                                    
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Dashboard'
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

</style>