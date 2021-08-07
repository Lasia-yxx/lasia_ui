import Api from '../api';

class Blog {
  static getTestData = async () => {
    const params = {
      name: 'lasia',
      age: 18,
    };
    const data: any = await Api.post('test/testData', params);
    return data;
  };
}

export default Blog;
