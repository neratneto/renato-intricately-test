import 'Styles/main.scss';
import Vue from 'vue';
import DefaultPage from './components/DefaultPage.vue';
import store from './vuex'

new Vue({
  render: createElement => createElement(DefaultPage),
  store,
  el: '#app'
});
