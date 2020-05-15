<template>
  <v-container>
    <Title title="Welcome to you Agenda" />
    <Info />
  </v-container>
</template>

<script>

import Title from '@/components/Title_Component.vue'
import Info from '@/components/InfoHome_Component.vue'

export default {
  name: 'Home',
  components: {
    Title,
    Info
  }
}
</script>
