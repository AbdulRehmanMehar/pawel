<template>
    <div class="container">
        <h1 class="is-size-4 has-text-weight-bold mb-6">Ticket Details</h1>

        <div class="columns mb-5">
            <div class="column">
                <div class="card custom-card">
                    <div class="card-content">
                        <!-- TOP -->
                        <div class="columns">
                            <div class="column">
                                <h3 class="is-size-6 has-text-weight-semibold">Ticket Name</h3>
                            </div>
                            <div class="column">
                                <p class="has-text-grey-light is-size-7 mt-1">ID 123456</p>
                            </div>
                        </div>

                        <div class="mb-2">
                            <h5 class="is-size-7-custom mr-2 has-text-weight-semibold is-inline-block">Input field</h5>
                            <h5 class="is-size-7-custom mx-2 has-text-weight-semibold is-inline-block">Input field</h5>
                            <h5 class="is-size-7-custom mx-2 has-text-weight-semibold is-inline-block">Input field</h5>
                            <h5 class="is-size-7-custom mx-2 has-text-weight-semibold is-inline-block">Input field</h5>
                        </div>


                        <div class="mb-5">
                            <p class="is-size-7">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed ducimus fugit! Dignissimos, natus saepe? Consequuntur incidunt est fuga tenetur veritatis voluptates sunt. Architecto vel inventore maiores officia praesentium? Placeat!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sed ducimus fugit! Dignissimos, natus saepe? Consequuntur incidunt est fuga tenetur veritatis voluptates sunt. Architecto vel inventore maiores officia praesentium? Placeat!
                            </p>
                        </div>

                        <div class="mb-6">
                            <!-- TAGS -->
                            <span class="tag custom-tag">desc</span>
                            <span class="tag custom-tag">desc</span>
                            <span class="tag custom-tag">desc</span>
                            <span class="tag custom-tag">desc</span>
                            <span class="tag custom-tag">desc</span>
                        </div>

                        <div class="select my-5">
                            <select class="custom-select has-text-weight-semibold">
                                <option>Add or Remove Attachments</option>
                                <option>With options</option>
                            </select>
                        </div>  

                    </div>
                </div>
            </div>

            <div class="column">
                <div class="card custom-card mb-5">
                    <div class="card-content custom-card-content-padding">
                        <div class="head-wrapper-custom mb-1">
                            <h3 class="is-size-6 has-text-weight-semibold">Last Activity</h3>
                            <p class="is-size-7 has-text-grey-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                            <div class="badge-custom has-text-light has-text-weight-bold">
                                3
                            </div>
                        </div>

                        <p class="is-size-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa exercitationem error sunt quisquam provident corrupti harum.</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-content custom-card-content-padding">
                        <h3 class="is-size-6 has-text-weight-semibold">Chat</h3>
                        <h3 class="is-size-6 has-text-link has-text-weight-bold">Jaime Larson</h3>
                        <img :src="MessageImage" alt="chatbox">
                    </div>
                </div>
            </div>
        </div>

        <div class="has-text-right">
            <button class="mr-4 button is-success is-custom-success is-rounded">Button</button>
            <button class="mr-4 button is-success is-custom-success is-rounded">Button</button>
            <button class="mr-4 button is-success is-custom-success is-rounded">Button</button>
        
        </div>
    </div>
</template>

<script>
import MessageImage from '../../assets/helpers/message.png'

export default {
    name: 'TicketDetails',

    data() {
        return {
            MessageImage: MessageImage
        }
    }
}
</script>

<style scoped>
.card {
    border-radius: 15px;
}
.is-size-7-custom {
    font-size: .9em;
}
.tag.custom-tag {
    background-color: #707070;
    padding: 0 2em;
    color: #ffffff;
    border-radius: 10px;
    height: 1.5em;
    margin-right: 1em;
}
.select select.custom-select {
    background-color: transparent;
    border-color: transparent;
    border: 0px !important;
    outline: none !important;
    font-size: .9em !important;
}

.select select.custom-select.custom-select-no-padding {
    padding-left: 0px !important;
    padding-right: 0px !important;
}

.select select.custom-select:hover, .select select.custom-select:focus {
    outline: none !important;
}

.head-wrapper-custom {
    position: relative;
}

.custom-card-content-padding {
    padding-top: .7em;
    padding-bottom: .7em;
}

.head-wrapper-custom .badge-custom {
    background-color: #34B54E;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
}
a.is-success.is-custom-success, button.is-success.is-custom-success {
    /* padding-top: .75em !important; */
    padding-left: 2.5em !important;
    padding-right: 2.5em !important;
    /* padding-bottom: .75em !important;
    height: 0 !important; */
    font-size: .7em;
}
.is-success.is-custom-success {
    background-color: #34B54E;
}
</style>