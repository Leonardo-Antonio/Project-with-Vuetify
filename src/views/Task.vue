<template>
    <v-container>
        <Title :title="'Task : '+ cant" />
        <DataTask />
        <ListTask />
    </v-container>
</template>

<script>

import Title from '../components/Title_Component'
import DataTask from '../components/DataTask_Component'
import ListTask from '../components/ListTask_Component'
import { mapState } from 'vuex'

export default {
    name : 'Task' ,
    components : {
        Title,
        DataTask,
        ListTask
    },
    computed :{
        ...mapState('TaskStore' , ['cant'])
    }
}
</script>