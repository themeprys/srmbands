<template>
    <b-carousel
        :autoplay="false"
        :indicator="false"
        :overlay="gallery"
        :repeat="repeat"
        @click="switchGallery(true)">
        <b-carousel-item v-for="(item, i) in items" :key="i">
            <figure class="image">
                <img :src="item.image">
            </figure>
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large"/>
        <template slot="list" slot-scope="props">
            <b-carousel-list
                v-model="props.active"
                :data="items"
                v-bind="al"
                @switch="props.switch($event, false)"
                as-indicator />
        </template>
        <template slot="overlay">
            <div class="has-text-centered has-text-white">
                Hello i'am overlay!
            </div>
        </template>
    </b-carousel>
</template>

<script>
export default {
    data() {
        return {
            gallery: false,
            repeat: true,
            al: {
                hasGrayscale: true,
                itemsToShow: 2,
                breakpoints: {
                    768: {
                        hasGrayscale: false,
                        itemsToShow: 1
                    },
                    960: {
                        hasGrayscale: true,
                        itemsToShow: 1
                    }
                }
            },
            items: [
                {
                    title: 'Slide 1',
                    image: 'img/amsf2.jpg'
                },
                {
                    title: 'Slide 2',
                    image: 'img/amsf3.jpg'
                },
                // {
                //     title: 'Slide 3',
                //     image: 'img/amsf3.jpg'
                // },
            ]
        }
    },
    methods: {
        switchGallery(value) {
            this.gallery = value
            if (value) {
                document.documentElement.classList.add('is-clipped')
            } else {
                document.documentElement.classList.remove('is-clipped')
            }
        }
    }
}
</script>