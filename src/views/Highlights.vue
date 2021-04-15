<template>
<div class="home" :class="section.title">
        <div class="custom-container text-danger">
          <div class="custom-row">
            <div class="custom col">
              <div id="title-container" class="title" data-aos="fade-in" data-aos-duration="1500">
                <h1 id="title" data-aos="fade-right">{{ section.title }}</h1>
              </div>
              <div class="mobile-title d-block d-md-none" data-aos="fade-in">
                <h1 id="title">{{ section.title }}</h1>
              </div>
              <div id="content" class="content-container " data-aos="fade-right" data-aos-duration="1500">
                <p v-if="section.alternativeDescription" v-html="section.alternativeDescription"></p>
                <p class="content" v-html="section.content"></p>
              </div>
            </div>
            <div id="description" class="custom-col" data-aos="fade-left" data-aos-duration="1500">
              <p class="description" v-html="section.description"></p>
              <div class="image"><img :style="{width: section.size}" :src="getImgUrl(section.image)" alt="modello"></div>
              <p class="mobile-content d-block d-md-none" v-html="section.content"></p>
            </div>
          </div>
        </div>
</div>
</template>
<script>
export default {
  name: "Highlights",
  data() {
    return {
      index: 1,
      status: false,
      sections: [
        {
          title: "carrozzeria",
          description: "Le parti che compongono la carrozzeria sono state realizzate interamente in <span style='color: #FCCE21'>fibra di carbonio</span> in autoclave. Oltre ad aver guadagnato in estetica, resistenza e leggerezza, la carrozzeria vanta di materiali all’avanguardia in termini tecnologici e costruttivi.",
          image: "carrozzeria",
          size: "100% !important",
          alternativeDescription: null,
          content: "Il cofano posteriore è stato integrato con uno scoop in carbonio molto leggero e appositamente studiato per avere un'ottima estrazione di aria. Riducendo il peso delle parti lontane dal suolo si abbassa il baricentro dell'auto con conseguente miglioramento dinamico dell'auto in ogni condizione."
        },
        {
          title: "sedili",
          description: null,
          image: "sedili",
          size: "450px",
          alternativeDescription: "I sedili sono stati realizzati in <span style='color: #FCCE21'>carbonio</span> e <span style='color: #FCCE21'>Alcantara</span>, il peso è di 2,5kg l’uno.",
          content: "L’Alcantara® è un materiale Made in Italy, uno dei più pregiati per le finiture delle auto."
        },
        {
          title: "finale",
          description: "Il finale dell'auto è realtizzato in carbonio <span style='color: #FCCE21'>titanio</span> a 3 uscite e saldato a TIG in camera protetta",
          image: "finale",
          size: "450px",
          alternativeDescription: null,
          content: "Il titanio è estremamente leggero, resistente alla corrosione, si caratterizza per la sua elevata resistenza meccanica e la sua capacità di sostenere temperature estreme.",             
        },
        {
          title: "sospensioni",
          description: "Il massimo delle sospensioni non poteva essere altro che carbonio <span style='color: #FCCE21'>Ohlins</span>. 2 vie (compressione ed estensione separate), un carico di molle dedicato al peso dell'auto e una taratura appropriata. La collaborazione con Ohlins, permette di avere un prodotto \"cucito\" alla perfezione sull'auto.",
          image: "sospensioni",
          size: "400px",
          alternativeDescription: null,
          content: "",           
        },
        {
          title: "cerchi",
          description: "La scelta è caduta su progettare e produrre dei cerchi forgiati realizzati con Tornio e Fresa a controllo numerico per avere il minor peso e resistenza possibil",
          image: "cerchi",
          size: "400px",
          alternativeDescription: null,
          content: "",           
        },
        {
          title: "dettagli",
          alternativeDescription: null,
          image: "vite",
          size: "450px",
          description: "Dettagli visibili o nascosti, anche le più piccole componenti sono state sostituite per contribuire all’alleggerimento dell’auto, dai dischi freno anteriori e posteriori ai poggiapiedi del pilota e del passeggero. Solo pensando che tutte le viti in ferro originali sono state sostituite con altre in <span style='color: #FCCE21'>ergal</span> e <span style='color: #FCCE21'>titanio</span> si può intuire quanto il lavoro sia stato professionale, preciso, minuzioso.",
          content: "Le qualità del titanio sono la sua resistenza alla corrosione e la sua leggerezza con pari resistenza a quella dell'acciaio <br><br> L’Ergal è una lega di alluminio e zinco, è la lega d'alluminio più leggera e, dal punto di vista meccanico, più resistente agli urti, agli sforzi, al peso e alla torsione."
        }
      ],
    }
  },

  computed: {
    section() {
      return this.sections[this.index];
    }
  },

  mounted() {
    // PC
    window.addEventListener("wheel", (e) => {this.handleScroll(e.deltaY > 0)});

    // Touch
    let start;

    window.addEventListener("touchstart", (e) => {
      start = e.changedTouches[0];
    })
    window.addEventListener("touchend", (e) => {
      this.handleScroll(e.changedTouches[0].screenY - start.screenY < 0)
    })
  },

  destroyed() {
    window.removeEventListener("wheel");
    window.removeEventListener("touchstart");
    window.removeEventListener("touchend");
  },

  methods: {

    timedCount() {
      setTimeout(() => {
        this.status = false;
      }, 1000);
    },

    startCount() {
      if (!this.status) {
        this.status = true;
        this.timedCount();
      }
    },

    handleScroll(direction) {

      
    if (direction) {
      if (!this.status) {
        const new_index = Math.min(this.sections.length - 1, this.index + 1)
        this.setIndex(new_index, direction)
        // console.log("next: " + new_index)
        this.startCount();
      }
    } else {
      if (!this.status) {
        const new_index = Math.max(this.index - 1, 0)
        this.setIndex(new_index, direction)
        // console.log("back: " + new_index)
        this.startCount();
      }
    }
      
    },

    setIndex(i) {
      if (i != this.index) {
        // this.initAnimate(direction)  
      
        setTimeout(() => {
          this.index = i
        }, 700)
      }
    },

    // initAnimate(direction) {
    //   this.animate(direction, true)

    //   setTimeout(() => {
    //     this.animate(direction)
    //   }, 2000)
    // },

    // animate(direction, exit = false) {

    //   const container = document.getElementsByClassName("custom-container")[0]

    //   if (exit) {
    //     if (direction) {
    //       console.log("next")
    //       container.classList.add("next-slide-animation-left")
    //       setTimeout(() => {
    //         container.classList.remove("next-slide-animation-left")
    //         container.classList.add("next-slide-animation-right")
    //       }, 1000)
    //     } else {
    //       console.log("back")
    //       container.classList.add("back-slide-animation-left")
    //       setTimeout(() => {
    //         container.classList.remove("back-slide-animation-left")
    //         container.classList.add("back-slide-animation-right")
    //       }, 1000)
    //     }
        
    //   } else {
    //     container.classList.remove("next-slide-animation-right")
    //     container.classList.remove("back-slide-animation-right")
    //   }

    //   console.log(exit)
    // },

    getImgUrl(image) {
      var images = require.context('@/assets/images/models/', false, /\.png$/)
      return images('./' + image + ".png")
    },
    getBgImgUrl(image) {
      var images = require.context('@/assets/images/backgrounds/', false, /\.jpg$/)
      return images('./' + image + ".jpg")
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables.scss";

  .home {
    min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */

    padding: 0 5%;

    display: flex;
    align-items: center;
    justify-content: center;

    &.carrozzeria {
      background-image: url("../assets/images/backgrounds/carrozzeria.jpg");
    }

    &.sedili {
      background-image: url("../assets/images/backgrounds/carrozzeria.jpg");
    }

    &.finale {
      background-image: url("../assets/images/backgrounds/carrozzeria.jpg");
    }

    &.sospensioni {
      background-image: url("../assets/images/backgrounds/carrozzeria.jpg");
    }

    &.dettagli {
      background-image: url("../assets/images/backgrounds/dettagli.jpg");

      &::before {
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        background-image: url("../assets/images/backgrounds/carrozzeria.jpg");
        opacity: 0;
        animation: opacity 2s;

        @keyframes opacity {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      }
    }
  }

  .custom-col {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-gap: 10%;

    @media screen and (max-width: 768px) {
      grid-template-rows: 0.5fr auto 1fr 1fr;
      grid-gap: 2%;
    }
  }

  .custom-row {
    display: grid;
    grid-template-columns: 0.7fr auto;
    grid-gap: 10%;

    @media screen and (max-width: 768px) {
      grid-template-columns: auto;
      grid-gap: 0;
    }
  }

  .next-slide-animation-left {
    animation: next-slider-left 1000ms;

    @keyframes next-slider-left {
      to {
        transform: translateX(-120%);
      }
    }
  }

  .next-slide-animation-right {
    animation: next-slider-right 1000ms;

    @keyframes next-slider-right {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
  }

  .back-slide-animation-left {
    animation: back-slider-left 1000ms;

    @keyframes back-slider-left {
      to {
        transform: translateX(100%);
      }
    }
  }

  .back-slide-animation-right {
    animation: back-slider-right 1000ms;

    @keyframes back-slider-right {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }
  }

  .custom-container {
    width: 90%;
    margin: 0 auto;

    img {
      @media screen and (max-width: 1300px) {
        width: 300px !important;
      }
    }

    .row {
      margin-top: 5%;
    }

    .content-container {
      margin-top: 15%;
      
      @media screen and (max-width: 1300px) {
        margin-top: 5%;
      }

      .content {
        color: $secondary_text;
        font-size: 18px;

        @media screen and (max-width: 1300px) {
          font-size: 14px;
        }

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }

    .mobile-content {
      color: $secondary_text;
      font-size: 18px;
    }

    p {
      color: #fff;
      font-size: 24px;

      @media screen and (max-width: 1300px) {
        font-size: 18px;
      }
    }

    .title {
      align-self: start;
      background-image: url("../assets/images/elements/circle.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 400px;
      width: 400px;

      @media screen and (max-width: 1300px) {
        height: 280px;
        width: 280px;
        margin-top: 5%;
      }

      @media screen and (max-width: 768px) {
        display: none;
      }

      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        color: #fff;
        font-size: 3.5rem;

        @media (max-width: 1300px) {
          font-size: 2rem;
        }
      }
    }

    .mobile-title {
      h1 {
        color: #fff;
        font-size: 3rem;
      }
    }
  }
</style>


