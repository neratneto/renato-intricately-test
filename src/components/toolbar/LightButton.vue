<template>
<div class="button">
  <p>{{ text }}</p>
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
    padding: 1vw 2vw;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.8em;
}
</style>
