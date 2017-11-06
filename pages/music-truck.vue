<template>
    <div>
        <page-header left="Livraison à partir de 16h" right="A deux pas de chez vous" img="truck">
            Music Truck
        </page-header>
        <div class="w3-container">
            <div class="w3-content">
                <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">C'EST QUOI ?</span></h5>
                <truck-tabs></truck-tabs>
                <img src="~/assets/music-truck.jpg" style="width:100%;max-width:1000px;margin-top:32px;">
            </div>
        </div>
        <div class="w3-container" style="padding-bottom:32px;">
            <div class="w3-content">
                <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">PLANNING NOVEMBRE</span></h5>
                <no-ssr>
                    <music-truck-map></music-truck-map>
                </no-ssr>
            </div>
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import TruckTabs from "@/components/TruckTabs";
import MusicTruckMap from "@/components/MusicTruckMap";
import NoSsr from "vue-no-ssr";
export default {
  components: { PageHeader, TruckTabs, MusicTruckMap, NoSsr },
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>
