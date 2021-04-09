<template>
    <div class="home">
    <video autoplay loop muted id="video"> 

        <source v-if="width < 800" :src="getVidUrl('presentation576')" type="video/mp4">
        <source v-if="width < 1480 && width >= 800" :src="getVidUrl('presentation720')" type="video/mp4">
        <source v-if="width >= 1480" :src="getVidUrl('presentation1080')" type="video/mp4">
    </video>
    <div class="content animate__animated animate__fadeIn animate__delay-2s" id="title">
        <img :src="getImgUrl('title')" alt="title">
    </div>
    </div>
</template>

<script>
export default {
    name: "Video",
    data() {
        return {
            width: null
        }
    },
    mounted() {
        this.width = window.innerWidth;
        const v = document.getElementById("video")
        v.play()


        v.addEventListener("scroll", () => {
            this.$router.push("/presentazione")
        })
        
        v.addEventListener("click", () => {
            this.$router.push("/presentazione")
        })

        v.addEventListener("touchend", () => {
            this.$router.push("/presentazione")
        })

        v.addEventListener("seeked", () => {
            this.$router.push("/presentazione")
        });

        const t = document.getElementById("title")
        setTimeout( () => {
            t.classList.add("animate__fadeOut")
        }, 5000)
    },
    methods: {
        getVidUrl(video) {
            var videos = require.context('@/assets/videos/', false, /\.mp4$/)
            return videos('./' + video + ".mp4")
        },
        getImgUrl(image) {
            var images = require.context('@/assets/images/', false, /\.png$/)
            return images('./' + image + ".png")
        }
    }
}
</script>

<style lang="scss" scoped>
#video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}

.content {  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #f1f1f1;
    padding: 20px;
    img {
        width: 500px;
    }
}

</style>