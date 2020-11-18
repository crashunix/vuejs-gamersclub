<template>
  <div class="login">
    login
    <input type="text" name="identifier" placeholder="E-mail" v-model="identifier" />
    <input type="password" name="password" placeholder="Senha" v-model="password" />

    {{identifier + ' - ' + password}}
    <button @click="login">Login</button>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: "Post",
  data: function () {
    return {
      identifier: '',
      password: ''
    };
  },
  computed: {
    ...mapGetters(["getLoggedIn"]),
    loggedIn() {
      return this.getLoggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/matches');
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", {identifier: this.identifier, password: this.password}).then(() => {
        this.$router.push('/matches');
      });
    }
  }
};
</script>

<style lang="scss">
</style>