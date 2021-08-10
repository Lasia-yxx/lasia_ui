import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import Store from './store';
import { create, NButton, NModal, NCard, NInput } from 'naive-ui';
import Blog from './engine';
import { Icon } from '@vicons/utils';

import 'vfonts/Lato.css';
// 等宽字体
import 'vfonts/FiraCode.css';

const NaiveUI = create({
  components: [NButton, NModal, NCard, NInput],
});

const { avatar, name } = await Blog.fetchAuthor();

Store.setAuthorInfo({ name, avatar });

const app = createApp(App);

app.config.globalProperties.$Store = Store;
app.component('Icon', Icon);
app.use(Router);
app.use(NaiveUI);
app.mount('#app');
