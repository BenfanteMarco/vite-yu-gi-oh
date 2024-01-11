<script>
import axios from 'axios';
import {store} from '../store.js';
export default {
    name: 'AppMain',
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
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0').then((response) => {
                store.cardList = response.data.data;
            });
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="my-col-5">
                <div class="my-card">

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