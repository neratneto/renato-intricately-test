<template>
<div class="flex-column button">
  <span class="text">{{ text }}</span>
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
.button {
    background-color: #5D699A;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1em;
    .text {
        margin: auto 2vw;
    }
}
</style>
