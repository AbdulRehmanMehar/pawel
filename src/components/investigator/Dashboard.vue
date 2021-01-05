<template>
    <div class="container">
        <h1 class="is-size-4 has-text-weight-bold mb-5">Dashboard</h1>

        <div class="columns mt-1" style="max-width: 90%">
            <div class="column">

                <div class="select">
                    <select class="custom-select custom-select-no-padding has-text-weight-semibold">
                        <option>Select</option>
                        <option>With options</option>
                    </select>
                </div>

            </div>
            <div class="column has-text-right	">
                <label for="sort-select" class="is-inline-block pt-3 has-text-grey-light mr-1 is-size-7">Sort by</label>
                <div class="select is-inline-block">
                    <select id="sort-select" class="is-uppercase custom-select custom-select-no-padding">
                        <option>NAME</option>
                        <option>With options</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="columns mt-3" style="max-width: 85%; margin-left: 5%;">
            <div class="column">
                <div class="card my-5" v-for="i of 4" :key="i">
                    <div class="card-content custom-card-content-padding">
                        
                        <div class="columns mb-0">
                            <div class="column">
                                <h3 class="is-size-6 has-text-weight-semibold is-inline-block mr-6">Ticket Name</h3>
                                <p class="is-size-7 has-text-grey-light is-inline-block">ID 123456</p>
                            </div>
                            <div class="column has-text-right">
                                <p class="is-size-7 has-text-grey-light is-inline-block">
                                    Ticket create date: 23.10.2020
                                </p>
                            </div>
                        </div>

                        <p class="is-size-7" style="max-width: 60%;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint aut fugit libero esse numquam fuga sequi voluptates iure. Ut repellendus consectetur nisi quis quibusdam esse cumque placeat vel minima vitae?</p>
                        <div class="has-text-right">
                            <p class="is-size-7 has-text-grey-light is-inline-block">
                                Last update: 23.10.2020
                            </p>
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

</style>