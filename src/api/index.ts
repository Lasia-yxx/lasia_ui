import { Service } from '../ulits/index';

class Api {
  static post = (url: string, data = {}) => {
    return Service.request({
      method: 'POST',
      url,
      data,
    });
  };

  static get = (url: string, params = {}) => {
    return Service.request({
      method: 'GET',
      url,
      params,
    });
  };
}

export default Api;
