<template>
<img :src="image('')" :srcset="`${image('@2x')}, ${image('@3x')}`" />
</template>

<script>
export default {
  props: {
    path: String
  },
  methods: {
    image(resolution) {
      return require(`../images/${this.path}${resolution}.png`)
    }
  }
}
</script>
