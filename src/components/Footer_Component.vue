<template>
    <div>
        <v-bottom-navigation
        dark
        shift
        app
        >


        <v-btn :to="{name : 'Notes'}">
        <span>Notes</span>
        <v-icon>event_note</v-icon>
        </v-btn>

        <v-btn :to="{name : 'Activities'}">
        <span>Activities</span>
        <v-icon>fitness_center</v-icon>
        </v-btn>

        <v-btn :to="{name : 'Market'}">
        <span>Market</span>
        <v-icon>storefront</v-icon>
        </v-btn>

        <v-btn :to="{name : 'Task'}">
        <span>Tasks</span>
        <v-icon>import_contacts</v-icon>
        </v-btn>

    </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    name : 'FooterNav'
}
</script>