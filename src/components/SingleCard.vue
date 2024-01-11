<script>
export default {
    name: 'SingleCard',
    props: {
        card: Object
    }
}
</script>
<template lang="">
    <div class="my-col-5">
        <div class="my-card">
            <img :src="card.card_images[0].image_url">
            <h4>{{ card.name }}</h4>
            <div>{{ card.archetype }}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .my-col-5{
        width: calc(100% / 5 - 40px);
        margin: 20px;
        .my-card{
            width: 100%;
            background-color: #D48F38;
            text-align: center;
            min-height: 425px;
            img{
                max-width: 100%;
            }
            h4{
                text-transform: uppercase;
                color: #fff;
                margin: 10px 0px;
            }
        }
    }
</style>