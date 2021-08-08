import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import { create, NButton } from 'naive-ui';

import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';

const NaiveUI = create({
  components: [NButton],
});

const app = createApp(App);

app.use(Router);
app.use(NaiveUI);
app.mount('#app');
