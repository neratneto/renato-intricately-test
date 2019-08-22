<template>
<div class="card">
  <div v-if="title" class="title-container">
    <p class="title">{{ title }}</p>
  </div>
  <slot />
</div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" >
.card {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .title-container {
        border-bottom: 1px solid #dddddd;
        padding: 1vw;
        .title {
            margin: 0;
            text-transform: uppercase;
            color: #525252;
            font-weight: 600;
            font-size: 0.88em;
        }
    }
}
</style>
