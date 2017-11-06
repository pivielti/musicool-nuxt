<template>
  <div>
    <page-header left="Ouvert de 10h à 18h" right="75 av Wanderpepen, 7130 Binche" img="accueil">
        Musicool<br>Binche
    </page-header>

    <div class="w3-large">
        <!-- w3-sand w3-grayscale  -->
        <div class="w3-container" id="a-propos">
            <div class="w3-content">
                <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">A PROPOS DU MAGASIN</span></h5>
                <p>Le magasin fut fondé en <b>XXX</b> par Florent Marmai, ... blablabla raconter un peu l'histoire !</p>
                <p>Blablabla il y a une école Musi'School qui à été créée après par Vanessa ... </p>
                <div class="w3-panel w3-leftbar w3-light-grey">
                    <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                    <p>Vanessa Marmai: Gérante de Musicool SPRL</p>
                </div>
                <img src="~/assets/magasin.jpg" style="width:100%;max-width:1000px" class="w3-margin-top">
                <p><strong>Heures d'ouverture :</strong> de 10h à 18h<br/>Lundi, Mercredi, Jeudi, Vendredi et Samedi.</p>
                <p><strong>Fermeture :</strong> Mardi et Dimanche.</p>
                <p><strong>Adresse :</strong> 75 av Wanderpepen, 7130 Binche</p>
                <p><strong>Téléphone :</strong> +32 (0) 64 / 84 77 39</p>
            </div>
        </div>
        <div class="w3-container" id="contact" style="padding-bottom:32px;">
            <div class="w3-content">
                <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Où nous trouver ?</span></h5>
                <!-- <p>Au 75 avenue Wanderpepen à 7130 Binche</p> -->
                <no-ssr>
                    <musicool-map></musicool-map>
                </no-ssr>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import MusicoolMap from "@/components/MusicoolMap";
import NoSsr from "vue-no-ssr";
export default {
  components: { PageHeader, MusicoolMap, NoSsr },
  asyncData(context) {
    // The most important key, it can be asynchronous and receives the context as argument, please read the async data documentation to learn how it works.
    // https://nuxtjs.org/guide/async-data
    // called every time before loading the component
    return { name: "World" };
  },
  fetch() {
    // Used to fill the store before rendering the page, it's like the data method except it doesn't set the component data. See the API Pages fetch documentation.
    // https://nuxtjs.org/api/pages-fetch
  },
  head() {
    // Set specific Meta Tags for the current page, see API Pages head documentation.
    // https://nuxtjs.org/api/pages-head
    return {
      title: "Bienvenue à Musicool Binche",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Votre magasin d'instruments de musique à Binche"
        }
      ]
    };
  }
  // Specify a layout defined in the layouts directory, see API Pages layout documentation.
  // https://nuxtjs.org/api/pages-layout
  //layout ()
  // Set a specific transition for the page, see API Pages transition.
  // https://nuxtjs.org/api/pages-transition
  //transition ()
  // Boolean, by default: false. Specify if you want the page to scroll to the top before rendering the page, it's used for nested routes.
  // https://nuxtjs.org/guide/routing#nested-routes
  //scrollToTop: false
  // Validator function for dynamic routes.
  // https://nuxtjs.org/guide/routing#dynamic-routes
  //validate ()
  // Set a middleware for this page, the middleware will be called before rendering the page, see routes middleware.
  // https://nuxtjs.org/guide/routing#middleware
  //middleware ()
};
</script>

<style scoped>

</style>