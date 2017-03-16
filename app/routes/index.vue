<template lang="html">
  <div class="index">
    <div class="welcome-container">
      <header>Welcome to Ribbiter</header>
      <div class="button-container">
        <router-link :to="{ name: 'login' }"><button type="button" name="button">Login</button></router-link>
        <router-link :to="{ name: 'register' }"><button type="button" name="button">Register</button></router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
