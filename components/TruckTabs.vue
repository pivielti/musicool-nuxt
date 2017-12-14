<template>
    <section>
        <div class="w3-row w3-center w3-card-2 w3-padding">
            <a href="#" @click.prevent="activeTab = 'concept'">
                <div class="w3-col s6 tablink" :class="{ 'w3-dark-grey': isConceptActive }">Le concept</div>
            </a>
            <a href="#" @click.prevent="activeTab = 'infos'">
                <div class="w3-col s6 tablink" :class="{ 'w3-dark-grey': isInfoActive }">Comment procéder</div>
            </a>
        </div>
        <div class="w3-container menu w3-padding-48 w3-card-2" v-show="isConceptActive">
            <h5>Tout le matériel de musique à deux pas de chez vous</h5>
            <p class="w3-text-grey">Une camionnette qui se rend dans toutes les académies de Wallonie chaque mois</p><br>

            <h5>Du stock "mobile"</h5>
            <p class="w3-text-grey">Tous vos articles préférés (et au prix internet)</p><br>

            <h5>La livraison</h5>
            <p class="w3-text-grey">Livraison de vos commandes à deux pas de chez vous</p><br>

            <h5>La réparation</h5>
            <p class="w3-text-grey">Possibilité de déposer vos instruments en réparation</p><br>
        </div>
        <div class="w3-container menu w3-padding-48 w3-card-2" v-show="isInfoActive">
            <h5>Passer commande</h5>
            <p class="w3-text-grey">Envoyez vos commandes à musicoolflo@gmail.com ou appelez nous au
                <a href="tel:+3264847739">+32 (0)64 / 84 77 39</a>
            </p><br>

            <h5>Livraison</h5>
            <p class="w3-text-grey">Nous vous contacterons pour vous informer de l'heure de passage (entre 16h et 19h)</p><br>

            <h5>Paiement</h5>
            <p class="w3-text-grey">Pour le paiement, soit par virement bancaire, soit en espèces à la livraison</p><br>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'concept'
    };
  },
  computed: {
    isConceptActive() {
      return this.activeTab == 'concept';
    },
    isInfoActive() {
      return this.activeTab == 'infos';
    }
  }
};
</script>
