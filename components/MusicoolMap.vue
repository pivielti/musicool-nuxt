<template>
    <section>
        <div id="map" style="width:100%;height:400px;"></div>
    </section>
</template>

<script>
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var center = new google.maps.LatLng(50.4118668, 4.1722331);

      var mapOptions = {
        center: center,
        zoom: 15,
        scrollwheel: true,
        draggable: true,
        // mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var marker = new google.maps.Marker({
        position: center
      });

      marker.setMap(map);
    }
  }
};
</script>
