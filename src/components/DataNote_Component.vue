<template>
    <v-container>
        
        <v-row justify="center">
            <v-col class="blue lighten-2" cols="12" sm="7" md="6">
                <v-text-field v-model="title" label="Title to the Note" hide-details="auto"></v-text-field>
                <v-text-field v-model="note" label="Note"></v-text-field>
                <v-btn @click="verifyData" block color="success">
                    <v-icon left >library_add</v-icon>
                    Add Note
                </v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
    name : 'DataNote' ,
    data(){
        return {
            title : '' ,
            note : '' ,
            data : []
        }
    },
    methods : {
        ...mapMutations('NoteStore' , ['addListArray','addLocalStorage']),
        verifyData(){
            if( this.title != '' && this.note != '' ){
                this.data.push(this.title , this.note)
                this.addListArray(this.data)
                this.title = '' 
                this.note = ''
                this.data = []
            }
        }
    },
    created(){
        this.addLocalStorage()
    }
}
</script>