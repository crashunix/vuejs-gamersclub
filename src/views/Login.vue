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

export default {
  name: "Post",
  data: function () {
    return {
      identifier: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$store.dispatch("makeLogin", {identifier: this.identifier, password: this.password});
    }
  }
};
</script>

<style lang="scss">
</style>