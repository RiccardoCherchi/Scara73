<template>
  <div class="home" :class="{'on' : start}">
    <div class="custom-container">
        <img @click="powerOn" class="start" :src="start ? getImgUrl('start-on.png') : getImgUrl('start-off.png')" alt="start button">
        <img class="circle" :src="getImgUrl('info-circle.png')" alt="info circle">

        <div class="menu">
            <li class="item" :style="{marginLeft: `-${index}rem`}" :class="{'active': item.active}" v-for="(item, index) in menu" :key="item.title">{{ item.title }}</li>
        </div>

        <div class="info-wrapper">
            <div class="info" v-for="item in info" :key="item.title">
                <p class="title">{{ item.title }}</p>
                <p class="value">{{ item.value }}</p>
                <p class="text">{{ item.text }}</p>
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
            menu: [
                {
                    title: "panoramica",
                    active: true
                },
                {
                    title: "performance",
                    active: false
                },
                {
                    title: "specifiche",
                    active: false
                }
            ],
            info: [
                {
                    title: "peso a secco",
                    value: "xxx kg",
                },
                {
                    title: "motore",
                    value: "1742 cc",
                    text: "sovralimentato"
                },
                {
                    title: "potenza",
                    value: "xxx cv",
                },
                {
                    title: "coppia",
                    value: "xxx Nm",
                },
            ]
        }
    },

    methods: {

        getImgUrl(image) {
        var images = require.context('@/assets/images/elements/', false)
        return images('./' + image)
        },

        powerOn() {
            this.start = !this.start;
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

        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
        min-height: 100vh; /* These two lines are counted as one :-)       */

        &.on {
            background-image: url('../assets/images/backgrounds/info-light.jpg');
        }
    }

    .custom-container {
        position: absolute;
        top: 38%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;


        display: flex;

        justify-content: center;
        align-items: center;

        .start {
            width: 15%;
        }

        .circle {
            margin-top: 10%;
            position: absolute;
            width: 50%;
            z-index: -1;
        }
            
        .info-wrapper {
            position: absolute;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;

            top: 130%;

            .info {
                padding: 10px;
                border-right: 2px white solid;

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
                font-size: 30px;
                font-weight: bold;

                @media screen and (max-width: 1300px) {
                font-size: 20px;
            }
            }
            .text {
                color: white;
                margin-top: -8px;
                font-size: 18px;
            }
        }
    }

    .menu {
        position: absolute;
        left: 25%;
        li.item {
            color: #fff;
            list-style-type: none;
            font-size: 30px;
            text-transform: uppercase;

            @media screen and (max-width: 1300px) {
                font-size: 20px;
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
            }
        }

        
    }
        
        
    }
</style>