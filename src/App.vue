<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';
import {store} from './store.js';
export default {
  components: {
    AppHeader,
    AppMain
  },
  data(){
        return{ 
            store
        }
    },
    created(){
        this.getCards();
    },
    methods: {
        getCards(){
            axios.get('store.apiUrl').then((response) => {
                store.cardsList = response.data.data;
            });
        }
    }
}
</script>
<template lang="">
  <AppHeader />
  <AppMain />
</template>
<style lang="scss">
  @use './styles/generals.scss';
</style>