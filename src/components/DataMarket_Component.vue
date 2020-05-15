<template>
    <v-container>
        <v-row justify="center">
            <v-col class="light-green lighten-2" cols="12" sm="8" md="7">
                <v-text-field v-model="product" label="List of Market" hide-details="auto"></v-text-field>
                <v-btn @click="verifyData" class="mt-3" block color="success">
                    <v-icon left>
                        library_add
                    </v-icon>
                    Add List
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name : 'DataMarket' , 
    data(){
        return{
            product : ''
        }
    },
    methods :{
        ...mapMutations('MarketStore' , ['addListArray','addLocalStorage']) , 
        verifyData(){
            if(this.product != ''){
                this.addListArray(this.product)
                this.product = ''
            }
        }
    },
    created(){
        this.addLocalStorage()
    }
}
</script>