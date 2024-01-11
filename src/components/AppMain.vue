<script>
import {store} from '../store.js';
export default {
    name: 'AppMain',
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
            <div class="my-col-5" v-for="card, index in store.cardsList" :key="index">
                <div class="my-card">
                    {{ card.name }}
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
    margin: 30px auto;
    .my-col-5{
        width: calc(100% / 5 - 10px);
        margin: 5px;
        .my-card{
            width: 100%;
            height: 300px;
            background-color: #D48F38;
        }
    }
}

</style>