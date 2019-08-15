<template>
  <div class="search">
    <span>{{ label1 }}</span>
    <span>{{ label2 }}</span>
    <input v-model="inputText" type="text" aria-label="请输入" />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator'

@Component({
  props: {
    label1: String,
  },
})
export default class Search extends Vue {
  @Prop(String)
  label2: string | undefined

  private inputText: string = ''
}
</script>

<style scoped lang="scss"></style>
