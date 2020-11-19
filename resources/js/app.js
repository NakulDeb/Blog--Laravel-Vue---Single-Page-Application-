import Vue from 'vue';
import router from './router';

require('./bootstrap');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('App', require('./components/App.vue').default);
Vue.component('nav-bar', require('./components/pages/nav-bar.vue').default);
Vue.component('page-footer', require('./components/pages/page-footer.vue').default);


const app = new Vue({
    el: '#app',
    router,
});
