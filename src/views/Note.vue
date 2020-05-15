<template>
    <v-container>
        <Title :title="'Notes : ' + cant" />
        <DataNote />
        <ListNote />
    </v-container>
</template>

<script>

import Title from '@/components/Title_Component.vue'
import DataNote from '@/components/DataNote_Component.vue'
import ListNote from '@/components/ListNote_Component.vue'

import {mapState} from 'vuex'

export default {
    name : 'Note' , 
    components : {
        Title ,
        DataNote,
        ListNote
    },
    computed : {
        ...mapState('NoteStore' , ['cant'])
    }
}
</script>