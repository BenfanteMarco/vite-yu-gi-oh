<script>
import SingleCard from './SingleCard.vue';
import {store} from '../store.js';
export default {
    name: 'AppMain',
    components: {
        SingleCard
    },
    data(){
        return{ 
            store
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
           <SingleCard v-for="card, index in store.cardsList" :key="index" :card="card" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
    margin: 30px auto;
}

</style>