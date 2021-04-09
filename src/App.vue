<template>
  <div id="app">
    <div id="mobile-nav">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button id="navButton" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="route in routes" :key="route.name">
                <router-link class="nav-link" :to="route.to">{{ route.name }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
    <div id="nav">
      <span v-for="route in routes" :key="route.name">
        <router-link :to="route.to">{{ route.name }}</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      routes: [
        {
          name: "PRESENTAZIONE",
          to: "/presentazione"
        },
        {
          name: "ALFA 4C",
          to: "/home"
        },
        {
          name: "HIGHLIGHTS",
          to: "/highlights"
        },
        {
          name: "PANORAMICA",
          to: "/panoramica"
        },
        {
          name: "SCHEDA TECNICA",
          to: "/scheda-tecnica"
        },
        {
          name: "GALLERY",
          to: "/galleria"
        },
        {
          name: "360°",
          to: "#"
        },
        {
          name: "CONTATTI",
          to: "#"
        }
      ]
    }
  },

  mounted() {
    const items = document.getElementsByClassName("nav-item")

    items.forEach(e => {
      e.addEventListener("click", () => {
        document.getElementById("navButton").click()
      })
    });
  }
}
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 8%;

  background-color: #353535;


  a {
    padding-left: 9px;
    
    color: #fff;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      border-left: 3px solid orange;
      padding: 1px 0 1px 6px;
    }

    &.router-link-exact-active {
      border-left: 3px solid orange;
      padding: 1px 0 1px 6px;
    }
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
}

#mobile-nav {
  width: 100%;

  background-color: rgba(0,0,0,1);

  .navbar-toggler {
    background-color: black;

    border: none;
    outline: 0;

    &:focus {
      outline: 0;
      border: 0;
      box-shadow: none;
    }
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
}

</style>

