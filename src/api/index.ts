import { Service } from '../ulits/index';

class Api {
  static post = (url: string, data = {}): any => {
    return Service.request({
      method: 'POST',
      url,
      data,
    });
  };

  static get = (url: string, params = {}): any => {
    return Service.request({
      method: 'GET',
      url,
      params,
    });
  };
}

export default Api;
