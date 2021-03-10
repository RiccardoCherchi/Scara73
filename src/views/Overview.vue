<template>
  <div class="home">
      <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
        <div class="section">
            <div class="title">
                Cerchi forgiati di alta qualità per raggiungere il minor peso possibile con la maggior resistenza
            </div>
        </div>
      </full-page>
  </div>
</template>

<script>
export default {
    name: "Overview",
    data() {
        return {
            options: {},
            coordinates: [
                {
                    x: 75,
                    y: 78
                },
                {
                    x: 71,
                    y: 59
                },
                {
                    x: 63,
                    y: 67
                },
                {
                    x: 64,
                    y: 78
                },
                {
                    x: 46,
                    y: 69
                },
                {
                    x: 39,
                    y: 58
                },
                {
                    x: 29,
                    y: 61
                },
                {
                    x: 32,
                    y: 78
                },
                {
                    x: 25,
                    y: 85
                },
            ]
        }
    },

    mounted() {

        const home = document.getElementsByClassName("home")[0];

        this.coordinates.forEach((e) => {
            let point = home.appendChild(
                document.createElement("div")
            );
            point.className = "point";
            point.style.position = "absolute";
            point.style.left = `${e.x}%`;
            point.style.top = `${e.y}%`;

            let image = point.appendChild(
                document.createElement("img")
            )
            image.src = this.getImgUrl("point")
        })
        
    },

    methods: {
        getImgUrl(image) {
            var images = require.context('@/assets/images/models/', false, /\.png$/)
            return images('./' + image + ".png")
        }
    }
}
</script>

<style lang="scss" scoped>

    .home {
        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
        min-height: 100vh; /* These two lines are counted as one :-)       */

        background-image: url("../assets/images/backgrounds/overview.jpg");
        background-position: center;
        background-size: cover;
    }

    .title {
        position: absolute;
        top: 40%;
        left: 25%;

        width: 400px;

        color: white;
        font-size: 25px;
        font-weight: bold;
    }
</style>