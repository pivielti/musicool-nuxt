<template>
  <section>
    <ul class="filter">
      <li>
        <a href="#" @click.prevent="seeAll">Tout voir</a>
      </li>
      <li v-for="tour in truckTour" :key="tour.date">
        <a href="#" @click.prevent="filter(tour.date)">{{ tour.date }}</a>
      </li>
    </ul>
    <div :id="id" style="width:100%;height:400px;" class="w3-border-top w3-border-left w3-border-right mc-red"></div>
    <div class="w3-border  mc-red tour-details">
      <button class="w3-button w3-block w3-left-align" @click="toggleTable">
        <i class="material-icons w3-xxlarge" v-if="!showTable">chevron_right</i>
        <i class="material-icons w3-xxlarge" v-else>expand_more</i>&nbsp;
        <b>
          Détail de la tournée affichée
        </b>
      </button>
      <div class="w3-container w3-hide w3-border-top  mc-red" :class="{ 'w3-show': showTable }">
        <table class="w3-table w3-centered w3-bordered">
          <tr>
            <th>Quand ?</th>
            <th>Ou ?</th>
          </tr>
          <tr v-for="(marker, index) in showedMarkers" :key="index">
            <td>{{ marker.date }}</td>
            <td>{{ marker.cityName }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import _cities from '../assets/cities.json';
export default {
  mounted() {
    this.initMap();
  },
  props: {
    truckTour: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showTable: false,
      mapObj: null,
      markers: []
    };
  },
  computed: {
    showedMarkers() {
      let markers = [];
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        if (marker.getVisible()) {
          markers.push(marker);
        }
      }
      return markers;
    }
  },
  methods: {
    toggleTable() {
      this.showTable = !this.showTable;
    },
    initMap() {
      var mapOptions = {
        scrollwheel: false,
        draggable: false,
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false
      };

      this.mapObj = new google.maps.Map(document.getElementById(this.id), mapOptions);

      for (var i = 0; i < this.truckTour.length; i++) {
        var tour = this.truckTour[i];
        for (var j = 0; j < tour.cities.length; j++) {
          var cityName = tour.cities[j];
          var cityLocation = _cities[cityName];
          if (cityLocation === undefined) {
            console.error(`Unable to find the city "${cityName}" in the file "cities.json".`);
            continue;
          }
          var marker = new google.maps.Marker({
            date: tour.date,
            cityName: cityName,
            map: this.mapObj,
            position: cityLocation
          });
          this.markers.push(marker);
        }
      }
      this.fitBoundsToVisibleMarkers();
    },
    fitBoundsToVisibleMarkers() {
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        if (marker.getVisible()) {
          bounds.extend(marker.getPosition());
        }
      }
      this.mapObj.fitBounds(bounds);
    },
    seeAll() {
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        marker.setVisible(true);
      }
      this.fitBoundsToVisibleMarkers();
    },
    filter(date) {
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        if (marker.date === date) {
          marker.setVisible(true);
        } else {
          marker.setVisible(false);
        }
      }
      this.fitBoundsToVisibleMarkers();
    }
  }
};
</script>

<style scoped>
.filter {
  text-align: center;
  padding-left: 0;
}
.filter > li {
  display: inline-block;
  margin-right: 8px;
}
.filter > li:last-child {
  margin-right: 0;
}
.tour-details button {
  display: flex;
  align-items: center;
}
.tour-details button b {
  text-decoration: underline;
}
.mc-red {
  border-color: #6a3432 !important;
}
</style>
