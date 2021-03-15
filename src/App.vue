<template>
  <div id="app">
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
          to: "#"
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
}

</style>
