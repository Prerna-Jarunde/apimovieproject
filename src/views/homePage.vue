<template>
  <div class="home">
    <headerSection />
    <search />
    <subHeaderSection />
    <subSection />
    <cardImage />
    <footerSection />
  </div>
</template>

<script>
import headerSection from '@/components/headerSection.vue';
import search from '@/components/search.vue';
import subHeaderSection from '@/components/subHeaderSection.vue';
import subSection from '@/components/subSection.vue';
import cardImage from '@/components/cardImage.vue';
import footerSection from '@/components/footerSection.vue';

export default {
  name: 'homePage',
  components: {
    headerSection,
    search,
    subHeaderSection,
    subSection,
    cardImage,
    footerSection,
  },
};
</script>
<style lang="scss" scoped>
@import "~@/scss/import";
.home {
  background: $home-background;
  // background-image: url('../assets/images/beauty.jpg');
}
</style>
