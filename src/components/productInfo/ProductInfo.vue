<template>
    <v-card color="cyan darken-2" class="white--text">
        <v-layout>
            <v-flex xs5>
                <v-img
                        src={{product.images[0].src}}
                        height="125px"
                        contain
                ></v-img>
            </v-flex>
            <v-flex xs7>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">{{product.title}}</div>
                        <div>{{product.description}}</div>
                        <div>{{product.vendor}})</div>
                    </div>
                </v-card-title>
            </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
            Rate this product
            <v-spacer></v-spacer>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ProductInfo",
      props: ['product']
    }
</script>

<style scoped>

</style>