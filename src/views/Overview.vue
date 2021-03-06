<template>
  <div class="home">
    <div class="title">
        Cerchi forgiati di alta qualità per raggiungere il minor peso possibile con la maggior resistenza
    </div>
  </div>
</template>

<script>
export default {
    name: "Overview",
    data() {

    }
}
</script>

<style>
    .home {
        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
        min-height: 100vh; /* These two lines are counted as one :-)       */

        background-image: url("../assets/images/backgrounds/overview.jpg");
        background-position: 0 50%;
    }

    .title {
        position: absolute;
        top: 40%;
        left: 25%;

        width: 400px;

        color: white;
        font-size: 25px;
        font-weight: bold;
    }
</style>