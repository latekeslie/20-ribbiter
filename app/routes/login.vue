<template lang="html">
  <div class="">
    <div class="error" v-if="error"> There was an error logging in</div>
    <form v-on:submit.prevent="save(formValues)">
      <header>Login</header>
      <div class="input-container">
        <span class="title">Username</span>
        <input type="text" class="input" v-model="formValues.name">
      </div>
      <div class="input-container">
        <span class="password">Password</span>
        <input type="text" class="input" v-model="formValues.password">
      </div>
      <div class="button">
        <button type="submit">Submit</button>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: '',
        password: '',
      },
    };
  },

  methods: {
    save() {
      fetch('http://localhost:3333/login', {
        method: 'Post',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formValues)
      }).then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response.json());
      }).then((data) => {
        localStorage.jwt = data.token;
      }).catch(() => {
        this.error = true;
      });
    }

  },
};
</script>
