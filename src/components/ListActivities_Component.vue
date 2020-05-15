<template>
    <v-container>
        <v-row>
            <v-col v-for="(item, index) in listActivity" :key="index" cols="12" sm="5" md="4">
                <v-card :class="[item.Estado ? 'light-green lighten-2' : 'white']">
                    <v-card-title>
                        Activity {{index+1}}
                    </v-card-title>
                    <v-card-text>
                        {{item.Activity}}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="cambioEstado(index)" dark fab small color="success">
                            <v-icon>
                                done
                            </v-icon>
                        </v-btn>
                        <v-btn @click="deleteActivity(index)" dark fab small color="red">
                            <v-icon>
                                delete
                            </v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState , mapMutations } from 'vuex'

export default {
    name : 'ListActivity' , 

    computed : {
        ...mapState('ActivityStore' , ['listActivity'])
    },

    methods : {
        ...mapMutations('ActivityStore' , ['deleteActivity' , 'cambioEstado'])
    }
}
</script>