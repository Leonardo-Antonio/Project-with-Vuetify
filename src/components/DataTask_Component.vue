<template>
    <v-container>
        <v-row justify="center">
            <v-col class="blue lighten-3" cols="12" sm="7" md="6">
                <v-text-field v-model="task" label="Title to the Note" hide-details="auto"></v-text-field>
                <v-btn @click="verifyData" class="mt-3" block color="success">
                    <v-icon left >
                        library_add
                    </v-icon>
                    Add Note
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name : 'DataTask' , 
    data(){
        return{
            task: ''
        }
    },
    methods : {
        ...mapMutations('TaskStore' , ['addListArray','addLocalStorage']),
        verifyData(){
            if(this.task != '' ){
                this.addListArray(this.task)
                this.task = ''
            }
        }
    },
    created(){
        this.addLocalStorage()
    }

}
</script>