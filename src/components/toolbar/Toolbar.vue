<template>
<div class="toolbar">
  <img class="logo" src="../../images/company-data/logo-pink.png" srcset="../../images/company-data/logo-pink@2x.png 80w, ../../images/company-data/logo-pink@3x.png 120w" />

  <search-bar />

  <p>OR</p>
  <light-button text="NEW SMARTLIST" />

  <selector text="PROSPECT" />
  <selector text="ALERT" />
  <selector text="LEARN" />

  <img alt="browser-select" class="chrome-icon" src="../../images/company-data/default.png" srcset="../../images/company-data/default@2x.png 80w, ../../images/company-data/default@3x.png 120w" />

  <user-menu />
</div>
</template>

<script>
import LightButton from './LightButton.vue'
import Selector from './Selector.vue'
import UserMenu from './UserMenu.vue'
import SearchBar from './SearchBar.vue'

export default {
  components: {
    LightButton,
    Selector,
    UserMenu,
    SearchBar
  }
}
</script>

<style lang="scss" >
.toolbar {
    color: #fafafa;
    padding: 1vw;
    background-color: #394783;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    max-height: 10vh;
    .logo {
        width: 4vw;
        height: 4vw;
    }
    .chrome-icon {
        width: 3.2vw;
        height: 3.2vw;
    }
}
</style>
