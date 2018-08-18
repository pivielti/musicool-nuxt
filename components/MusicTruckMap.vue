<template>
  <section>
    <ul class="filter">
      <li>
        <a href="#" @click.prevent="resetMap">
          <b>TOUT VOIR</b>
        </a>
      </li>
      <li v-for="city in cities" :key="city.name">
        <a href="#" @click.prevent="showCity(city.name)">{{ city.name }}</a>
      </li>
    </ul>
    <div id="gmap-container" style="width:100%;height:400px;" class="w3-border-top w3-border-left w3-border-right mc-red"></div>
    <div class="w3-border  mc-red tour-details">
      <button class="w3-button w3-block w3-left-align" @click="toggleTable">
        <i class="material-icons w3-xxlarge" v-if="!showTable">chevron_right</i>
        <i class="material-icons w3-xxlarge" v-else>expand_more</i>&nbsp;
        <b>
          Tableau des dates
        </b>
      </button>
      <div class="w3-container w3-hide w3-border-top  mc-red" :class="{ 'w3-show': showTable }">
        <table class="w3-table w3-bordered">
          <tr>
            <th>Ou ?</th>
            <th>Quand ?</th>
          </tr>
          <tr v-for="(city) in cities" :key="city.name">
            <td>
              <h4>{{ city.name }}</h4>
            </td>
            <td :id="`html-${city.name}`">
              <div v-if="city.dates.length === 0">
                <p>Aucune date pour l'instant</p>
              </div>
              <div v-else v-for="date in city.dates" :key="date.month">
                <h4>{{ getMonthName(date.month) }}</h4>
                <p>
                  <span v-for="day in date.days" :key="day" class="w3-margin-right">{{ day }}</span>
                </p>
              </div>
            </td>
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
  data() {
    return {
      cities: _cities,
      showTable: false,
      mapObj: null,
      infoWindow: null,
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

      this.mapObj = new google.maps.Map(document.getElementById('gmap-container'), mapOptions);
      this.infoWindow = new google.maps.InfoWindow();

      for (var i = 0; i < this.cities.length; i++) {
        var city = this.cities[i];
        var marker = new google.maps.Marker({
          title: city.name,
          cityName: city.name,
          dates: city.dates,
          map: this.mapObj,
          position: {
            lat: city.lat,
            lng: city.lng
          }
        });
        this.markers.push(marker);
      }

      this.fitBoundsToMarkers();
    },
    fitBoundsToMarkers() {
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        if (marker.getVisible()) {
          bounds.extend(marker.getPosition());
        }
      }
      this.mapObj.fitBounds(bounds);
    },
    showCity(cityName) {
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        if (marker.cityName === cityName) {
          this.mapObj.setZoom(12);
          this.mapObj.setCenter(marker.getPosition());
          this.infoWindow.setContent(document.getElementById(`html-${cityName}`).innerHTML);
          this.infoWindow.open(this.mapObj, marker);
        } else {
          continue;
        }
      }
    },
    resetMap() {
      this.fitBoundsToMarkers();
      this.infoWindow.close();
    },
    getMonthName(monthNumber) {
      switch (monthNumber) {
        case 1:
          return 'Janvier';
        case 2:
          return 'Février';
        case 3:
          return 'Mars';
        case 4:
          return 'Avril';
        case 5:
          return 'Mai';
        case 6:
          return 'Juin';
        case 7:
          return 'Juillet';
        case 8:
          return 'Aout';
        case 9:
          return 'Septembre';
        case 10:
          return 'Octobre';
        case 11:
          return 'Novembre';
        case 12:
          return 'Décembre';
        default:
          return monthNumber;
      }
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
