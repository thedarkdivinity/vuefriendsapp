import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import 'vue-universal-modal/dist/index.css';

import VueUniversalModal from 'vue-universal-modal';
const options = {
    // You can set your default options here
};
const app=createApp(App)

app.use(Toast, options);
app.use(VueUniversalModal, {
    teleportTarget: '#modals',
  });
  app.mount('#app')