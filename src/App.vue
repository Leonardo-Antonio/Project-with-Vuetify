<template>
  <v-app>

    <Header />

    <v-content>
        <router-view></router-view>
    </v-content>

    <FooterNav />
    
  </v-app>

</template>

<script>

import FooterNav from './components/Footer_Component.vue'
import Header from './components/Header_Component.vue'

export default {
  name: 'App',

  components: {
    FooterNav,
    Header
  },

  data(){
    return{

    }  
  },
  computed : {
    
  }
};
</script>
