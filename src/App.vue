<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="setAd">添加</button>
      <button @click="setCl">删除</button>
    <div v-if="isShow" class="ya">
      我是底部，哈哈哈，你看到我了吗
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: {
    isShow () {
      return this.$store.getters.isShow
    }
  },
  methods: {
    setAd () {
      this.$store.dispatch('showFooter')
    },
    setCl () {
      this.$store.dispatch('hideFooter')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ya{
  background:#f00;
  height:50px;
  line-height:50px;
  margin-top:30px;
}
</style>
