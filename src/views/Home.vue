<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ computedMsg }}
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
// import { Mixins } from 'vue-class-component'
// import HelloWorld from '../views/debug'
import UserInfo from '@/mixins/userInfo'

@Component({
  components: {},
})
export default class Home extends Vue {
  private obj: object = {
    name: 'xm',
    age: '22',
  }
  private str: string = 'hello world cc'
  private num: number = 0

  // $ref: {
  //   HelloWorld
  // }

  public addTime(a: string): number {
    return this.num
  }

  created(): void {}

  get computedMsg(): string {
    return 'hi' + this.str
  }
}
</script>
