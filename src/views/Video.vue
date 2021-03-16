<template>
    <div class="home">
    <video autoplay loop muted id="video"> 

        <source v-if="width < 800" :src="getVidUrl('presentation576')" type="video/mp4">
        <source v-if="width < 1480 && width >= 800" :src="getVidUrl('presentation720')" type="video/mp4">
        <source v-if="width >= 1480" :src="getVidUrl('presentation1080')" type="video/mp4">
    </video>
    <!-- <div class="content">
        <img :src="getImgUrl('title')" alt="">
    </div> -->
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
        v.addEventListener("seeked", () => {
            this.$router.push("/home")
        });
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
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

</style>