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
        <template v-if="loading(posts)">
          <div class="sk-card" v-for="i in 3" :key="i">
            <div class="card__content"></div>
          </div>
        </template>
        <router-link
          :to="{ name: 'Post', params: { id: card.id } }"
          class="card"
          v-for="card in posts"
          :key="card.id"
          v-bind:style="`background-image: url('${
            ROOT_API + card.image.formats.thumbnail.url
          }`"
        >
          <div class="card__content">
            <span class="card__hour">{{ formatDate(card.published_at) }}</span>
            <span class="card__title">{{ card.title }}</span>
            <span class="card__subtitle">{{ card.subtitle }}</span>
          </div>
        </router-link>
      </div>
    </section>
    <section v-for="category in categories" :key="category.id" class="section">
      <div class="flex justify-between">
        <h3 class="section__title">{{ category.name }}</h3>
        <router-link :to="{ name: 'Category', params: { id: category.id } }"
          >More</router-link
        >
      </div>
      <div class="section__cards">
        <template v-if="loading(category.posts)">
          <div class="sk-card" v-for="i in 3" :key="i">
            <div class="card__content"></div>
          </div>
        </template>
        <router-link
          :to="{ name: 'Post', params: { id: post.id } }"
          class="card"
          v-for="post in category.posts"
          :key="post.id"
          v-bind:style="`background-image: url('${
            ROOT_API + post.image.formats.thumbnail.url
          }`"
        >
          <div class="card__content">
            <span class="card__hour">{{ formatDate(post.published_at) }}</span>
            <span class="card__title">{{ post.title }}</span>
            <span class="card__subtitle">{{ post.subtitle }}</span>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import moment from "moment";

import { mapGetters } from "vuex";
import gql from 'graphql-tag'


export default {
  name: "News",
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`
      query {
        hello
      }
    `,
  },
  data: function () {
    return {
      valor: 120,
    };
  },
  computed: {
    ...mapGetters(["getRecentPosts", "getCategories"]),
    posts() {
      return this.getRecentPosts;
    },
    categories() {
      return this.getCategories;
    },
    ROOT_API() {
      return process.env.VUE_APP_ROOT_API;
    },
  },
  methods: {
    formatDate(data) {
      //moment.locale("pt-br");
      return moment.utc(data).fromNow();
    },
    loading(a) {
      if (a.length > 0) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style lang="scss">
.section {
  @apply mb-6;
  .section__title {
  }
  .section__tags {
    @apply flex items-center;
    .section__tag {
      @apply text-xs text-gray-500 mr-2;
    }
  }
  .section__cards {
    @apply flex overflow-x-auto flex-no-wrap mt-4;
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
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0) 16%,
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

.dark-theme {
  .section__title {
    @apply text-white;
  }
}
</style>