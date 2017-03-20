<template lang="html">
  <div class="form-container">
    <form v-on:submit.prevent="add(formValues)">
      <header>Create an Account</header>
      <div class="input-container">
        <span class="title">Username</span>
        <input type="text" class="input" v-model="formValues.name">
      </div>
      <div class="input-container">
        <span class="title">Email</span>
        <input type="text" class="input" v-model="formValues.email">
      </div>
      <div class="input-container">
        <span class="password">Password</span>
        <input type="text" class="input" v-model="formValues.password">
      </div>
      <div class="button">
        <button type="submit">Submit</button>
      </div>


    </form>
    <div v-if="users.loading === 'error'">{{ users.error }}</div>

  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';

export default {
  data() {
    return {
      formValues: {
        name: '',
        email: '',
        password: '',
      },
      users: this.$select('users')
    };
  },

  methods: {
    add(formData) {
      const { actionCreators: { create } } = userResource;

      store.dispatch(create(formData)).then(() => {
        this.$router.push({ name: 'users' });
        //this.$router.push({ name:'/login' });
      }).catch((error) => {
        // throw new Error(error)
      });
    },
  }
};
</script>
