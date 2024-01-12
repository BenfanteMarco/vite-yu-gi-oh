<script>
import axios from 'axios';
import {store} from '../store.js';
export default {
    name: 'AppFilter',
    data(){
        return{
            store,
            getArchetypesList: [],
        }
    },
    created(){
        this.getArchetypesList();
    },
    methods: {
        getArchetypesList(){
            axios.get(store.apiArchetypeUrl).then((response) =>{
                this.getArchetypesList = response.data
            });
        }
    }
}
</script>
<template lang="">
    <div class="container-select mt-30">
        <div class="row">
            <select class="select-archetype">
                <option value="">All Types</option>
            </select>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container-select{
        max-width: 1200px;
        margin: 30px auto;
    }
    .select-archetype{
        background-color: #fff;
        border: none;
        padding: 4px;
        width: 100px;
    }
</style>