<script>
export default {
    name: 'AppHeader',
    data(){
        return{

        }
    }
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/800px-Yu-Gi-Oh%21_%28Logo%29.jpg"alt="">
                <h1>Yu-Gi-Oh Api</h1>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header{
    padding: 20px 0;
    background-color: #fff;
    img{
        width: 100px;
    }
}
</style>