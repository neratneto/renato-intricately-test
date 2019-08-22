<template>
<div class="toolbar">
  <div class="flex-row">
    <responsive-image class="logo" :path="`company-data/logo-pink`" />

    <search-bar />
    <span style="margin: auto 1vw;">OR</span>
    <light-button text="NEW SMARTLIST" />
  </div>

  <div class="flex-row">
    <selector text="PROSPECT" />
    <selector text="ALERT" />
    <selector text="LEARN" />
  </div>

  <div class="flex-row">
    <responsive-image class="chrome-icon" :path="`company-data/default`" />
    <user-menu />
  </div>
</div>
</template>

<script>
import ResponsiveImage from '../ResponsiveImage.vue'
import LightButton from './LightButton.vue'
import Selector from './Selector.vue'
import UserMenu from './UserMenu.vue'
import SearchBar from './SearchBar.vue'

export default {
  components: {
    ResponsiveImage,
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
    max-height: 6vh;
    position: fixed;
    width: 100%;
    .logo {
        margin: auto 1vw;
        width: 2.8vw;
        height: 2.8vw;
    }
    .chrome-icon {
        margin: auto 1vw;
        width: 2.4vw;
        height: 2.4vw;
    }
}
</style>
