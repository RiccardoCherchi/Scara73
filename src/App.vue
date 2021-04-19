<template>
  <div id="app">

    <div id="openNavbarButton" class="open d-md-none">
      <i class="bx bx-menu"></i>
    </div>

    <div id="mobile-nav">
      <div id="closeButton" class="close">
        <i class='bx bx-x'></i>
      </div>
      <div class="items">
        <ul class="links">
          <li class="link" v-for="route in routes" :key="route.name">
            <router-link :to="route.to">{{ route.name }}</router-link>
          </li>
        </ul>
      </div>
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
        // {
        //   name: "360°",
        //   to: "#"
        // },
        {
          name: "CONTATTI",
          to: "/contattaci"
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

    const mobileNav = document.getElementById("mobile-nav")

    // open
    const openNavbarButton = document.getElementById("openNavbarButton")
    
    openNavbarButton.addEventListener("click", () => {
      mobileNav.classList.add("open-animation")
    })

    // close
    const closeButton = document.getElementById("closeButton")
    const links = document.getElementsByClassName("link")

    closeButton.addEventListener("click", () => {
      mobileNav.classList.remove("open-animation")
    })
    links.forEach((e) => {
      e.addEventListener("click", () => {
      mobileNav.classList.remove("open-animation")
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/variables.scss";

#nav {
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 8%;

  background-color: $bg_color;


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

.open {
  position: absolute;
  right: 10px;
  z-index: 100;

  color: #acacac;
  font-size: 50px;
}

#mobile-nav {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;

  background-color: $bg_color;
  
  transition: transform 500ms ease;
  transform: translateX(100%);

  &.open-animation {
    transform: translateX(0);
  }

  .close {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;

    i {
      font-size: 50px;
      color: white;
    }
  }

  li.link {
    list-style-type: none;
    margin: 25px 0;

    a {
      color: white;
      text-decoration: none;
      text-align: center;
      font-size: 30px;

      &.router-link-exact-active {
        color: orange;
      }
    }
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
}

</style>

