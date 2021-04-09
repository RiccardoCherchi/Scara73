<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">
    <div class="section text-danger" v-for="(section, i) in sections" :key="i">
      <div class="container">
        <div class="row">
          <div class="col-xl-6">
            <div class="title" data-aos="fade-right" data-aos-duration="1500">
              <h1 v-html="section.title"></h1>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="content" data-aos="fade-left" data-aos-duration="1500">
            <p v-html="section.content"></p>
            </div>
          </div>
        </div>
        <div class="statistics" v-if="section.statistics">
            <div class="statistic" :class="{'important': statistic.important}" v-for="(statistic, i) in section.statistics" :key="i" data-aos="fade-up" :data-aos-duration="500 * i">
              <p class="title" v-html="statistic.title"></p>
              <p class="value">{{ statistic.value }}</p>
            </div>
        </div>
    </div>
    </div>
  </full-page>
  <div id="arrow" class="arrow">
    <span>scroll</span>
    <div class="arrow-svg"></div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      index: 0,
      sections: [
        {
          title: "MASSIME <br /> PERFORMANCE",
          content: "Per garantire il massimo delle performance possibili la <span style='color: #FCCE21'>mappa motore</span> e la <span style='color: #FCCE21'>mappa cambio</span> sono state sviluppate direttamente sull’auto. <br><br> <span style='color: #FCCE21'>L’intercooler maggiorato</span> riesce a tenere sotto controllo le temperature che vengono generate dall'aumento di prestazioni. Lo stesso e' stato sviluppato con massa radiante motorsport con vaschetta inferiore realizzata di CNC e vaschetta superiore in carbonio liscia dentro per avere una fluidodinamica eccelsa e una efficienza termica ineguagliabile. <br><br>Il downpipe originale è stato sostituito con un <span style='color: #FCCE21'>downpipe con kat 200celle</span> per migliorare ulteriormente le prestazioni dell’auto."
        },
        {
          title: "MINIMO <br /> PESO",
          content: "I vantaggi di un’auto alleggerita sono molteplici:migliora l’accelerazione, la frenata, l’inserimento in curva, si ottimizzano i consumi e aumenta la velocità di percorrenza. Per arrivare a questi risultati sono state sostituite / rimosse gran parte delle componenti. Ecco i dati più rilevanti:",
          statistics: [
            {
              title: "BATTERIA <br>16,1 kg",
              value: "1,6 kg",
              important: false
            },
            {
              title: "CERCHI <br>39,6 kg",
              value: "13.4 kg",
              important: false
            },
            {
              title: "SEDILI <br>18,3 kg",
              value: "2.5 kg",
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
      ],
      options: {
        afterLoad(_, data) {

          if (data.index == 1) {
            document.getElementById("arrow").classList.add("arrow-hidden")
          } else {
            document.getElementById("arrow").classList.remove("arrow-hidden")
          }

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
    // this.$refs.fullpage.init();

  },
  updated() {
    // this.$refs.fullpage.init()

  },
  
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

  // max-width: 360px;
}

.container{

  .statistics {
    display: flex;
    justify-content: space-around;
    margin-top: 10%;

    overflow: hidden;
    white-space: nowrap;

    @media screen and (max-width: 992px) {
      display: block;
      overflow-x: scroll;
    }

    .statistic {
      display: inline-block;
      padding: 20px;
      margin: 20px;
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
      
      @media screen and (max-width: 576px) {
        font-size: 2.5rem;
      }
    }
    
  }

  .content {
    color: white;
    font-size: 24px;

    @media screen and (max-width: 576px) {
      font-size: 18px;
    }
  }
}

.arrow {
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: arrow 2.5s infinite ease-in-out;

  @keyframes arrow {
    to {
      top: 87%;
      opacity: 0;
    }
  }

  &.arrow-hidden {
    display: none;
  }

  

  span {
    display: block;
    color: $primary_color;
    font-size: 18px;
  }

  .arrow-svg {
    display: block;
    margin: 0 auto;
    border-right: 3px solid $primary_color;
    border-bottom: 3px solid $primary_color;
    width: 20px; height: 20px;
    transform: rotate(45deg);
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
}
  
</style>
