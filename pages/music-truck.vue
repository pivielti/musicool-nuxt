<template>
  <div>
    <page-header left="Ouvert de 10h à 18h" right="75 av Wanderpepen, 7130 Binche" img="truck">
        Music Truck
    </page-header>
        <!-- Menu Container -->
        <div class="w3-container" id="music-truck">
            <div class="w3-content" style="max-width:700px">
                <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">MUSIC TRUCK</span></h5>
                <div class="w3-row w3-center w3-card-2 w3-padding">
                    <a href="javascript:void(0)" onclick="openMenu(event, 'Eat');" id="myLink">
                        <div class="w3-col s6 tablink">Le concept</div>
                    </a>
                    <a href="javascript:void(0)" onclick="openMenu(event, 'Drinks');">
                        <div class="w3-col s6 tablink">Infos pratiques</div>
                    </a>
                </div>

                <div id="Eat" class="w3-container menu w3-padding-48 w3-card-2">
                    <h5>Tout le matériel de musique à deux pas de chez vous</h5>
                    <p class="w3-text-grey">Une  camionnette qui se rend dans toutes les académies de Wallonie chaque mois</p><br>

                    <h5>Du stock "mobile"</h5>
                    <p class="w3-text-grey">Tous vos articles préférés (et au prix internet)</p><br>

                    <h5>La livraison</h5>
                    <p class="w3-text-grey">Livraison de vos commandes à deux pas de chez vous</p><br>

                    <h5>La réparation</h5>
                    <p class="w3-text-grey">Possibilité de déposer vos instruments en réparation</p><br>
                </div>

                <div id="Drinks" class="w3-container menu w3-padding-48 w3-card-2">
                    <h5>Le music truck, c'est parti !</h5>
                    <p class="w3-text-grey">Départ le mardi 3 octobre vers les académies de la Bouverie, Colfontaine, Frameries et Saint Ghislain.</p><br>

                    <h5>Besoin d'un instrument, d'un accessoire, d'une commande de partitions ?</h5>
                    <p class="w3-text-grey">Appelez nous lundi et ça vous sera apporté dans votre région mardi.</p><br>
                </div>
                <img src="~/assets/music-truck.jpg" style="width:100%;max-width:1000px;margin-top:32px;">
            </div>
        </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  components: { PageHeader },
  data() {
    return {
      coucou: "hello"
    };
  }
};
</script>

<style scoped>

</style>
