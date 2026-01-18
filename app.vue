<template>
  <div class="app-wrapper">
    <MobileMenu/>
    <AppHeader/>
    <NuxtPage data-aos="fade-in"/>
    <AppFooter/>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  watch: {
    $route(to, from) {
      console.log('De', from.fullPath, 'a', to.fullPath);
    }
  },
  mounted() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
  }
}
</script>

<style>
.app-wrapper {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html, body {
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>