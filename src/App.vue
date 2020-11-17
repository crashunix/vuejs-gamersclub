<template>
  <div v-bind:class="theme" class="content">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["theme"]),
  },
  mounted() {
    this.$store.dispatch("getRecentPosts");
    this.$store.dispatch("getCategories");
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