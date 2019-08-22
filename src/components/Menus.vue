<template>
<card class="tabs">
  <div :class="`tab ${tab === selectedTab && 'selected-tab'}`" v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab)">{{ tab }}</div>
</card>
</template>

<script>
import Card from './Card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Card
  },
  computed: {
    ...mapState({
      selectedTab: state => state.selectedTab
    })
  },
  methods: {
    ...mapActions(['changeTab'])
  },
  data: () => ({
    tabs: ['COMPANY DATA', 'COMPANY TABLE', 'COMPANY PAGE']
  }),
};
</script>

<style lang="scss">
.tabs {
    .tab {
        color: #5D699A;
        padding: 2vw;
        font-weight: 600;
        font-size: 1em;
        border-bottom: 1px solid #dddddd;
        border-left: 4px solid transparent;
    }
    .tab:last-child {
        border-bottom: none;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .tab:first-child {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    .selected-tab {
        background-color: #FAFBFC;
        border-left: 4px solid #344279;
        color: #525252;
    }
}
</style>
