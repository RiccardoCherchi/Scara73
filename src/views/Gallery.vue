<template>
    <div class="home">
        <div class="slider">
            <carousel class="slide" :nav="false" :dots="false" :items="1" :center="true">
                <template slot="prev"><div class="control prev"></div></template>
                <img v-for="(slide, i) in slides" :key="i" :src="slide.image">
                <template slot="next"><div class="control next"></div></template>
            </carousel>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    name: "Gallery",
    components: { carousel },
    data() {
        return {
            slides: []
        };
    },
    beforeMount() {
        this.importAll(require.context('@/assets/images/gallery/', true, /\.jpg$/))
    },
    methods: {
        getImgUrl(image) {
            let images = require.context('@/assets/images/gallery/', false, /\.jpg$/)
            return images('./' + image + ".jpg")
        },
        importAll(r) {
        let imgs = {}
        r.keys().forEach(key => (imgs[key] = r(key)))
        for (let value in imgs) {
            this.slides.push({
                image: r(value)
            })
        }
    }
    }
}
</script>

<style lang="scss" scoped>

  .home {
    min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */
    background-color: #000;    
  }
    .slider {
        margin: 0 20%;
        padding-top: 5%;
        .slide {
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
                width: 90%;
                margin-left: 10%;
            }
            .control {
                display: inline-block;
                border-right: 3px solid #ffffff5d;
                border-bottom: 3px solid #ffffff5d;
                width: 20px; height: 20px;
            }
            .next {
                transform: rotate(-45deg);
                margin-left: 50px;
            }
            .prev {
                transform: rotate(-225deg);
                margin-right: 50px;
            }
        }
    }   
</style>