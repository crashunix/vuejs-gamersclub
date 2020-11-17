<template>
  <div class="blank-layout">
    <div class="px-6 pb-5">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "BlankLayout",
  data: function () {
    return {};
  },
};
</script>

<style lang="scss">
</style>