<template>
<div :class="`page ${selectedTab === 'COMPANY PAGE' && 'blue-bg'}`">
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

  <footer :class="`footer ${selectedTab === 'COMPANY PAGE' ? 'white-bg' : 'grey-bg'}`" />
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
    // height: 100%;
    .outer-container {
        display: flex;
        margin: auto 10vw;
        padding-top: 10vh;
        padding-bottom: 20vh;
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
    .footer {
        height: 4vh;
        width: 100%;
        position: fixed;
        bottom: 0;
        padding: 2vw;
    }
}
.blue-bg {
    background-color: #E7E9F3;
}
.white-bg {
    background-color: #ffffff;
}
.grey-bg {
    background-color: #F3F3F3;
}
</style>
