<template>
  <div id="app">
    <component :is="layout">

    </component>
  </div>
</template>

<script>
  import EmptyLayout from './layouts/EmptyLayout';
  import LibrarianLayout from "./layouts/LibrarianLayout";
  import MemberLayout from "./layouts/MemberLayout";
  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: {
      EmptyLayout, LibrarianLayout, MemberLayout
    }
  }
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>
