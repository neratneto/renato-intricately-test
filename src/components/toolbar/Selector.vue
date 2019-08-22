<template>
<div class="selector">
  <span class="text">{{ text }}</span>
  <responsive-image class="icon" :path="`company-data/arrow-down`" />
</div>
</template>

<script>
import ResponsiveImage from '../ResponsiveImage.vue'

export default {
  components: {
    ResponsiveImage
  },
  props: {
    text: String
  }
}
</script>

<style lang="scss" >
.selector {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin: auto 1vw;
    .icon {
        margin: auto;
        width: 2.4vw;
        height: 2.4vw;
    }
    .text {
        font-weight: bold;
        margin: auto;
    }
}
</style>
