<template>
    <div class="container">
        <h1 class="is-size-4 has-text-weight-bold mb-6">Create Ticket</h1>

        <div class="columns custom-columns-with-padding mb-5">
            <div class="column">
                
                <div class="select">
                    <select class="custom-select custom-select-no-padding has-text-weight-semibold">
                        <option>Select</option>
                        <option>With options</option>
                    </select>
                </div>

            </div>
            <div class="column">
                <div class="select">
                    <select class="custom-select has-text-weight-semibold">
                        <option>Add or Remove Attachments</option>
                        <option>With options</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="mb-5">
            <p class="has-text-weight-semibold">Tags</p>
            <!-- TAGS -->
            <span class="tag custom-tag">desc</span>
            <span class="tag custom-tag">desc</span>
            <span class="tag custom-tag">desc</span>
            <span class="tag custom-tag">desc</span>
        </div>


        <div class="columns custom-columns-with-padding mt-4 mb-5">
            <div class="column">
                <div class="field">
                    <label class="has-text-weight-semibold" for="first">Input field</label>
                    <div class="control has-icons-right">
                        <input class="input custom-input" type="text" id="first" placeholder="input">
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'pen']" />
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="has-text-weight-semibold" for="second">Input field</label>
                    <div class="control has-icons-right">
                        <input class="input custom-input" type="text" id="second" placeholder="input">
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'pen']" />
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="has-text-weight-semibold" for="third">Input field</label>
                    <div class="control has-icons-right">
                        <input class="input custom-input" type="text" id="third" placeholder="input">
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'pen']" />
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="has-text-weight-semibold" for="fourth">Input field</label>
                    <div class="control has-icons-right">
                        <input class="input custom-input" type="text" id="fourth" placeholder="input">
                        <span class="icon is-small is-right">
                            <font-awesome-icon :icon="['fas', 'pen']" />
                        </span>
                    </div>
                </div>
                
            </div>

            <div class="column">
                <div class="field">
                    <label class="has-text-weight-semibold" for="textarea">Description</label>
                    <div class="control">
                        <textarea class="textarea custom-textarea" rows="10"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="has-text-right">
            <button class="mt-5 button is-success is-custom-success is-rounded">Create Ticket</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateTicket'
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

.tag.custom-tag {
    background-color: #707070;
    padding: 0 2em;
    color: #ffffff;
    border-radius: 10px;
    height: 1.5em;
    margin-right: 2em;
}

.input.custom-input {
    box-shadow: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #cccc;
}

.field {
    width: 85%;
}

.textarea.custom-textarea {
    box-shadow: none;
    outline: none;
    margin-top: 5px;
    border-radius: 0px;
    max-width: 100%;
    min-width: 90%;
}

.is-success.is-custom-success {
    background-color: #34B54E;
}
</style>
