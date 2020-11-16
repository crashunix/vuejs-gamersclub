<template>
  <div v-bind:class="theme" class="content">
    <Header />
    <div class="px-6">
      <router-view />
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

import Header from "@/components/base/Header.vue";

export default {
  name: "App",
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters(["theme"])
  },
  mounted() {
    this.$store.dispatch('getPosts');
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
  .content {
    @apply bg-white;
    &.dark-theme {
      @apply bg-gray-900;
    }
  }
</style>