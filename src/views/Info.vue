<template>
  <div class="home" :class="{'on' : start}">
    <div class="custom-container">
        <img @click="powerOn" class="start d-none d-md-block" :src="start ? getImgUrl('start-on.png') : getImgUrl('start-off.png')" alt="start button">
        <!-- <img id="circle" class="circle" :src="getImgUrl('info-circle.png')" alt="info circle"> -->
        <!-- <img id="circle-dotted" class="circle dotted" :src="getImgUrl('info-circle-dotted.png')" alt="info circle"> -->

        <svg class="circle d-none d-md-block" width="1138" height="1137" viewBox="0 0 1138 1137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M569.496 1136.95C883.442 1136.95 1137.95 882.446 1137.95 568.5C1137.95 254.554 883.442 0.0500488 569.496 0.0500488C255.55 0.0500488 1.0459 254.554 1.0459 568.5C1.0459 882.446 255.55 1136.95 569.496 1136.95Z" stroke="black" stroke-width="0.1"/>
            <g id="circle">
                <path d="M300.576 103.8C396.064 48.6701 506.195 24.2341 616.039 33.8041C725.883 43.3751 830.128 86.4891 914.64 157.302C999.16 228.115 1059.86 323.203 1088.51 429.675C1117.16 536.148 1112.38 648.856 1074.82 752.52C1037.26 856.19 968.73 945.79 878.52 1009.2C788.315 1072.6 680.794 1106.74 570.534 1106.97C460.274 1107.21 352.607 1073.54 262.129 1010.53C171.65 947.51 102.736 858.2 64.7271 754.696" stroke="white"/>
            </g>
            <g id="circle-dotted">
                <path d="M511.139 85.037C594.868 74.891 679.797 86.704 757.579 119.315C835.36 151.926 903.32 204.213 954.78 271.038C1006.24 337.864 1039.42 416.927 1051.07 500.46C1062.73 583.993 1052.45 669.121 1021.24 747.477C990.04 825.834 938.98 894.72 873.1 947.38C807.208 1000.03 728.755 1034.64 645.445 1047.79C562.136 1060.95 476.837 1052.2 397.931 1022.41C319.025 992.63 249.226 942.82 195.395 877.89" stroke="white" stroke-miterlimit="1" stroke-dasharray="5 5"/>
            </g>
        </svg>




        <div class="menu" data-aos="fade-right" data-aos-duration="1500">
            <li @click="changeInfo(index)" class="item" :style="{marginLeft: `-${index}rem`}" :class="{'active': index == menu_active}" v-for="(item, index) in menu" :key="item.title">{{ item.title }}</li>
        </div>

        <img @click="powerOn" class="d-block d-md-none start mobile" :src="start ? getImgUrl('start-on.png') : getImgUrl('start-off.png')" alt="start button">


        
        <div class="info-wrapper d-none d-md-flex">
            <div class="info" v-for="(item, i) in infos[info_index].info" :key="i">
                <div class="wrapper animate__animated" :data-aos-duration="500 * i" data-aos="fade-down">
                    <p class="title" v-html="item.title"></p>
                    <p class="value">{{ item.value }}</p>
                    <p class="text">{{ item.text }}</p>
                </div>
            </div>
        </div>  

        <div class="mobile-info-wrapper splide d-block d-md-none">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide info" v-for="(item, i) in infos[info_index].info" :key="i">
                <p class="title" v-html="item.title"></p>
                <p class="value">{{ item.value }}</p>
                <p class="text">{{ item.text }}</p>
              </li>
            </ul>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
    name: "Info",
    data() {
        return {
            start: false, 
            menu_active: 0,
            menu: [
                {
                    title: "panoramica",
                },
                {
                    title: "performance",
                },
                {
                    title: "specifiche",
                }
            ],
            info_index: 0,
            infos: [
                {
                    info: [
                    {
                        title: "peso a secco",
                        value: "778,2 kg",
                    },
                    {
                        title: "motore",
                        value: "1742 cc",
                        text: "sovralimentato"
                    },
                    {
                        title: "potenza",
                        value: "335 cv",
                    },
                    {
                        title: "coppia",
                        value: "515 Nm",
                    },
                    ]
                },
                {
                    info: [
                    {
                        title: "velocità max",
                        value: "306 km/h",
                    },
                    {
                        title: "accelerazione 0/100",
                        value: "3.05 sec",
                    },
                    {
                        title: "accelerazione 100/200",
                        value: "7.05 sec",
                    },
                    {
                        title: "frenata 100/0",
                        value: "36,1m",
                    },
                    ]
                },
                {
                    info: [
                    {
                        title: "pneumatici",
                        value: "A:215/40/17 P:265/35/18",
                    },
                    {
                        title: "trazione",
                        value: "posteriore",
                    },
                    {
                        title: "carreggiata",
                        value: "A:1649mm P:1622mm",
                    },
                    {
                        title: "passo",
                        value: "2380mm",
                    },
                    ]
                }
            ]
        }
    },

    mounted() {
        window.addEventListener("wheel", (e) => {this.handleScroll(e.deltaY > 0)});
        new window.Splide( '.splide' ).mount();
    },

    destroyed() {
        window.removeEventListener("wheel", this.handleScroll);
    },

    methods: {

        handleScroll(direction) {
            if (direction) {
                this.changeInfo(Math.min(this.infos.length - 1, this.info_index + 1))
            } else {
                this.changeInfo(Math.max(this.info_index - 1, 0))
            }
        },

        getImgUrl(image) {
        var images = require.context('@/assets/images/elements/', false)
        return images('./' + image)
        },

        powerOn() {
            this.start = !this.start;
        },

        changeInfo(index) {
            if (window.innerWidth >= 768) {
                if (index != this.info_index) {
                    this.menu_active = index;

                    let circle = document.getElementById("circle")
                    let circle_dotted = document.getElementById("circle-dotted")

                    let wrappers = document.getElementsByClassName("wrapper")


                    circle.classList.add("animate")

                    circle_dotted.classList.add("animate-dotted")
                    wrappers.forEach((e) => {
                        e.classList.add("animate__fadeOutDown")
                    })
                    setTimeout(() => {
                        this.info_index = index
                        wrappers.forEach((e) => {
                        e.classList.remove("animate__fadeOutDown")
                    })
                        wrappers.forEach((e) => {
                        e.classList.add("animate__fadeInDown")
                    })
                    }, 1200)
                    setTimeout(() => {  
                        circle_dotted.classList.remove("animate-dotted")
                        circle.classList.remove("animate")
                    }, 1700)
                }
            } else {
                this.info_index = index;
                this.menu_active = index;
            }
        }
  }
}
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables.scss";

    .home {
        background-image: url('../assets/images/backgrounds/info.jpg');
        background-position: center 40%;
        background-size: cover;

        overflow-y: hidden;

        @media screen and (max-width: 768px) {
            background-position: 100% 150px;
        }

        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
        min-height: 100vh; /* These two lines are counted as one :-)       */

        &.on {
            background-image: url('../assets/images/backgrounds/info-light.jpg');
        }
    }

    .custom-container {
        position: absolute;
        top: 37%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;


        display: flex;

        justify-content: center;
        align-items: center;

        @media screen and (max-width: 768px) {
            display: grid;
            position: relative;
            top: 0;
            left: 0;
            transform: none;

            padding-top: 80px;

            grid-gap: 20px;
        }

        .start {
            margin-bottom: 5%;

            width: 15%;
            animation: pulse 2s infinite ease;

            @keyframes pulse {
                0% {
                    transform: scale(1);
                } 
                50% {
                    transform: scale(1.1);
                } 
                100% {
                    translate: scale(1);
                }
            }

            &.mobile {
                width: 35%;
                animation: none;
                justify-self: center;

                display: block;
            }
        }

        .circle {
            margin-top: 10%;
            position: absolute;
            z-index: -1;

            .animate {
                transform-origin: center;
                animation: rotation 1.5s linear;
            }

            .animate-dotted {
                transform-origin: center;
                animation: rotation 1.7s linear;
            }

            

            @keyframes rotation {
                from {
                    transform: rotate(0deg);
                } to {
                    transform: rotate(360deg);
                }
            }
        }

        
        
    .info-wrapper {
        position: absolute;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        top: 130%;
    }

    .mobile-info-wrapper {
        position: absolute;
        top: 130%;
        left: 50%;
        width: 100%;
        height: 150px;
        
        display: flex;
        justify-content: center;
        align-items: center;

        transform: translateX(-50%);

        background: rgba(0, 0, 0, 0.7);

        .info {
            align-self: center;
            
            p {
                font-size: 25px;
            }

            @media screen and (max-width: 768px) {
                border-right: none;
            }
        }
    }

    .info {
        width: 200px;
        padding: 10px;
        border-right: 2px solid white;

        &:nth-last-child(1) {
            border-right: none;
        }

        p {
            margin: 0;
            text-align: center;
        }
            
        .title {
            color: $primary_color;
            font-size: 18px;
            margin-bottom: 10px;
        }
        .value {
            color: white;
            font-size: 28px;
            font-weight: bold;

            @media screen and (max-width: 1300px) {
            font-size: 18px;
        }
        }
        .text {
            color: white;
            margin-top: -8px;
            font-size: 18px;
        }
    }

    .menu {
        position: absolute;
        left: 25%;

        @media screen and (max-width: 768px) {
            position: relative;
            display: block;
            left: 0;
        }

        li.item {
            color: #fff;
            list-style-type: none;
            font-size: 30px;
            text-transform: uppercase;

            @media screen and (max-width: 1300px) {
                font-size: 20px;
            }

            @media screen and (max-width: 768px) {
                margin: 0 !important;
                text-align: center;
                font-size: 1.8rem;

                &.active {
                    font-size: 2rem;
                }
            }

            &.active {
                color: $primary_color;
            }

            &::before {
                content: '';
                display: inline-block;
                height: 1em;
                width: 1em;
                background-image: url("../assets/images/elements/dot.png");
                background-size: contain;
                background-repeat: no-repeat;
                margin-right:1em;
                margin-top: 30px;   
                margin-bottom: -5px;

                @media screen and (max-width: 768px) {
                    margin-right: 0;
                    background-image: none;
                }
            }
        }

        
    }
        
        
    }
</style>