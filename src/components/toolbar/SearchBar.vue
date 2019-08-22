<template>
<div class="flex-row search-bar">
  <responsive-image class="icon" :path="`company-data/search`" />
  <span class="text">Search companies</span>
</div>
</template>

<script>
import ResponsiveImage from '../ResponsiveImage.vue'

export default {
  components: {
    ResponsiveImage
  }
}
</script>

<style lang="scss" >
.search-bar {
    background-color: #1F2B5A;
    border-radius: 4px;
    padding: 0.1vh 0.4vw;
    width: 20vw;
    .icon {
        margin: auto 0.4vw;
        width: 2.4vw;
        height: 2.4vw;
    }
    .text {
        margin: auto 0;
    }
}
</style>
