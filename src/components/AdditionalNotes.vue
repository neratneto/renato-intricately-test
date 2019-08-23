<template>
<div class="additional-notes">
  <div class="flex-column activator">
    <span class="label">{{ label }}</span>
    <textarea class="field area" @click="modalTrigger" rows="8" :placeholder="placeholder" :value="value" />
    </div>
  <div class="modal-bg" @click.self="modalTrigger" v-if="modal">
    <card class="modal">
      <div class="title">
        <span class="label title-text">Additional notes</span>
        <div @click="modalTrigger">
          <responsive-image class="close-button"  path="company-data-modal/close" />
        </div>
      </div>

      <textarea class="field area" rows="8" :placeholder="placeholder" :value="inputValue" @input="inputValue = $event.target.value" />

      <div class="save">
        <span class="save-button" @click="save">Save</span>
      </div>
    </card>
  </div>
</div>
</template>

<script>
import ResponsiveImage from './ResponsiveImage.vue'
import Card from './Card.vue'

export default {
  components: {
    ResponsiveImage,
    Card
  },
  props: {
    value: [String, Number],
    label: String,
    placeholder: String
  },
  data: () => ({
    modal: false,
    inputValue: null
  }),
  methods: {
    modalTrigger() {
      this.modal = !this.modal
    },
    save() {
      this.$emit('input', this.inputValue)
      this.modalTrigger()
    }
  },
}
</script>

<style lang="scss">
.additional-notes {
    margin-top: 2vh;
    .activator {
        .area {
            font-family: 'Lato', sans-serif;
            resize: none;
        }
    }
    .modal {
        margin: auto;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        width: 800px;
        padding: 2vw;
        .title {
            justify-content: space-between;
            display: flex;
            .title-text {
                margin: 0.4vw 0;
            }
            .close-button {
                margin: 0;
                width: 2vw;
                height: 2vw;
                cursor: pointer;
            }
        }
        .area {
            font-family: 'Lato', sans-serif;
            resize: none;
            margin: 2vh 0;
        }
        .save {
            justify-content: flex-end;
            display: flex;
            margin-top: 1vw;
            .save-button {
                cursor: pointer;
                padding: 0.8vw 3.2vw;
                background-color: #394783D1;
                text-transform: uppercase;
                border-radius: 4px;
                font-weight: 600;
                font-size: 0.8em;
                color: #ffffff;
            }
        }
    }
    .modal-bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        overflow: hidden;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.4);
        display: flex;
    }
}
</style>
