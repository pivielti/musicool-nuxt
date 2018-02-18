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
      <div id="contact" class="w3-container" style="padding-bottom:72px;">
        <div class="w3-content">
          <h5 class="w3-center w3-padding-48">
            <span class="w3-tag w3-wide">CONTACT</span>
          </h5>
          <p>
            <strong>Heures d'ouverture :</strong>
            <span itemprop="openingHours" content="Mo, We, Th, Fr, Sa 10:00-18:00">de 10h à 18h<br>Lundi, Mercredi, Jeudi, Vendredi et Samedi.</span>
          </p>
          <p>
            <strong>Fermeture :</strong> Mardi et Dimanche.
          </p>
          <p itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <strong>Adresse :</strong>
            <span itemprop="streetAddress">
              75 av Wanderpepen
            </span>,
            <span itemprop="postalCode">7130</span>
            <span itemprop="addressLocality">Binche</span>
          </p>
          <p>
            <strong>Téléphone :</strong>&nbsp;
            <span itemprop="telephone" content="+3264847739">+32 (0) 64 / 84 77 39</span>
          </p>
          <no-ssr>
            <musicool-map/>
          </no-ssr>
        </div>
        <div style="display:none;" itemprop="priceRange">€</div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import MusicoolMap from '@/components/MusicoolMap';
import NoSsr from 'vue-no-ssr';
export default {
  components: { PageHeader, MusicoolMap, NoSsr },
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
      title: 'Contact | Musicool Binche',
      meta: [
        {
          hid: 'description',
          name: 'description',
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
