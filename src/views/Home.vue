<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld ref="HelloWorld" msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="close">23333</button>
    <input type="text">
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld' // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @Provide()
  obj: object = {
    name: 'xm',
    age: '22',
  }
  @Provide() str: string = 'hello world'
  @Provide() num: number = 0

  $ref: {
    HelloWorld
  }

  addTime(a: string): number {
    return this.num
  }

  close() {
    window.parent.postMessage('typeeee',"*");
  }

  get computedMsg() {
    return 'hi' + this.str
  }

  created() {
    this.$http.get('/idcard').then(res => {
      console.log(res, 'ress hhh')
    })
  }

  mounted() {}

  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
  }

  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  }

  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>
