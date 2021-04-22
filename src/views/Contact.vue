<template>
  <div class="home">
    <div class="row">
        <div class="pt-5 col-lg-6 info">
            <h1>CONTATTI</h1>
            <p>Scaravelli Ing. Enrico</p>
            <p>Via Concezione 20/b 46100, Mantova (MN) IT</p>
            <p>P.IVA 02312950203</p>
            <p class="email"><a href="mailto:info@scara73.com">info@scara73.com</a></p>
            <div class="socials">
                <span><i class="bx bxl-instagram"></i></span>
                <span><i class="bx bxl-facebook"></i></span>
            </div>
        </div>
        <div class="col-lg-6">
            <form action="#" method="POST" class="contact-form">
                <input required type="text" name="name" id="name" placeholder="nome">
                <input required type="text" name="surname" id="surname" placeholder="cognome">
                <input required type="email" name="email" id="email" placeholder="email">
                <textarea required name="message" id="message" cols="30" rows="10" placeholder="messaggio"></textarea>
                <span class="privacy"><input required type="checkbox" name="privacy" id="privacy"> Ho letto e accetto i termini della <a href="#">privacy policy</a></span>
                <button type="submit">INVIA</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables.scss";

    .home {
        min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
        min-height: 100vh; /* These two lines are counted as one :-)       */
        background-color: #000;    

        background-image: url("../assets/images/backgrounds/contatti.jpg");
        background-size: cover;
        background-position: center;

        overflow-x: hidden;

        padding: 10% 15%;

        @media screen and (max-width: 768px) {
            padding: 0;
            margin: 0 10px;
        }
    }

    .info {
        color: white;
        font-size: 0.9rem;
        h1 {
            font-size: 5rem;
            color: $primary_color;
            margin-bottom: 5%;
            font-weight: 200;
        }
        .email > a {
            color: white;
            text-decoration: none;
            font-size: 1.3rem;
        }
        .socials {
            i {
                color: black;
                font-size: 20px;
                background-color: $primary_color;
                border-radius: 5rem;
                padding: 3px;
                margin: 5px;
            }
        }

        @media screen and (max-width: 992px) {
            text-align: center;
        }
    }

    form {
        width: 100%;
        margin: 0 auto;
        display: grid;

        input, textarea {
            background: $bg_color;
            color: #fff;
            border: none;
            outline: none;

            margin-top: 20px;
            padding: 10px;
        }
        .privacy {
            color: white;
            input {
                margin: 20px 10px;
            }
            a {
                color: $primary_color;
                text-decoration: none;
            }
        }

        button {
            background-color: $primary_color;
            border: none;
            outline: none;
            width: 50%;
            margin: 15px auto;
            padding: 5px;
        }

        @media screen and (min-width: 768px) {
            width: 70%;
        }

        @media screen and (min-width: 992px) {
            width: 100%;
        }

    }
</style>