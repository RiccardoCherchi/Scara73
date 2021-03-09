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
                    x: 1432,
                    y: 733
                },
                {
                    x: 1355,
                    y: 559
                },
                {
                    x: 1202,
                    y: 636
                },
                {
                    x: 1229,
                    y: 740
                },
                {
                    x: 881,
                    y: 651
                },
                {
                    x: 753,
                    y: 548
                },
                {
                    x: 564,
                    y: 579
                },
                {
                    x: 612,
                    y: 739
                },
                {
                    x: 483,
                    y: 807
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
            point.style.left = `${e.x}px`;
            point.style.top = `${e.y}px`;

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