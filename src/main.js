import Vue from 'vue';
import _ from 'lodash';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import {
  library,
} from '@fortawesome/fontawesome-svg-core';

import {
  faSearch,
  faBars,
  faComment,
  faTv,
} from '@fortawesome/free-solid-svg-icons'; // fas

// import {
//   faEnvelope,
//   faClock,
//   faUserCircle,
//   faCheckCircle,
// } from '@fortawesome/free-regular-svg-icons'; // far
import {
  faTwitter,
  faFacebookSquare,
  faGooglePlusG,
  faInstagram,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'; // fab

import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);


library.add(faSearch, faBars, faComment, faTv); // fas
// library.add(faEnvelope, faClock, faUserCircle, faCheckCircle); // far
library.add(faTwitter, faFacebookSquare, faGooglePlusG, faInstagram, faYoutube, faLinkedin); // fab

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
