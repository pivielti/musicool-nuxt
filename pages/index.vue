<template>
  <div itemscope itemtype="http://schema.org/MusicStore">
    <page-header left="Ouvert de 10h à 18h" right="75 av Wanderpepen, 7130 Binche" color="w3-text-white">
      <img slot="img" src="~/assets/header.jpg" style="width: 100%;">
      <span slot="text" itemprop="name">
        Musicool<br>Binche
      </span>
    </page-header>
    <img style="display:none;" src="~/assets/logo.png" itemprop="image">

    <div class="w3-large">
      <!-- w3-sand w3-grayscale  -->
      <div class="w3-container" id="a-propos">
        <div class="w3-content">
          <h5 class="w3-center w3-padding-48">
            <span class="w3-tag w3-wide">ACCUEIL</span>
          </h5>
          <p>
            Musicool est le lieu de rencontre de tous les passionnés de musique de la région ! Nous proposons les meilleures marques d'
            <b>instruments</b> de musique avec tous leurs
            <b>accessoires</b> ainsi que toutes vos
            <b>partitions</b> préférées.
          </p>
          <p>
            Nous proposons également un
            <b>service de réparations</b> sur place avec plus de 25 ans d'expérience.
          </p>
          <p>
            Vous aimez la musique et vous souhaitez apprendre à en jouer ? Rendez-vous à
            <a href="http://www.musischool.be" target="_blank">
              <b>Musi'School</b>
            </a>
            ASBL notre école de musique.
          </p>
          <img src="~/assets/magasin.jpg" style="width:100%;max-width:1000px" class="w3-margin-top">
          <div class="w3-panel w3-leftbar w3-light-grey">
            <p>
              <i>
                "Musicool ce sont les prix internet avec un service à votre écoute. Notre objectif : vous donner les conseils qui
                <b>vous</b> conviennent et partager notre passion pour la musique !"
              </i>
            </p>
            <p>Vanessa Marmai: Gérante de Musicool SPRL</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
export default {
  components: { PageHeader },
  asyncData(context) {
    // The most important key, it can be asynchronous and receives the context as argument, please read the async data documentation to learn how it works.
    // https://nuxtjs.org/guide/async-data
    // called every time before loading the component
    return {};
  },
  fetch() {
    // Used to fill the store before rendering the page, it's like the data method except it doesn't set the component data. See the API Pages fetch documentation.
    // https://nuxtjs.org/api/pages-fetch
  },
  head() {
    // Set specific Meta Tags for the current page, see API Pages head documentation.
    // https://nuxtjs.org/api/pages-head
    return {
      title: 'Bienvenue | Musicool Binche',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Votre magasin d'instruments de musique à Binche"
        }
      ]
    };
  },
  watch: {
    router(router) {
      if (router.to.hash) {
        console.log(router.to.hash);
      }
    }
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
