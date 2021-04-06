<template>
  <div class="home">
      <div class="content">
        <img :src="getImgUrl('title')" alt="title" class="title">
        <p class="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, illum iure commodi, qui nihil accusantium deleniti maiores nam, distinctio soluta repellat fugit repudiandae necessitatibus! Unde, consequatur doloremque iste quidem eos hic laboriosam odit repellendus itaque vel harum reprehenderit blanditiis sunt provident quisquam laudantium, accusamus ex voluptatibus, excepturi debitis magni dolor. Ullam dignissimos atque nesciunt aperiam ipsum sint voluptatem tenetur rem non repellendus minima, velit incidunt harum sequi earum provident praesentium deleniti placeat repellat culpa animi itaque eum consequuntur. In dignissimos vitae exercitationem consectetur labore voluptatem fugiat amet laudantium ex nobis! Corrupti voluptatibus modi at reprehenderit atque officiis odio ex incidunt?
        </p>
      </div>
  </div>
</template>

<script>
export default {
    name: "Presentation",
    data() {
        return {}
    },

    methods: {
        getImgUrl(image) {
            var images = require.context('@/assets/images/', false, /\.png$/)
            return images('./' + image + ".png")
        },
    }
}
</script>

<style lang="scss" scoped>

    .home {
        background-image: url('../assets/images/backgrounds/preview.jpg');
        background-position: center 40%;
        background-size: cover;

        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
        min-height: 100vh; /* These two lines are counted as one :-)       */
    }

    .content {
        width: 80%;
        margin: 0 auto;
        padding-top: 5%;
    }

    .title {
        width: 40%;
    }

    .description {
        margin-top: 3%;
        color: white;
        width: 40%;
        font-size: 20px;
    }

    @media screen and (max-width: 1300px) {

        .description {
            margin-top: 3%;
            color: white;
            width: 80%;
            font-size: 20px;
        }

        .title {
            width: 60%;
        }
    }

    @media screen and (max-width: 768px) {
            .content {
                width: 100%;
                padding-top: 20px;
            }

            .description {
                width: 100%;
            }

            .title {
                width: 100%;
            }
        }

</style>