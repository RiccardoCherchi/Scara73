<template>
  <div class="home">
      <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
        <div class="section">
            <div class="title" data-aos="fade-right" data-aos-duration="1500">
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
                    y: 78,
                    text: "Finale in titanio a 3 uscite"
                },
                {
                    x: 71,
                    y: 59,
                    text: "cofano posteriore con carbon scoop studiato su misura per avere il massimo della leggerezza e delle performance di estrazione aria"
                },
                {
                    x: 63,
                    y: 67,
                    text: "Ammortizzatori Ohlins STX realizzati su misura per l'auto con doppia regolazione in compressione ed estensione"
                },
                {
                    x: 46,
                    y: 69,
                    text: "Porte con pannelli <br/>in carbonio integrati <br/>e vetri lexan"
                },
                {
                    x: 39,
                    y: 58,
                    text: "Parabrezza lexan per ridurre il peso di 3kg rispetto all’originale."
                },
                {
                    x: 29,
                    y: 61,
                    text: "Pneumatici semislick <br/>ad alte prestazioni"
                },
                {
                    x: 32,
                    y: 78,
                    text: "Pneumatici semislick ad alte prestazion"
                },
                {
                    x: 25,
                    y: 85,
                    text: "Cerchi forgiati di alta qualità per raggiungere il minor peso possibile con la maggior resistenza"
                },
            ]
        }
    },

    mounted() {

        const home = document.getElementsByClassName("home")[0];

        // this.coordinates.forEach((e) => {
        //     let point = home.appendChild(
        //         document.createElement("div")
        //     );
        //     point.classList.add("point", "animate__animated", "animate__fadeIn");
        //     point.style.left = `${e.x}%`;
        //     point.style.top = `${e.y}%`;

        //     let image = point.appendChild(
        //         document.createElement("img")
        //     )
        //     image.src = this.getImgUrl("point")

        //     point.addEventListener("mouseenter", () => {
        //         let pointText = point.appendChild(
        //             document.createElement("div")
        //         )
        //         pointText.classList.add("point-text")
        //         pointText.innerHTML = e.text
        //     })

        //     point.addEventListener("mouseleave", (event) => {
        //         point.removeChild(event.target.childNodes[1])
        //     })
        // })
        
    },

    methods: {
        getImgUrl(image) {
            var images = require.context('@/assets/images/models/', false, /\.png$/)
            return images('./' + image + ".png")
        }
    }
}
</script>

<style lang="scss">
    .point {
        position: absolute;
        .point-text {
            width: 300px;
            color: white;
            font-size: 18px;
            font-weight: bold;
            margin: -90px 0 0 50px;
        }
    }
</style>

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

    .hidden {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
    }

</style>