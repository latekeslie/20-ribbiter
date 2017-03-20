<template lang="html">
  <div class="">
    <h1 class="title">Recent Ribbits</h1>
  <aside class="sidebar">
    <h3 class="">What's going on?</h3>
    <form action="" class="new-ribbit" v-on:submit.prevent="submit(formValues)">
      <textarea type="text" class="new-ribbit" v-model="formValues.post">
      <button class="clear" v-on:click.prevent="clear()">Clear</button>
      <button class="submit">Submit</button>
    </textarea>
    </form>
    <div class="container">
      <div class="post-item" v-for="post in posts.items">
        <p class="post">{{ posts.post }}</p>

      </div>

    </div>


  </aside>

  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';
import postResource from '../resources/post';

export default {
  data() {
    return {
      posts: this.$select('posts')
    };
  },

  methods: {
    created() {
      const { actionCreators: { findAll } } = userResource;

      store.dispatch(findAll());
    },

    submit(formValues) {
      const { actionCreators: { create } } = postResource;
      // const create = postResource.actionCreators.create

      store.dispatch(create(formValues.post));
    },

    clear() {
      console.log(this.formValues)

    },

  },
};
</script>
