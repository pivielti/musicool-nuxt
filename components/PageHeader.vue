<template>
    <header class="bgimg w3-display-container w3-grayscale-min">
        <div class="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
            <span class="w3-tag">{{ left }}</span>
        </div>
        <slot name="img"></slot>
        <div class="w3-display-middle w3-center w3-hide-small">
            <span :class="color" style="font-size:80px">
                <slot name="text"></slot>
            </span>
        </div>
        <div class="w3-display-bottomright w3-center w3-padding-large w3-hide-small">
            <span :class="color">{{ right }}</span>
        </div>
    </header>
</template>

<script>
export default {
  props: {
    left: String,
    right: String,
    img: String,
    color: String
  },
  ready() {
    window.addEventListener("resize", this.computeHeight);
  },
  data() {
    return {
      height: "70vh"
    };
  },
  methods: {
    computeHeight(e) {
      this.height = e.target.width / 2 + "px";
    }
  }
};
</script>

<style scoped>
.bgimg {
  background-position: center;
  background-size: cover;
  margin-top: 55px;
}
</style>
