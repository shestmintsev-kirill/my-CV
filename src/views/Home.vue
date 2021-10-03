<template>
  <div>
    <Loader v-if="showLoader" />
    <div v-scroll-spy="{ offset: 30 }">
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <ContactPage />
    </div>
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import PortfolioPage from "@/components/PortfolioPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Home",
  components: {
    HomePage,
    AboutPage,
    SkillsPage,
    PortfolioPage,
    ContactPage,
    Loader
  },
  data: () => ({
    showLoader: true
  }),
  mounted() {
    this.canselLoader();
  },
  methods: {
    canselLoader() {
      setTimeout(() => {
        this.showLoader = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
@import "normalize-scss";
@include normalize();

* {
  @include font-eng;
  @include font-ru;
}

.slick-prev:before,
.slick-next:before {
  color: rgb(129, 129, 129) !important;
}
</style>
