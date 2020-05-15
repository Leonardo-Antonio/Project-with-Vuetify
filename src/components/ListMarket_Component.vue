<template>

    <v-container grid-list-md>
        <v-row justify="center">
            <v-col v-for="(item, index) in listMarket" :key="index" cols="12" sm="5" md="4">
                <v-card :class="[item.Estado ? 'light-green lighten-3' : 'white']">
                    <v-card-title primary-title>
                        Product {{index + 1}}
                    </v-card-title>
                    <v-card-text>
                        {{item.Product}}
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="cambioEstado(index)" dark fab small color="success">
                            <v-icon>
                                done
                            </v-icon>
                        </v-btn>
                        <v-btn @click="deleteProduct(index)" dark fab small color="red">
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
import { mapState, mapMutations } from 'vuex'
export default {
    name : 'ListMarket' ,
    computed : {
        ...mapState('MarketStore' , ['listMarket'])
    },
    methods :{
        ...mapMutations('MarketStore' , ['deleteProduct','cambioEstado'])
    }
}
</script>