<template>
  <div class="post-layout">
    <PostHeader />
    <div class="px-6 pb-5">
      <router-view />
    </div>
  </div>
</template>

<script>

import PostHeader from '../components/base/PostHeader';

export default {
  name: "PostLayout",
  data: function () {
    return {};
  },
  components: {
    PostHeader,
  },
};
</script>

<style lang="scss">
</style>