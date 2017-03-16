<template lang="html">
  <div class="app">
    <nav class="top-nav">
      <div class="container">
        <div class="navbar">
          <div class="navbar__left">
              <router-link class="nav-item is-brand" :to="{ name: 'index' }">Ribbiter</router-link>
          </div>
          <div class="navbar__right">
            <router-link class="nav-item" :to="{ name: 'index' }">Ribbits</router-link>
            <router-link class="nav-item" :to="{ name: 'index' }">Frogs</router-link>
            <router-link class="nav-item" :to="{ name: 'index' }">Login</router-link>
          </div>
        </div>
      </div>
    </nav>

    <transition>
      <keep-alive>
        <router-view class="app__content"></router-view>
      </keep-alive>
    </transition>
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
