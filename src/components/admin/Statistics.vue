<template>
    <div>
        <h1 class="is-size-4 has-text-weight-bold mb-6">Statistics</h1>

        <div class="columns mb-5">
            <div class="column">

                <div class="columns has-background-link	" style="border-radius: 10px">
                    <div class="column is-10">
                        <p class="has-text-weight-semibold has-text-light" style="max-width: 45%; margin: 0 auto">
                             Tickets created in the last 30 days
                        </p>
                    </div>

                    <div class="column is-2">
                        <p class=" has-text-weight-bold has-text-primary-light is-size-5 mt-3">22</p>
                    </div>
                </div>

            </div>

            <div class="column">

                <div class="columns has-background-info-light" style="border-radius: 10px">
                    <div class="column is-10">
                        <p class="has-text-weight-semibold has-text-link" style="max-width: 45%; margin: 0 auto;">
                            Number of tickets open for more than 60 days
                        </p>
                    </div>

                    <div class="column is-2">
                        <p class="has-text-center has-text-weight-bold has-text-danger-custom is-size-5 mt-3">8</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="columns mt-6 has-background-info-light">
            <div class="column">
                <BarChart />
            </div>
            <div class="column">
                <PieChart />
            </div>
        </div>
    </div>
</template>

<script>
import BarChart from '../charts/BarChart.vue'
import PieChart from '../charts/PieChart.vue'

export default {
    name: 'Statistics',
    components: {
        BarChart,
        PieChart
    }
}
</script>

<style scoped>

.has-text-danger-custom {
    color: #C40808
}

</style>