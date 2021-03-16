<template>
<div class="home">
  
    <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
        <div class="section custom-container text-danger" v-for="section in sections" :key="section.title">
          <span style="color: red">
  </span>
          <div class="custom-row">
            <div class="custom col">
              <div class="title" data-aos="fade-in" data-aos-duration="1500">
                <h1 data-aos="fade-right">{{ section.title }}</h1>
              </div>
              <div class="content-container" data-aos="fade-right" data-aos-duration="1500">
                <p v-if="section.alternativeDescription" v-html="section.alternativeDescription"></p>
                <p class="content" v-html="section.content"></p>
              </div>
            </div>
            <div class="custom-col" data-aos="fade-left" data-aos-duration="1500">
              <p class="description" v-html="section.description"></p>
              <div class="image"><img :style="{width: section.size}" :src="getImgUrl(section.image)" alt="modello"></div>
            </div>
          </div>
        </div>
    
  </full-page>
</div>
</template>
<script>
export default {
  name: "Highlights",
  data() {
    return {
      index: 0,
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
          title: "dettagli",
          alternativeDescription: null,
          image: "vite",
          size: "450px",
          description: "Dettagli visibili o nascosti, anche le più piccole componenti sono state sostituite per contribuire all’alleggerimento dell’auto, dai dischi freno anteriori e posteriori ai poggiapiedi del pilota e del passeggero. Solo pensando che tutte le viti in ferro originali sono state sostituite con altre in <span style='color: #FCCE21'>ergal</span> e <span style='color: #FCCE21'>titanio</span> si può intuire quanto il lavoro sia stato professionale, preciso, minuzioso.",
          content: "Una qualità del titanio è la sua resistenza alla corrosione, indispensabile per ridurre la tendenza all’ingranamento. <br><br> L’Ergal è una lega di alluminio e zinco, è la lega d'alluminio più leggera e, dal punto di vista meccanico, più resistente agli urti, agli sforzi, al peso e alla torsione."
        }
      ],
      options: {
        afterLoad(_, data) {
          const home = document.getElementsByClassName("home")[0]
          const classes = ["carrozzeria", "sedili", "dettagli"]
          
          home.classList.add(classes[data.index])
          classes.map((e, i) => {
            if (i != data.index) {
              home.classList.remove(e)
            }
          })

          if (data.index >= 1) {
            let aos = document.querySelectorAll("[data-aos]")
            aos.forEach((e) => {
              e.classList.add("aos-animate")
            })
            
          }
          
        }
      },
    }
  },

  mounted() {
    this.$refs.fullpage.init();
       
  },

  updated() {
    this.$refs.fullpage.init()
  },

  methods: {
    changeIndex(index) {
      console.log(index);
      this.index = index;
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


