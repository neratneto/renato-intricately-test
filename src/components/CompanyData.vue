<template>
<card class="company-data">
  <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

  <text-field label="Company name" placeholder="e.g. Your Company Name" v-model="company.name" />
  <text-field label="Company spend" placeholder="e.g. $150,000" v-model="company.spend" />
  <text-field label="Company spend ability" placeholder="e.g. $150,000 - $330,000" v-model="company.spendAbility" />
  <text-field label="Notes" area placeholder="e.g. Good Tech Company" v-model="company.notes" />
</card>
</template>

<script>
import Card from './Card.vue'
import TextField from './TextField.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Card,
    TextField
  },
  data: () => ({
    company: {
      name: null,
      spend: null,
      spendAbility: null,
      notes: null
    }
  })
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
}
</style>
