<template>
<div class="page">
  <toolbar />

  <div class="outer-container">
    <breadcrumbs />
    <div class="inner-container">
      <div class="menus">
        <menus />
      </div>
      <div class="tab-content">
        <company-data v-if="selectedTab === 'COMPANY DATA'" />
        <!-- <company-table v-else-if="selectedTab === 'COMPANY TABLE'" /> -->
        <company-page v-else-if="selectedTab === 'COMPANY PAGE'" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Toolbar from './toolbar/Toolbar.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import Menus from './Menus.vue'
import CompanyData from './CompanyData.vue'
import CompanyPage from './CompanyPage.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Toolbar,
    Breadcrumbs,
    Menus,
    CompanyData,
    CompanyPage
  },
  computed: {
    ...mapState({
      selectedTab: state => state.selectedTab
    })
  }
}
</script>

<style lang="scss">
.page {
    .outer-container {
        display: flex;
        margin: auto 10vw;
        flex-direction: column;
        flex-wrap: wrap;
        .inner-container {
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-around;
            .menus {
                width: 25%;
            }
            .tab-content {
                margin-left: 2vw;
                width: 75%;
            }
        }
    }
}
</style>
