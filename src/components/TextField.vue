<template>
<div class="text-field">
  <span class="label">{{ label }}</span>
  <textarea v-if="area" class="field area" rows="8" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" />
  <input v-else class="field input" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" />
</div>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    label: String,
    placeholder: String,
    area: Boolean
  }
}
</script>

<style lang="scss">
.text-field {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 2vh;
    .label {
        color: #B1B1B1;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.88em;
    }
    .field {
        margin: 0.8vh 0;
        border: 1px solid #dadada;
        border-radius: 3.2px;
        box-shadow: 0 1px 8px rgba(0,0,0,0.08);
        padding: 0.8vw;
        font-size: 1.2em;
        color: rgba(0,0,0,0.64);
    }
    .field::placeholder {
        color: #d1d1d1;
    }
    .input {
        max-width: 24vw;
    }
    .area {
        font-family: 'Lato', sans-serif;
        resize: none;
    }
}
</style>
