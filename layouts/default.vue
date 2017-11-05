<template>
    <div>
        <main-menu></main-menu>
        <nuxt></nuxt>
        <main-footer></main-footer>
    </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
export default {
  components: {
    MainMenu,
    MainFooter
  }
};
</script>

<style>
body,
html {
  height: 100%;
  font-family: "Inconsolata", sans-serif;
}
</style>
