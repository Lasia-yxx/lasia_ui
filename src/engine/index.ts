import Api from '../api';
import { AuthorInfo } from '../type';

class Blog {
  static getTestData = async () => {
    const data: any = await Api.post('/test/testData');
    return data;
  };

  static fetchAuthor = async (): Promise<AuthorInfo> => {
    const { data } = await Api.get('/author/fetchAuthor');
    return data;
  };

  static fetchTest = async () => {
    const data = await Api.get('/test/fetchAuthor');
    return data;
  };
}

export default Blog;
