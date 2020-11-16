<template>
  <div class="post">
    <h2 class="text-2xl">{{ post.title }}</h2>
    <img :src="postImage" class="w-full my-3"/>
    <p class="text-sm text-gray-600">{{ formatDate(post.published_at) }}</p>
    <div class="py-1">
      {{ post.content }}
    </div>
  </div>
</template>

<script>
import moment from "moment";

import { mapGetters } from "vuex";

export default {
  name: "Post",
  data: function () {
    return {
      loading: true
    };
  },
  mounted() {
    this.$store.dispatch("getPost", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["getPost"]),
    post() {
      return this.getPost;
    },
    postImage() {
      const base = 'https://strapi-hltv.herokuapp.com';
      var url = '/';
      if(this.post.image) {
        console.log('Sim', this.post.image);
        url = base + this.post.image.url;
      }
      return url;
    }
  },
  methods: {
    formatDate(data) {
      moment.locale("pt-br");
      return moment.utc(data).fromNow();
    },
  },
};
</script>

<style lang="scss">
</style>