import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import { create, NButton, NModal, NCard, NInput } from 'naive-ui';

const NaiveUI = create({
  components: [NButton, NModal, NCard, NInput],
});

const app = createApp(App);

app.use(Router);
app.use(NaiveUI);
app.mount('#app');
