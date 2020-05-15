<template>
    <v-container>
        <v-row justify="center">
            <v-col class="cyan accent-3" cols="12" sm="6" md="7">
                <v-text-field v-model="activity" label="Ejercicio" hide-details="auto"></v-text-field>
                <v-btn @click="verifyData" block class="mt-2" color="success">
                    <v-icon left >library_add</v-icon>
                    Add Activity
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
    name : 'DataActivity' , 
    data(){
        return{
            activity : ''
        }
    } , 
    methods : {
        ...mapMutations('ActivityStore' , ['addListArray' , 'addLocalStorage']),
        verifyData(){
            if(this.activity != ''){
                this.addListArray(this.activity)
                this.activity = ''
            }
        }
    },
    created (){
        this.addLocalStorage()
    }
}
</script>