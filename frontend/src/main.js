import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const VueUploadComponent = require('vue-upload-component')
Vue.component('file-upload', VueUploadComponent)

new Vue({
	vuetify,
	render: h => h(App)
}).$mount('#app')
