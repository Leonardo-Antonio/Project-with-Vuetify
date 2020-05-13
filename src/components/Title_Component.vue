<template>
    <v-container>
        <v-row class="justify-center">
            <v-col class="pa-2" cols="5" md="5">
                <p class="text-center"> {{title}} </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name : 'Title',
    props : {
        title : String
    }
}
</script>