<template>
  <div class="home">
      <div class="points-container">
          <div class="points-box">
              
          </div>
      </div>
      <div class="mobile-view d-block d-lg-none">
        <h1 v-html="activeText"></h1>
      </div>
  </div>
</template>

<script>
export default {
    name: "Overview",
    data() {
        return {
            options: {},
            activeText: null,
            coordinates: [
                {
                    x: 87,
                    y: 65,
                    text: "Finale in titanio a 3 uscite"
                },
                {
                    x: 80,
                    y: 20,
                    text: "cofano posteriore con carbon scoop studiato su misura per avere il massimo della leggerezza e delle performance di estrazione aria"
                },
                {
                    x: 70,
                    y: 67,
                    text: "Ammortizzatori Ohlins STX realizzati su misura per l'auto con doppia regolazione in compressione ed estensione"
                },
                {
                    x: 45,
                    y: 40,
                    text: "Porte con pannelli <br/>in carbonio integrati <br/>e vetri lexan"
                },
                {
                    x: 31,
                    y: 18,
                    text: "Parabrezza lexan per ridurre il peso di 3kg rispetto all’originale."
                },
                {
                    x: 10,
                    y: 85,
                    text: "Pneumatici semislick <br/>ad alte prestazioni"
                },
                {
                    x: 17,
                    y: 25,
                    text: "Pneumatici semislick ad alte prestazion"
                },
                {
                    x: 20,
                    y: 70,
                    text: "Cerchi forgiati di alta qualità per raggiungere il minor peso possibile con la maggior resistenza"
                },
            ]
        }
    },

    mounted() {



        const points_box = document.getElementsByClassName("points-box")[0];

        this.coordinates.forEach((e, i) => {
            let point = points_box.appendChild(
                document.createElement("div")
            );
            point.classList.add("point", "animate__animated", "animate__fadeIn");
            point.style.left = `${e.x}%`;
            point.style.top = `${e.y}%`;

            let image = point.appendChild(
                document.createElement("img")
            )
            image.src = this.getImgUrl("point")

            point.addEventListener("mouseenter", () => {
                let pointText = point.appendChild(
                    document.createElement("div")
                )
                pointText.classList.add("point-text", `point_${i}`)
                pointText.innerHTML = e.text

                this.activeText = e.text;
            })

            point.addEventListener("mouseleave", (event) => {
                point.removeChild(event.target.childNodes[1])
            })
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

<style lang="scss">
    .point {
        position: absolute;

        @media screen and (max-width: 600px) {
            img {
                width: 30px;
            }
        }

        @media screen and (min-width: 768px) {
            img {
                width: 50px;
            }
        }

        .point-text {
            width: 300px;
            color: white;
            font-size: 18px;
            font-weight: bold;
            margin: -90px 0 0 50px;
            transform: translate(-100px, -200px);

            &.point_7 {
                transform: translate(-100px, -400px);  
            }

            &.point_2 {
                transform: translate(-100px, -270px);  
            }

            &.point_3 {
                transform: translate(-100px, -250px);  
            }

            &.point_4 {
                transform: translate(-100px, -150px);
            }

            &.point_5 {
                transform: translate(-100px, -150px);
            }

            &.point_6 {
                transform: translate(-100px, -300px);
            }

            @media screen and (max-width: 992px) {
                display: none;
            }
        }
    }
</style>

<style lang="scss" scoped>

    .home {
        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
        min-height: 100vh; /* These two lines are counted as one :-)       */

        display: grid;

        @media screen and (max-width: 992px) {
            grid-template-rows: 80% auto;
        }
    }

    .points-box {
        width: 65%;
        height: 40%;

        position: absolute;
        bottom: 11%;
        left: 50%;

        transform: translate(-50%);

        @media screen and (max-width: 992px) {
            top: 22%;
            height: 20%;
            width: 70%;
        }

        @media screen and (max-width: 600px) {
            top: 55%;
            height: 15%;
            width: 118%;
        }
    }

    .points-container {
        background-image: url("../assets/images/backgrounds/overview.jpg");
        background-position: center;
        background-size: cover;

        @media screen and (max-width: 992px) {
            background-image: url("../assets/images/backgrounds/overview-mobile.jpg");
        }
    }

    .mobile-view {
        h1 {
            text-align: center;
            color: white;
            margin-top: 5%;
            font-size: 1.4rem;
        }
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