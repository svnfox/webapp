<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--    <HelloWorld ref="HelloWorld" msg="Welcome to Your Vue.js + TypeScript App"/>-->
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
// import { Mixins } from 'vue-class-component'
// import HelloWorld from '../views/debug'
import UserInfo from '@/mixins/userInfo'

// @Component({
//   components: {
//     HelloWorld,
//   },
// })
export default class Home extends Vue {
  @Provide()
  obj: object = {
    name: 'xm',
    age: '22',
  }
  @Provide() str: string = 'hello world'
  @Provide() num: number = 0

  // $ref: {
  //   HelloWorld
  // }

  addTime(a: string): number {
    return this.num
  }

  greated(): void {}

  get computedMsg(): string {
    return 'hi' + this.str
  }
}
</script>
