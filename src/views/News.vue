<template>
  <div class="news">
    <section class="section">
      <h3 class="section__title">Em alta</h3>
      <div class="section__tags">
        <span class="section__tag">#mibr</span>
        <span class="section__tag">#astralisruimkkk</span>
        <span class="section__tag">#fazefallen</span>
      </div>
      <div class="section__cards">
        <template v-if="loadingPosts">
          <div class="sk-card" v-for="i in 3" :key="i">
            <div class="card__content">
            </div>
          </div>
        </template>
        <router-link :to="{name: 'Post', params: {id: card.id}}" class="card" v-for="card in posts" :key="card.id" v-bind:style="`background-image: url('https://strapi-hltv.herokuapp.com${card.image.formats.thumbnail.url}`">
          <div class="card__content">
            <span class="card__hour">{{formatDate(card.published_at)}}</span>
            <span class="card__title">{{ card.title }}</span>
            <span class="card__subtitle">{{ card.subtitle }}</span>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>

import moment from 'moment';

import { mapGetters } from 'vuex';

export default {
  name: "News",
  data: function () {
    return {
      loadingPosts: true
    };
  },
  computed: {
    ...mapGetters(['getPosts']),
    posts() {
      return this.getPosts;
    }
  },
  methods: {
    formatDate(data) {
      moment.locale('pt-br');
      return moment.utc(data).fromNow();
    }
  },
  watch: {
    posts: function() {
      if (this.posts.length > 0) {
        this.loadingPosts = false;
      }
    }
  }
};
</script>

<style lang="scss">
.section {
  .section__title {
  }
  .section__tags {
    @apply flex items-center mb-4 mt-1;
    .section__tag {
      @apply text-xs text-gray-500 mr-2;
    }
  }
  .section__cards {
    @apply flex overflow-x-auto flex-no-wrap;
    -webkit-overflow-scrolling: touch; /* [3] */
    -ms-overflow-style: -ms-autohiding-scrollbar; /* [4] */
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.horizontal-scroll {
}
.card {
  @apply mx-1 rounded-md;
  min-width: 12rem;
  max-width: 12rem;
  min-height: 12rem;
  max-height: 12rem;
  background-size: cover;
  background-position: center;
  &:first-child {
    @apply ml-0;
  }
  &:last-child {
    @apply mr-0;
  }
  .card__content {
    height: 100%;
    background: rgb(13, 41, 64);
    background: linear-gradient(
      0deg,
      rgba(13, 41, 64, 1) 16%,
      rgba(255, 0, 0, 0) 100%
    );
    @apply rounded-md flex flex-col justify-end p-4;
    .card__hour {
      @apply text-white text-xs;
    }
    .card__title {
      @apply text-white text-2xl;
    }
    .card__subtitle {
      @apply text-white text-sm;
    }
  }
}
.sk-card {
  @apply mx-1 rounded-md;
  min-width: 12rem;
  max-width: 12rem;
  min-height: 12rem;
  max-height: 12rem;
  &:first-child {
    @apply ml-0;
  }
  &:last-child {
    @apply mr-0;
  }
  .card__content {
    @apply h-full bg-gray-300 animate-pulse rounded-md;
  }
}
</style>