<template>
<div class="selector">
  <p>{{ text }}</p>
  <img class="icon" src="../../images/company-data/arrow-down.png" srcset="../../images/company-data/arrow-down@2x.png 80w, ../../images/company-data/arrow-down@3x.png 120w" />
</div>
</template>

<script>
export default {
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
    .icon {
        width: 3.2vw;
        height: 3.2vw;
    }
}
</style>
