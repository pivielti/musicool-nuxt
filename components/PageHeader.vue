<template>
    <header class="bgimg w3-display-container w3-grayscale-min" :class="img">
        <div class="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
            <span class="w3-tag">{{ left }}</span>
        </div>
        <div class="w3-display-middle w3-center">
            <span class="w3-text-white" style="font-size:90px">
                <slot></slot>
            </span>
        </div>
        <div class="w3-display-bottomright w3-center w3-padding-large">
            <span class="w3-text-white">{{ right }}</span>
        </div>
    </header>
</template>

<script>
export default {
  props: {
    left: String,
    right: String,
    img: String
  }
};
</script>
<style scoped>
.bgimg {
  background-position: center;
  background-size: cover;
  min-height: 75vh;
}

.accueil {
  background-image: url("~/assets/header.jpg");
}

.truck {
  background-image: url("~/assets/header.jpg");
}
</style>
