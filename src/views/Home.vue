<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="title">
            <h1 v-html="sections[currentIndex].title"></h1>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="content">
           <p v-html="sections[currentIndex].content"></p>
          </div>
        </div>
      </div>
      <div class="statistics" v-if="sections[currentIndex].statistics">
        <div class="statistic" :class="{'important': statistic.important}" v-for="statistic in sections[currentIndex].statistics" :key="statistic.value" >
          <p class="title" v-html="statistic.title"></p>
          <p class="value">{{ statistic.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      currentIndex: 0,
      sections: [
        {
          title: "MASSIME <br /> PERFORMANCE",
          content: "Per garantire il massimo delle performance possibili la <span style='color: #FCCE21'>mappa motore</span> e la <span style='color: #FCCE21'>mappa cambio</span> sono state sviluppate direttamente sull’auto. <br><br><span style='color: #FCCE21'>L’intercooler maggiorato</span> aumenta la pressione di sovralimentazione mantenedo neutrale l’aumento della temperatura che ne deriverebbe. <br><br>Il downpipe originale è stato sostituito con un <span style='color: #FCCE21'>downpipe con kat 200celle</span> per migliorare ulteriormente le prestazioni dell’auto."
        },
        {
          title: "MINIMO <br /> PESO",
          content: "I vantaggi di un’auto alleggerita sono molteplici: migliora l’accelerazione, la frenata, l’inserimento in curva, si ottimizzano i consumi e aumenta la velocità di percorrenza. Per",
          statistics: [
            {
              title: "BATTERIA <br>16,1 kg",
              value: "1,6 kg",
              important: false
            },
            {
              title: "CERCHI <br>39,6 kg",
              value: "27 kg",
              important: false
            },
            {
              title: "SEDILI <br>18,3 kg",
              value: "5 kg",
              important: false
            },
            {
              title: "PORTE <br>46,2 kg",
              value: "17 kg",
              important: false
            },
            {
              title: "PESO REALE AUTO <br>960 kg",
              value: "778,2 kg",
              important: true
            }
          ]
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
  background-image: url("../assets/images/backgrounds/cofano.jpg");
}

.container{

  .statistics {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 10%;

    .statistic {
      padding: 20px;
      margin: 15px;
      p {
        margin: 0;
      }

      .title {
        font-size: 20px;
        color: $primary_color;
        text-align: center;
      }

      .value {
        color: #fff;
        font-weight: bold;
        font-size: 30px;
        text-align: center;
      }

      &.important {
        background-color: $primary_color;
        p {
          color: #000;
          &.value {
            font-weight: 500;
          }
        }        
      }
    }
  }

  .title {
    h1 {
      color: $primary_color;
      font-weight: 400;
      font-size: 4rem;
    }
    
  }

  .content {
    color: white;
    font-size: 24px;
  }
}
  
</style>
