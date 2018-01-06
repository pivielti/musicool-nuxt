<template>
  <div>
    <page-header left="Livraison à partir de 16h" right="A deux pas de chez vous" color="w3-text-black">
      <img slot="img" src="~/assets/music-truck-banner.png" style="width: 100%;">
    </page-header>
    <div class="w3-container">
      <div class="w3-content">
        <h5 class="w3-center w3-padding-48">
          <span class="w3-tag w3-wide">QU'EST CE QUE C'EST ?</span>
        </h5>
        <truck-tabs />
        <img src="~/assets/music-truck.jpg" style="width:100%;max-width:1000px;margin-top:32px;">
      </div>
    </div>
    <div v-for="tour in tours" :key="tour.month" class="w3-container" style="padding-bottom:32px;">
      <div class="w3-content">
        <h5 class="w3-center w3-padding-48">
          <span class="w3-tag w3-wide">PLANNING {{ tour.month | toUpper }}</span>
        </h5>
        <no-ssr>
          <music-truck-map :truck-tour="tour.dates" :id="tour.month" />
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import TruckTabs from '@/components/TruckTabs';
import MusicTruckMap from '@/components/MusicTruckMap';
import NoSsr from 'vue-no-ssr';
import truckTours from '../assets/truck-tours.json';
export default {
  components: { PageHeader, TruckTabs, MusicTruckMap, NoSsr },
  data() {
    return {
      tours: truckTours
    };
  },
  head() {
    return {
      title: 'Le Music Truck à deux pas de chez vous | Musicool Binche',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Tout le matériel de musique à deux pas de chez vous, une camionnette qui se rend dans toutes les académies de Wallonie chaque mois, tous vos articles préférés (et au prix internet).'
        }
      ]
    };
  },
  filters: {
    toUpper(item) {
      return item.toString().toUpperCase();
    }
  }
};
</script>

<style scoped>

</style>
