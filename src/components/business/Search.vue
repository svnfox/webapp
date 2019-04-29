<template>
  <div class="search">
    <span>{{ label }}</span>
    <input v-model="inputText" type="text" aria-label="请输入" />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator'

@Component({
  props: {
    label: String,
  },
})
export default class Search extends Vue {
  inputText: string = ''
}
</script>

<style scoped lang="scss"></style>
