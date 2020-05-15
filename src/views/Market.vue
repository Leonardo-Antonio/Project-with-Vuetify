<template>
    <v-container>
        <Title :title="'Market : ' + cant" />
        <DataMarket />
        <ListMarket />

    </v-container>
</template>

<script>

import Title from '../components/Title_Component'
import DataMarket from '../components/DataMarket_Component'
import ListMarket from '../components/ListMarket_Component'
import { mapState } from 'vuex'

export default {
    name : 'Market' , 
    components :{
        Title,
        DataMarket,
        ListMarket
    },
    computed : {
        ...mapState('MarketStore' , ['cant'])
    }
}
</script>