import { reactive } from 'vue';
import { AuthorInfo } from '../type';

const Store = {
  state: reactive({
    authorInfo: <AuthorInfo>{
      avatar: '',
      name: '',
    },
    isDarkMode: false,
  }),
  setAuthorInfo(raw: AuthorInfo) {
    Object.keys(raw).forEach((key): void => {
      this.state.authorInfo[key] = raw[key];
    });
  },
  setDarkMode() {
    this.state.isDarkMode = !this.state.isDarkMode;
  },
};

export default Store;
