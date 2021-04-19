<template>
    <div class="home">
        <!-- <h1>TEST</h1> -->
        
        <carousel :nav="false" :items="1" :dots="false" class="slider">
            <template slot="prev"><span class="prev">prev</span></template>
            <img v-for="img in slides" :key="img" :src="img['image']" alt="carousel-item">
            <template slot="next"><span class="next">next</span></template> 
        </carousel>
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
    mounted() {
        const img = document.getElementById("test");
        
        img.style.width = `${window.innerWidth / 1.5}px`;
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

        color: white;

    }

    .slider {
        width: 50%;
        height: 50%;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);

        display: flex;
    }

    // .slider {
    //     margin: 0 20%;
    //     padding-top: 5%;
    //     .slide {
    //         display: flex;
    //         align-items: center;
    //         justify-content: space-between;
    //         img {
    //             width: 90%;
    //             margin-left: 10%;
    //         }
    //         .control {
    //             display: inline-block;
    //             border-right: 3px solid #ffffff5d;
    //             border-bottom: 3px solid #ffffff5d;
    //             width: 20px; height: 20px;
    //         }
    //         .next {
    //             transform: rotate(-45deg);
    //             margin-left: 50px;
    //         }
    //         .prev {
    //             transform: rotate(-225deg);
    //             margin-right: 50px;
    //         }
    //     }
    // }   
</style>