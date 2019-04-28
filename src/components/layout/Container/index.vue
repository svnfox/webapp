<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Container extends Vue {}
</script>
