<template>
<div class="card">
  <slot />
</div>
</template>

<style lang="scss" >
.card {
    border: 1px solid #dddddd;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>
