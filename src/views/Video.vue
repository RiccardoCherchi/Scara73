<template>
    <div class="home">
        <video autoplay loop muted id="video">
        <source :src="getVidUrl('presentation')" type="video/mp4">
    </video>
    </div>
</template>

<script>
export default {
    name: "Video",
    data() {
        return {

        }
    },
    mounted() {
        const v = document.getElementById("video")
        v.addEventListener("seeked", () => {
            this.$router.push("/home")
        });
    },
    methods: {
        getVidUrl(image) {
            var images = require.context('@/assets/videos/', false, /\.mp4$/)
            return images('./' + image + ".mp4")
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

</style>