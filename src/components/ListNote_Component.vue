<template>
    <v-container grid-list-md>
        
        <v-row  justify="center">
            <v-col v-for="(item, index) in listNotes" :key="index" 
            v-show="listNotes.length > 0" cols="12" sm="5" md="4">

                <v-card :class="[item.Estado ? 'light-green lighten-2' : item.Estado = false]">
                    <v-card-title> {{item.Title}} </v-card-title>
                    <v-card-text> {{item.Note}} </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="cambioEstado(index)" dark fab small color="success">
                            <v-icon >done</v-icon>
                        </v-btn>
                        <v-btn @click="deleteItem(index)" dark fab small color="red">
                            <v-icon >delete</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            </v-row>

    </v-container>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
    name : 'ListNote',
    computed : {
        ...mapState('NoteStore' , ['listNotes'])
    } ,
    methods :{
        ...mapMutations('NoteStore' , ['deleteItem' , 'cambioEstado'])
    }
}
</script>