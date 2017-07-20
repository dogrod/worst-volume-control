<template lang="pug">
.hello
  h1 worst volume control
</template>

<script lang="ts">
import { Component, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

@Component({
  name: 'hello'
})
export default class Hello extends Vue {
  
  @Provide() msg = 'Welcome to Your Vue.js App'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
