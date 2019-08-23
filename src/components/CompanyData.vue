<template>
<card class="company-data">
  <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

  <text-field label="Company name" placeholder="e.g. Your Company Name" v-model="company.name" />
  <text-field label="Company spend" placeholder="e.g. $150,000" v-model="company.spend" type="number" @blur="formatSpend" />
  <text-field label="Company spend ability" placeholder="e.g. $150,000 - $330,000" v-model="company.spendAbility" />
  <additional-notes label="Notes" placeholder="e.g. Good Tech Company" v-model="company.notes" />
  <div class="send">
    <span :class="`send-button ${validForm ? 'enabled' : 'disabled'}`">Send</span>
  </div>
</card>
</template>

<script>
import Card from './Card.vue'
import TextField from './TextField.vue'
import AdditionalNotes from './AdditionalNotes.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Card,
    TextField,
    AdditionalNotes
  },
  data: () => ({
    company: {
      name: null,
      spend: null,
      spendAbility: null,
      notes: null
    }
  }),
  computed: {
    validForm() {
      if (this.company.name && this.validateSpendAbility()) return true
      else return false
    },
  },
  methods: {
    formatSpend() {
      this.company.spend = `$${this.company.spend.toLocaleString('en')}`
    },
    validateSpendAbility() {
      if (this.company.spendAbility) {
        let cleaned = this.company.spendAbility.split('$').join('')
        cleaned = cleaned.split(' ').join('')

        const values = cleaned.split('-')
        if (values[0] < values[1]) return true
      } else return false
    }
  }
}
</script>

<style lang="scss" >
.company-data {
    padding: 2vw;
    .text {
        margin-top: 0;
        font-size: 1.2em;
        line-height: 3.2vh;
        color: rgba(0,0,0,0.8);
    }
    .send {
        justify-content: flex-end;
        display: flex;
        margin-top: 1vw;
        .enabled {
            background-color: #394783D1;
            cursor: pointer;
        }
        .disabled {
            background-color: #39478364;
            cursor: not-allowed;
        }
        .send-button {
            padding: 0.8vw 3.2vw;
            text-transform: uppercase;
            border-radius: 4px;
            font-weight: 600;
            font-size: 0.8em;
            color: #ffffff;
        }
    }
}
</style>
