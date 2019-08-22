<template>
<div class="flex-row user">
  <responsive-image class="icon" :path="`company-data/group`" />
  <responsive-image class="arrow" :path="`company-data/arrow-down`" />
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
.user {
    margin: auto;
    .icon {
        width: 2.4vw;
        height: 2.4vw;
    }
    .arrow {
        width: 2.4vw;
        height: 2.4vw;
    }
}
</style>
