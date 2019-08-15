<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
    <Search label1="i am a label from debug" label2="bb3333"></Search>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator'
import Search from '@/components/business/Search.vue'

@Component({
  components: {
    Search,
  },
})
export default class HelloWorld extends Vue {
  // @Prop({ type: Object })
  @Provide()
  msg: string = '2333'
  msg2: string = '444'

  beforeCreate() {}
  created() {
    // console.log(this.msg)
  }
  beforeMount() {}
  mounted() {}
  beforeUpdate() {}
  updated() {}
  beforeDestroy() {}
  destroyed() {}
  beforeRouteEnter(to: object, from: object, next: (arg0: (vm: object) => void) => void) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next((vm: object) => {
      // 通过 `vm` 访问组件实例
    })
  }
  beforeRouteUpdate(to: object, from: object, next: () => void) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  }
  beforeRouteLeave(to: object, from: object, next: { (): void; (arg0: boolean): void }) {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
