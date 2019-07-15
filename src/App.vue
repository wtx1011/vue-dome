<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button @click="setAd">添加</button>
      <button @click="setCl">删除</button>
    <div v-if="isShow" class="ya">
      我是底部，哈哈哈，你看到我了吗
      <span>{{mag | formatDate}}</span>
    </div>
    <section class="joinState">
      <div class="joinStateHead">
        <span class="h3">全国改性料通讯录</span>
        <span class="joinStatus" @click="invokePushItems(item)">加入收藏列</span>
      </div>
    </section>
    <book/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex' // 先要引入
import book from '@/components/ad'
export default {
  name: 'App',
  data () {
    return {
      mag: '1563158846',
      item: {
        id: '01',
        productName: '苹果',
        price: '1.6元/斤'
      }
    }
  },
  components: {
    book
  },
  computed: {
    // isShow () {
    //   return this.$store.getters.isShow
    // }
    // ...mapState({ // 这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
    //   isShow: state => state.footerStatus.showFooter // 注意这些与上面的区别就是state.footerStatus,
    //   // 里面定义的showFooter是指footerStatus.js里state的showFooter
    // })
    // 你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
    ...mapGetters('footerStatus', { // footerStatus指的是modules文件夹下的footerStatus.js模块
      isShow: 'isShow' // 第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
      // 第二个isShow是对应的footerStatus.js里的getters里的isShow
    })
  },
  methods: {
    setAd () {
      // this.$store.dispatch('showFooter')
      this.$store.dispatch('footerStatus/showFooter')
    },
    setCl () {
      // this.$store.dispatch('hideFooter')
      this.$store.dispatch('footerStatus/hideFooter')
    },
    ...mapActions('collection', [ // collection是指modules文件夹下的collection.js
      'invokePushItems' // collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
    ])
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
.joinState{
  margin-top:20px;
}
</style>
