<template>
  <div>
    <page-header left="Livraison à partir de 16h" right="A deux pas de chez vous" color="w3-text-black">
      <img slot="img" src="~/assets/music-truck-banner.png" style="width: 100%;">
    </page-header>
    <div class="w3-container">
      <div class="w3-content">
        <h5 class="w3-center w3-padding-48">
          <span class="w3-tag w3-wide">C'EST QUOI ?</span>
        </h5>
        <truck-tabs />
        <img src="~/assets/music-truck.jpg" style="width:100%;max-width:1000px;margin-top:32px;">
      </div>
    </div>
    <div class="w3-container" style="padding-bottom:32px;">
      <div class="w3-content">
        <h5 class="w3-center w3-padding-48">
          <span class="w3-tag w3-wide">PLANNING DÉCEMBRE</span>
        </h5>
        <no-ssr>
          <music-truck-map :truck-tour="truckTourDecember" id="december" />
        </no-ssr>
      </div>
    </div>
    <div class="w3-container" style="padding-bottom:32px;">
      <div class="w3-content">
        <h5 class="w3-center w3-padding-48">
          <span class="w3-tag w3-wide">PLANNING JANVIER</span>
        </h5>
        <no-ssr>
          <music-truck-map :truck-tour="truckTourJanuary" id="january" />
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
    return {
      truckTourJanuary: [
        {
          date: "Jeudi 4",
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
            },
            {
              name: "Farciennes",
              location: { lat: 50.435779, lng: 4.54371 }
            }
          ]
        },
        {
          date: "Vendredi 5",
          cities: [
            {
              name: "Erquelinnes",
              location: { lat: 50.310574, lng: 4.120048 }
            },
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
          date: "Lundi 8",
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
          date: "Jeudi 11",
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
          date: "Vendredi 12",
          cities: [
            {
              name: "Erquelinnes",
              location: { lat: 50.310574, lng: 4.120048 }
            },
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
          date: "Lundi 15",
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
          date: "Jeudi 18",
          cities: [
            {
              name: "Philippeville",
              location: { lat: 50.178773, lng: 4.582992 }
            },
            {
              name: "Florennes",
              location: { lat: 50.254529, lng: 4.605256 }
            },
            {
              name: "Mettet",
              location: { lat: 50.315778, lng: 4.66443 }
            },
            {
              name: "Gerpinnes",
              location: { lat: 50.334789, lng: 4.528699 }
            }
          ]
        },
        {
          date: "Vendredi 19",
          cities: [
            {
              name: "Erquelinnes",
              location: { lat: 50.310574, lng: 4.120048 }
            },
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
          date: "Lundi 22",
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
            },
            {
              name: "Nivelles",
              location: { lat: 50.596551, lng: 4.322994 }
            }
          ]
        },
        {
          date: "Jeudi 25",
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
          date: "Vendredi 26",
          cities: [
            {
              name: "Erquelinnes",
              location: { lat: 50.310574, lng: 4.120048 }
            },
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
          date: "Jeudi 30",
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
        }
      ],
      truckTourDecember: [
        {
          date: "Lundi 4",
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
          date: "Jeudi 7",
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
          date: "Lundi 11",
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
          date: "Jeudi 14",
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
          date: "Lundi 18",
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
            },
            {
              name: "Nivelles",
              location: { lat: 50.596551, lng: 4.322994 }
            }
          ]
        },
        {
          date: "Lundi 19",
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
          date: "Jeudi 21",
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
        }
      ]
    };
  },
  head() {
    return {
      title: "Le Music Truck à deux pas de chez vous | Musicool Binche",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Tout le matériel de musique à deux pas de chez vous, une camionnette qui se rend dans toutes les académies de Wallonie chaque mois, tous vos articles préférés (et au prix internet)."
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
