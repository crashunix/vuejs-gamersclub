<template>
  <div class="header">
    <div class="header__toolbar">
      <button class="toolbar__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search toolbar__icon"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      <div class="header__menu">
        <button
          @click="themeMenu = !themeMenu"
          class="toolbar__button menu__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-more-vertical toolbar__icon"
          >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
        <div class="menu__container" v-show="themeMenu">
          <select class="menu__switcher" v-model="theme" @change="handleChange">
            <option value="dark-theme">Dark</option>
            <option value="light-theme">Light</option>
          </select>
        </div>
      </div>
    </div>
    <h2 class="header__title">Explorar</h2>
    <nav class="header__nav">
      <router-link :to="{name: 'News'}">News</router-link>
      <router-link :to="{name: 'Matches'}">Matches</router-link>
      <router-link :to="{name: 'Ranking'}">Ranking</router-link>
      <div class="nav__active" v-bind:class="currentRouteName"></div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FeedHeader",
  data: function () {
    return {
      themeMenu: false,
    };
  },
  computed: {
    ...mapGetters(["theme"]),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    handleChange(event) {
      this.themeMenu = false;
      this.$store.commit("setTheme", event.target.value);
      localStorage.setItem("theme", event.target.value);
    },
    setCurrentItem(item) {
      this.currentItem = item;
    },
  },
};
</script>

<style lang="scss">
.header {
  @apply bg-white px-6;
  .header__toolbar {
    @apply flex justify-between py-6;
  }
  .header__menu {
    @apply relative;
    .menu__button {
    }
    .menu__container {
      @apply absolute right-0 p-3 shadow-md rounded-md;
      .menu__switcher {
        @apply text-sm;
      }
    }
  }
  .header__title {
    @apply text-3xl font-light leading-none py-2;
  }
  .header__nav {
    @apply pt-2 pb-1 relative flex;
    a {
      @apply text-sm w-20;
      &.is-active {
        @apply font-semibold;
      }
    }
    .nav__active {
      @apply w-6 bg-blue-400 rounded-md absolute bottom-0;
      height: 2px;
      transition: 0.2s;
      &.News {
        left: 0;
      }
      &.Matches {
        left: 5rem;
      }
      &.Ranking {
        left: 10rem;
      }
    }
  }
}
.dark-theme {
  .header {
    @apply bg-gray-900;
    .header__toolbar {
      .toolbar__button .toolbar__icon {
        @apply text-white;
      }
    }
    .header__menu {
      .menu__button {
      }
      .menu__container {
        @apply  bg-gray-800;
        .menu__switcher {
          @apply bg-gray-900 text-white;
        }
      }
    }
    .header__title {
      @apply text-white;
    }
    .header__nav {
      a {
        @apply text-white;
      }
    }
  }
}
</style>