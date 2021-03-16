<template>
    <div class="home">
        <div class="slider">
            <carousel :nav="false" :items="1" :center="true">
                <img v-for="(slide, i) in slides" :key="i" :src="slide.image">
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
        console.log(this.slides)
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
        img {
            width: 90%;
            margin-left: 5%;
        }
    }   
</style>