<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
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
  }
}
</script>
<template lang="">
  <AppHeader />
  <AppMain class="main" />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;

.main{
  background-color: $yu_orange;
  height: 100vh;
}
  
</style>