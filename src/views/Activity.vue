<template>
    <v-container>
        <Title :title="'Activities : ' + cant" />
        <DataActivity />
        <ListActivity />
    </v-container>
</template>

<script>

import Title from '../components/Title_Component'
import DataActivity from '../components/DataActivity_Component'
import ListActivity from '../components/ListActivities_Component'

import {mapState} from 'vuex'

export default {
    name : 'Activity' , 
    computed : {
        ...mapState('ActivityStore' , ['cant'])
    },
    components : {
        Title,
        DataActivity,
        ListActivity
    }
}
</script>