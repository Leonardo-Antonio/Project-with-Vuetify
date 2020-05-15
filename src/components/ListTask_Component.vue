<template>
    <v-container grid-list-xs>
        <v-row justify="center">
            <v-col v-for="(item, index) in listTask" :key="index" cols="12" sm="5" md="4">
                <v-card :class="[item.Estado ? 'light-green lighten-2' : 'white' ]">
                    <v-card-title>
                        Task {{index +1 }}
                    </v-card-title>

                    <v-card-text>
                        {{item.Task}}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="cambioEstado(index)" fab small color="success">
                            <v-icon>done</v-icon>
                        </v-btn>
                        <v-btn @click="deleteTask(index)" dark fab small color="red">
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name : 'ListTask' ,
    computed : {
        ...mapState('TaskStore' , ['listTask'])
    },
    methods : {
        ...mapMutations('TaskStore' , ['deleteTask','cambioEstado'])
    }
}
</script>