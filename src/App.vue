<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFilter from './components/AppFilter.vue';

import axios from 'axios';
import {store} from './store.js';
export default {
  components: {
    AppHeader,
    AppMain,
    AppFilter,
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
          let apiUrl = store.apiUrl;
          if(store.searchArchetype !== ''){
            apiUrl += `&archetype=${store.searchArchetype}`;
          }
          axios.get(apiUrl).then((response) => {
              store.cardsList = response.data.data;
          });
        },
        filetrCradsByArchetype(){
          this.getCards();
        }
    }
}
</script>
<template lang="">
  <AppHeader />
  <AppFilter @filter_cards="filetrCradsByArchetype"/>
  <AppMain />
</template>
<style lang="scss">
  @use './styles/generals.scss';
</style>