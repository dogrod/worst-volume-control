<template lang="pug">
.index
  h1 {{ title }}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'Index'
})
export default class Index extends Vue {
  title: string = 'worst volume control LOL'
}
</script>

<style lang="scss">
  .index {
    font-weight: normal
  }
</style>
