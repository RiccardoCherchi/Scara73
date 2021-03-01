<template>
  <div class="home">
    <div class="container">
      <div class="row">
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
      </div>
      <div class="row align-items-end">
        <div class="col-md-3">
          <p class="content" v-html="sections[currentIndex].content"></p>
        </div>
        <div class="col-md-9">
          <div class="image"><img :src="getImgUrl(sections[currentIndex].image)" alt="modello"></div>
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
      currentIndex: 0,
      sections: [
        {
          title: "CARROZZERIA",
          description: "Le parti che compongono la carrozzeria sono state realizzate interamente in <span style='color: #FCCE21'>fibra di carbonio</span> in autoclave. Oltre ad aver guadagnato in estetica, resistenza e leggerezza, la carrozzeria vanta di materiali all’avanguardia in termini tecnologici e costruttivi.",
          image: "carrozzeria",
          content: "Il cofano posteriore è stato studiato e realizzato su misura con carbon scoop per garantire il massimo delle performance di estrazione aria."
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
      h1 {
        color: #fff;
        font-size: 5rem;
      }
      .circle {
        position: absolute;
        width: 370px;
        height: 370px;
        left: 20%;
        top: 10%;
        // background-color: blue;
        border-radius: 500px;
        border: 1px solid white;
        
      }

      .circle-small {
        position: absolute;
        width: 185px;
        height: 185px;
        left: 25%;
        top: 20%;
        // background-color: blue;
        border-radius: 500px;
        border: 1px solid $secondary_text;
      }
    }
  }
</style>


