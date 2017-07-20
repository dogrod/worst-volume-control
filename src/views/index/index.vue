<template lang="pug">
.index
  h1 {{ title }}
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'Index'
})
export default class Index extends Vue {
  title: string = 'Worst volume control LOL'
}
</script>

<style lang="scss">
  .index {
    font-weight: normal
  }
</style>
