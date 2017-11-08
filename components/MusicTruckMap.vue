<template>
    <section>
        <ul class="filter">
            <li><a href="#" @click.prevent="seeAll">Tout voir</a></li>
            <li v-for="tour in truckTour" :key="tour.date">
                <a href="#" @click.prevent="filter(tour.date)">{{ tour.date }}</a>
            </li>
        </ul>
        <div id="map" style="width:100%;height:400px;"></div>
        <!-- <button @click="logJson">LOG</button> -->
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
    </section>
</template>

<script>
export default {
  mounted() {
    this.geocodeAll();
    this.initMap();
  },
  data() {
    return {
      mapObj: null,
      markers: [],
      geocoded: [],
      truckTour: [
        {
          date: "Lundi 6",
          cities: [
            {
              name: "Fontaine L'Eveque",
              location: { lat: 50.4166, lng: 4.3251900000000205 }
            },
            {
              name: "Morlanwelz",
              location: { lat: 50.44888, lng: 4.240260000000035 }
            },
            {
              name: "La Louvière",
              location: { lat: 50.4747995, lng: 4.183738800000015 }
            },
            {
              name: "Houdeng",
              location: { lat: 50.48815, lng: 4.1542799999999716 }
            }
          ]
        },
        {
          date: "Jeudi 9",
          cities: [
            {
              name: "Fleurus",
              location: { lat: 50.4822605, lng: 4.551186899999948 }
            },
            {
              name: "Tamines",
              location: { lat: 50.43353, lng: 4.608190000000036 }
            },
            {
              name: "Auvelais",
              location: { lat: 50.44938, lng: 4.630239999999958 }
            },
            {
              name: "Châtelet",
              location: { lat: 50.4061, lng: 4.527860000000032 }
            }
          ]
        },
        {
          date: "Lundi 13",
          cities: [
            {
              name: "Mons",
              location: { lat: 50.4542408, lng: 3.956658999999945 }
            },
            {
              name: "Baudour",
              location: { lat: 50.4832756, lng: 3.837739899999974 }
            },
            {
              name: "Saint Ghislain",
              location: { lat: 50.4491086, lng: 3.818375699999933 }
            },
            {
              name: "Quaregnon",
              location: { lat: 50.4444145, lng: 3.8646148000000267 }
            },
            {
              name: "Colfontaine",
              location: { lat: 50.41423, lng: 3.845980000000054 }
            },
            {
              name: "Frameries",
              location: { lat: 50.41094, lng: 3.8955100000000584 }
            }
          ]
        },
        {
          date: "Jeudi 16",
          cities: [
            {
              name: "Charleroi",
              location: { lat: 50.4108095, lng: 4.444643000000042 }
            },
            {
              name: "Courcelles",
              location: { lat: 50.46329799999999, lng: 4.374054800000067 }
            },
            {
              name: "Gosselies",
              location: { lat: 50.4687201, lng: 4.431955900000048 }
            },
            {
              name: "Ransart",
              location: { lat: 50.4617198, lng: 4.4760082999999895 }
            },
            {
              name: "Jumet",
              location: { lat: 50.44272489999999, lng: 4.437031100000013 }
            },
            {
              name: "Gilly",
              location: { lat: 50.4254594, lng: 4.477215099999967 }
            },
            {
              name: "Montignies sur sambre",
              location: { lat: 50.4018544, lng: 4.477780299999949 }
            }
          ]
        },
        {
          date: "Lundi 20",
          cities: [
            {
              name: "Sivry",
              location: { lat: 50.1660176, lng: 4.182086000000027 }
            },
            {
              name: "Rance - Chimay",
              location: { lat: 50.1421122, lng: 4.277757299999962 }
            }
          ]
        },
        {
          date: "Jeudi 23",
          cities: [
            {
              name: "Thuin",
              location: { lat: 50.3407615, lng: 4.287328500000058 }
            },
            {
              name: "Marchienne",
              location: { lat: 50.4055222, lng: 4.395723500000031 }
            },
            {
              name: "Monceau",
              location: { lat: 50.4166487, lng: 4.3763589999999795 }
            },
            {
              name: "Marcinelle",
              location: { lat: 50.39526900000001, lng: 4.42765380000003 }
            },
            {
              name: "Mont sur Marchienne",
              location: { lat: 50.3886584, lng: 4.405457999999953 }
            },
            {
              name: "Montignies-le-tilleul",
              location: { lat: 50.3816464, lng: 4.375530000000026 }
            },
            {
              name: "Couillet",
              location: { lat: 50.3914084, lng: 4.458941800000048 }
            }
          ]
        },
        {
          date: "Lundi 27",
          cities: [
            {
              name: "Gembloux",
              location: { lat: 50.56515, lng: 4.688430000000039 }
            },
            {
              name: "Eghezee",
              location: { lat: 50.59265, lng: 4.9036499999999705 }
            },
            {
              name: "Namur",
              location: { lat: 50.4673883, lng: 4.871985399999971 }
            }
          ]
        },
        {
          date: "Jeudi 30",
          cities: [
            {
              name: "Soignies",
              location: { lat: 50.57642449999999, lng: 4.070686900000055 }
            },
            {
              name: "Braine le comte",
              location: { lat: 50.60936, lng: 4.13483999999994 }
            },
            {
              name: "Enghien",
              location: { lat: 50.6947421, lng: 4.041858199999979 }
            },
            {
              name: "Tubize",
              location: { lat: 50.69054, lng: 4.202599999999961 }
            },
            {
              name: "Braine L'alleud",
              location: { lat: 50.6853626, lng: 4.377919700000007 }
            }
          ]
        }
      ]
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
    initMap() {
      //   var center = new google.maps.LatLng(50.4118668, 4.2722331);

      var mapOptions = {
        // center: center,
        zoom: 8,
        scrollwheel: true,
        draggable: true
      };

      this.mapObj = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );

      for (var i = 0; i < this.truckTour.length; i++) {
        var tour = this.truckTour[i];
        for (var j = 0; j < tour.cities.length; j++) {
          var city = tour.cities[j];
          var marker = new google.maps.Marker({
            date: tour.date,
            cityName: city.name,
            map: this.mapObj,
            position: city.location
          });
          this.markers.push(marker);
        }
      }
      this.fitBoundsToVisibleMarkers();
    },
    geocodeAll() {
      for (var i = 0; i < this.truckTour.length; i++) {
        var tour = this.truckTour[i];
        this.geocodeTour(tour);
      }
    },
    geocodeTour(tour) {
      for (var j = 0; j < tour.cities.length; j++) {
        var city = tour.cities[j];
        if (city.location == null) {
          this.geocodeSingle(tour, city);
        }
      }
      this.geocoded.push(tour);
    },
    geocodeSingle(tour, city) {
      var geocoder = new google.maps.Geocoder();
      var cityRequest = { address: city.name + ", Belgique" };
      geocoder.geocode(cityRequest, (results, status) => {
        if (status == "OK") {
          city.location = results[0].geometry.location;
        } else if (status == "OVER_QUERY_LIMIT") {
          alert("OVER_QUERY_LIMIT: " + city);
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
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
    logJson() {
      console.log(JSON.stringify(this.geocoded));
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
}
.filter > li {
  display: inline-block;
  margin-right: 8px;
}
.filter > li:last-child {
  margin-right: 0;
}
</style>
