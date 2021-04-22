<template>
    <div class="home">
        
        <div class="slider splide d-none d-md-flex">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide" v-for="i in slides" :key="i['image']">
                <img :src="i['image']" alt="carousel-item">
              </li>
            </ul>
          </div>
        </div>


        <div class="mobile-images d-md-none">
            <img @click="selectImage(i)" v-for="i in slides" :key="i['image']" :src="i['image']" alt="slide image">
        </div>
        
        <div class="mobile-preview" v-if="selectedImage">
            <div @click="closePreview()" id="closeButton" class="close">
                <i class='bx bx-x'></i>
            </div>
            <img :src="selectedImage" alt="selected image">
        </div>

    </div>
</template>

<script>

export default {
    name: "Gallery",
    data() {
        return {
            selectedImage: null,
            slides: []
        };
    },
    beforeMount() {
        this.importAll(require.context('@/assets/images/gallery/', true, /\.jpg$/))
    },
    mounted() {
        new window.Splide( '.splide' ).mount();
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
        },
        selectImage(i) {
            console.log(i)
            this.selectedImage = i['image'];
            console.log(this.selectedImage)
        },
        closePreview() {
            this.selectedImage = null;
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

        overflow: auto;

        
    }

    .slider {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 1000px;

        @media screen and (max-width: 1200px) {
            width: 800px;
        }

        @media screen and (max-width: 1000px) {
            width: 700px;
        }

        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .mobile-images {
        padding-top: 20%;


        img {
            display: block;
            width: 100%;

        }
    }

    .mobile-preview {
        position: fixed;
        top: 0;
        left: 0;

        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        background: black;

        img {
            width: 100%;
        }

        .close {

            position: absolute;
            left: 10px;
            top: 10px;

            i {
                font-size: 50px;
            }
            
        }
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