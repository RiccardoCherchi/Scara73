<template>
<div class="home">
        <div class="custom-container text-danger">
          <div class="custom-row">
            <div class="custom col">
              <div id="title-container" class="animate__animated title" data-aos="fade-in" data-aos-duration="1500">
                <h1 id="title" class="animate__animated" data-aos="fade-right">{{ section.title }}</h1>
              </div>
              <div id="content" class="content-container animate__animated" data-aos="fade-right" data-aos-duration="1500">
                <p v-if="section.alternativeDescription" v-html="section.alternativeDescription"></p>
                <p class="content" v-html="section.content"></p>
              </div>
            </div>
            <div id="description" class="custom-col animate__animated" data-aos="fade-left" data-aos-duration="1500">
              <p class="description" v-html="section.description"></p>
              <div class="image"><img :style="{width: section.size}" :src="getImgUrl(section.image)" alt="modello"></div>
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
      index: 0,
      status: false,
      sections: [
        {
          title: "carrozzeria",
          description: "Le parti che compongono la carrozzeria sono state realizzate interamente in <span style='color: #FCCE21'>fibra di carbonio</span> in autoclave. Oltre ad aver guadagnato in estetica, resistenza e leggerezza, la carrozzeria vanta di materiali all’avanguardia in termini tecnologici e costruttivi.",
          image: "carrozzeria",
          size: "100% !important",
          alternativeDescription: null,
          content: "Il cofano posteriore è stato studiato e realizzato su misura con carbon scoop per garantire il massimo delle performance di estrazione aria."
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
          title: "dettagli",
          alternativeDescription: null,
          image: "vite",
          size: "450px",
          description: "Dettagli visibili o nascosti, anche le più piccole componenti sono state sostituite per contribuire all’alleggerimento dell’auto, dai dischi freno anteriori e posteriori ai poggiapiedi del pilota e del passeggero. Solo pensando che tutte le viti in ferro originali sono state sostituite con altre in <span style='color: #FCCE21'>ergal</span> e <span style='color: #FCCE21'>titanio</span> si può intuire quanto il lavoro sia stato professionale, preciso, minuzioso.",
          content: "Una qualità del titanio è la sua resistenza alla corrosione, indispensabile per ridurre la tendenza all’ingranamento. <br><br> L’Ergal è una lega di alluminio e zinco, è la lega d'alluminio più leggera e, dal punto di vista meccanico, più resistente agli urti, agli sforzi, al peso e alla torsione."
        }
      ],
      
      // options: {
      //   afterLoad(_, data) {
      //     const home = document.getElementsByClassName("home")[0]
      //     const classes = ["carrozzeria", "sedili", "dettagli"]
          
      //     home.classList.add(classes[data.index])
      //     classes.map((e, i) => {
      //       if (i != data.index) {
      //         home.classList.remove(e)
      //       }
      //     })

      //     if (data.index >= 1) {
      //       let aos = document.querySelectorAll("[data-aos]")
      //       aos.forEach((e) => {
      //         e.classList.add("aos-animate")
      //       })
            
      //     }
          
      //   }
      // },
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
      }, 2000);
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

    initAnimate(direction) {
      this.animate(direction, true)

      setTimeout(() => {
        this.animate(direction)
      }, 2000)
    },



    setIndex(i, direction) {
      if (i != this.index) {
        this.initAnimate(direction)  
      
        setTimeout(() => {
          this.index = i
        }, 500)
      }
    },

    animate(direction, exit = false) {

      const container = document.getElementsByClassName("custom-container")[0]

      if (exit) {
        if (direction) {
          console.log("next")
          container.classList.add("next-slide-animation-left")
          setTimeout(() => {
            container.classList.remove("next-slide-animation-left")
            container.classList.add("next-slide-animation-right")
          }, 750)
        } else {
          console.log("back")
          container.classList.add("back-slide-animation-left")
          setTimeout(() => {
            container.classList.remove("back-slide-animation-left")
            container.classList.add("back-slide-animation-right")
          }, 750)
        }
        
      } else {
        container.classList.remove("next-slide-animation-right")
        container.classList.remove("back-slide-animation-right")
      }

      console.log(exit)
    },

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
  }

  .custom-row {
    display: grid;
    grid-template-columns: 0.7fr auto;
    grid-gap: 10%;
  }

  .next-slide-animation-left {
    animation: next-slider-left 1000ms;

    @keyframes next-slider-left {
      to {
        transform: translateX(-200%);
      }
    }
  }

  .next-slide-animation-right {
    animation: next-slider-right 1000ms;

    @keyframes next-slider-right {
      from {
        transform: translateX(200%);
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
        transform: translateX(200%);
      }
    }
  }

  .back-slide-animation-right {
    animation: back-slider-right 1000ms;

    @keyframes back-slider-right {
      from {
        transform: translateX(-200%);
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
      }
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
  }
</style>


