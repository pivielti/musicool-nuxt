<template>
  <div>
    <page-header left="Ouvert de 10h à 18h" right="75 av Wanderpepen, 7130 Binche" img="accueil">
        Musicool<br>Binche
    </page-header>

    <div class="w3-large">
        <!-- w3-sand w3-grayscale  -->
        <!-- About Container -->
        <div class="w3-container" id="a-propos">
            <div class="w3-content" style="max-width:700px">
                <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">A PROPOS DU MAGASIN</span></h5>
                <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches,
                    as well as a selection of sides and salads and other good stuff.</p>
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

        <!-- Contact/Area Container -->
        <div class="w3-container" id="contact" style="padding-bottom:32px;">
            <div class="w3-content" style="max-width:700px">
                <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Où nous trouver ?</span></h5>
                <p>Au 75 avenue Wanderpepen à 7130 Binche</p>
                <div id="googleMap" class="w3-sepia" style="width:100%;height:400px;"></div>
                <!--<p><span class="w3-tag">INFO:</span> We offer full-service catering for any event, large or small. We understand
                    your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
                <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
                <form action="/action_page.php" target="_blank">
                    <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></p>
                    <p><input class="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required
                            name="People"></p>
                    <p><input class="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required
                            name="date" value="2017-11-16T20:00"></p>
                    <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements"
                            required name="Message"></p>
                    <p><button class="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
                </form>-->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  components: { PageHeader },
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
          content: "My custom description"
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