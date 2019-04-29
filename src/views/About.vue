<template>
  <div class="about">
    <h1>{{ aboutText }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'vue-property-decorator'

export default class About extends Vue {
  aboutText: string = 'This is an about page'
}
</script>

<style scoped lang="scss"></style>
