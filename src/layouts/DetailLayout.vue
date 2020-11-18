<template>
  <div class="post-layout">
    <Header type="detail" />
    <div class="px-6 pb-5">
      <router-view />
    </div>
  </div>
</template>

<script>

import Header from '../components/base/Header';

export default {
  name: "DetailLayout",
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