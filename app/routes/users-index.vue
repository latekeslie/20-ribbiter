<template lang="html">
  <div class="">
    <div class="user-item" v-for="user in users.items">
      <h2 class="username">{{ user.name }}</h2>
      <span class="email">{{ user.email }}</span>
      <img src="http://lorempixel.com/200/200/cats/" alt="">

    </div>

  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';

export default {
  data() {
    return {
      users: this.$select('users')
    };
  },

  methods: {
    created() {
      const { actionCreators: { findAll } } = userResource;

      store.dispatch(findAll());
    }

  },
};
</script>
