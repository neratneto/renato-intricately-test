<template>
<div class="text-field">
  <span class="label">{{ label }}</span>
  <input class="field input" :placeholder="placeholder" :value="value" @input="updateValue" @blur="$emit('blur')" />
</div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    label: String,
    placeholder: String,
    type: {
      default: 'text',
      type: String
    }
  },
  methods: {
    updateValue(event) {
      let value = event.target.value
      if (this.type === 'number') {
        if (value.includes('$ ')) value = value.substring(1)
        value = isNaN(Number(value)) ? null : Math.abs(value)
      }
      event.target.value = value
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.text-field {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 2vh;
    .input {
        max-width: 24vw;
    }
}
</style>
