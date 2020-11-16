<template>
  <div class="feed-layout">
    <FeedHeader />
    <div class="px-6 py-5">
      <router-view />
    </div>
  </div>
</template>

<script>

import FeedHeader from '../components/base/FeedHeader';

export default {
  name: "FeedLayout",
  data: function () {
    return {};
  },
  components: {
    FeedHeader,
  },
};
</script>

<style lang="scss">
</style>