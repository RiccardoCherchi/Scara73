<template>
<div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
        <div class="section custom-container text-danger" v-for="section in sections" :key="section.title">
          <div class="custom-row">
            <div class="custom col">
              <div class="title">
                <h1>{{ section.title }}</h1>
              </div>
              <div class="content-container">
                <p v-if="section.alternativeDescription" v-html="section.alternativeDescription"></p>
                <p class="content" v-html="section.content"></p>
              </div>
            </div>
            <div class="custom-col">
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
      sections: [
        {
          title: "CARROZZERIA",
          description: "Le parti che compongono la carrozzeria sono state realizzate interamente in <span style='color: #FCCE21'>fibra di carbonio</span> in autoclave. Oltre ad aver guadagnato in estetica, resistenza e leggerezza, la carrozzeria vanta di materiali all’avanguardia in termini tecnologici e costruttivi.",
          image: "carrozzeria",
          size: "100% !important",
          alternativeDescription: null,
          content: "Il cofano posteriore è stato studiato e realizzato su misura con carbon scoop per garantire il massimo delle performance di estrazione aria."
        },
        {
          title: "SEDILI",
          description: null,
          image: "sedili",
          size: "450px",
          alternativeDescription: "I sedili sono stati realizzati in <span style='color: #FCCE21'>carbonio</span> e <span style='color: #FCCE21'>Alcantara</span>, il peso è di 2,5kg l’uno.",
          content: "L’Alcantara® è un materiale Made in Italy, uno dei più pregiati per le finiture delle auto."
        },
        {
          title: "DETTAGLI",
          alternativeDescription: null,
          image: "vite",
          size: "450px",
          description: "Dettagli visibili o nascosti, anche le più piccole componenti sono state sostituite per contribuire all’alleggerimento dell’auto, dai dischi freno anteriori e posteriori ai poggiapiedi del pilota e del passeggero. Solo pensando che tutte le viti in ferro originali sono state sostituite con altre in <span style='color: #FCCE21'>ergal</span> e <span style='color: #FCCE21'>titanio</span> si può intuire quanto il lavoro sia stato professionale, preciso, minuzioso.",
          content: "Una qualità del titanio è la sua resistenza alla corrosione, indispensabile per ridurre la tendenza all’ingranamento. <br><br> L’Ergal è una lega di alluminio e zinco, è la lega d'alluminio più leggera e, dal punto di vista meccanico, più resistente agli urti, agli sforzi, al peso e alla torsione."
        }
      ],
      options: {
      }
    }
  },

  mounted() {
    this.$refs.fullpage.init();
       
  },

  updated() {
    this.$refs.fullpage.init()
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
  @import "../assets/scss/variables.scss";

  .home {
    min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
    min-height: 100vh; /* These two lines are counted as one :-)       */

    padding: 0 5%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../assets/images/backgrounds/carrozzeria.jpg");
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


