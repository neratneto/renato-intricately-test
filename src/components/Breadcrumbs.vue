<template>
<p class="breadcrumbs">HOME <span class="slash-margin">/</span> {{ selectedTab }}</p>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      selectedTab: state => state.selectedTab
    })
  }
}
</script>

<style lang="scss" >
.breadcrumbs {
    color: #0000008f;
    font-size: 0.92em;
    font-weight: 500;
    margin: 3vh 0;
    .slash-margin {
        margin: auto 1vw;
    }
}
</style>
