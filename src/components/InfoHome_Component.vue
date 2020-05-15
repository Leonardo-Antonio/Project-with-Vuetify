<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="8" md="8">
                <p>
                    Este es un proyecto personal hecho con JavaScript , Vue.js ,
                    Vuetify y Bootstrap usando el LocalStorage para almacenar la 
                    información que ingreses , la información que ingreses no la podra ver 
                    nadie más que tú .  
                </p>  

                <p>
                    Este proyecto es OpenSourse , el Proyecto lo podras encontrar en mi
                    github : 'Leonardo-Antonio' , donde podrás clonar el repositorio o 
                    hacerle un fork para que puedas mejorar el proyecto y usar tu propia versión 

                </p>
            </v-col>

            <v-col cols="12" sm="4" md="4">
                <p>
                    <span > Enlaces a de ayuda : </span><br><br><br>
                    <v-btn color="success">
                        GitHub
                    </v-btn>
                    <v-btn href="https://material.io/resources/icons/?search=git&style=" class="ml-3" color="success">
                        Vue.js
                    </v-btn>
                </p>  
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    name : 'Info'
}
</script>