<template>
  <div class="feed-layout">
    <Header />
    <div class="px-6 py-5">
      <router-view />
    </div>
  </div>
</template>

<script>

import Header from '../components/base/Header';

export default {
  name: "Layout",
  data: function () {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
</style>