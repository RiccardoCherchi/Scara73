<template>
  <div class="home">
    <div class="container">
      <div class="custom-row">
        <div class="custom-col">
          <div class="title">
            <h1>{{ sections[currentIndex].title }}</h1>
          </div>
          <div>
            <p v-if="sections[currentIndex].alternativeDescription" v-html="sections[currentIndex].alternativeDescription"></p>
            <p class="content" v-html="sections[currentIndex].content"></p>
          </div>

        </div>
        <div class="custom-col">
          <p class="description" v-html="sections[currentIndex].description"></p>
          <div class="image"><img :style="{width: sections[currentIndex].size}" :src="getImgUrl(sections[currentIndex].image)" alt="modello"></div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-6">
          <div class="title">
            <div class="circle" />
            <div class="circle-small" />
            <h1>{{ sections[currentIndex].title }}</h1>
          </div>
        </div>
        <div class="col-md-6">
          <p class="description" v-html="sections[currentIndex].description"></p>
        </div>
      </div> -->
      <!-- <div class="row align-items-end">
        <div class="col-md-3">
          <p class="content" v-html="sections[currentIndex].content"></p>
        </div>
        <div class="col-md-9">
          <div class="image"><img :src="getImgUrl(sections[currentIndex].image)" alt="modello"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Highlights",
  data() {
    return {
      currentIndex: 0,
      sections: [
        {
          title: "CARROZZERIA",
          description: "Le parti che compongono la carrozzeria sono state realizzate interamente in <span style='color: #FCCE21'>fibra di carbonio</span> in autoclave. Oltre ad aver guadagnato in estetica, resistenza e leggerezza, la carrozzeria vanta di materiali all’avanguardia in termini tecnologici e costruttivi.",
          image: "carrozzeria",
          size: "800px",
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
      ]
    }
  },

  created () {
    window.addEventListener('wheel', this.handleScroll);
  },
  
  destroyed () {
    window.addEventListener('wheel', this.handleScroll);
  },

  methods: {
    handleScroll(event) {
      if (event.deltaY < 0) {
        const index =  Math.min(this.currentIndex + 1, this.sections.length - 1);
        this.currentIndex = index;
      } else {
        if (this.currentIndex > 0) {
          this.currentIndex --;
        }
      }
    },
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

    display: flex;
    align-items: center;
    background-image: url("../assets/images/backgrounds/carrozzeria.jpg");
  }

  .custom-col {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-gap: 10%;
    justify-content: center;
  }

  .custom-row {
    display: grid;
    grid-template-columns: 0.7fr auto;
    grid-gap: 10%;
    justify-content: center;
  }

  img {
    justify-self: end;
  }

  .container {

    .row {
      margin-top: 5%;
    }

    .content {
      color: $secondary_text;
      font-size: 18px;
    }

    p {
      color: #fff;
      font-size: 24px;

    }

    .title {
      align-self: start;
      background-image: url("../assets/images/elements/circle.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 400px;
      width: 400px;

      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        color: #fff;
        font-size: 5rem;
      }
    }
  }
</style>


