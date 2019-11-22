import { BASE_URL } from '../constants';
import appConfig from '../appConfig.json';

class Api {
  generateFullUrl(url) {
    const urlObj = new URL(`${BASE_URL}${url}`);
    urlObj.searchParams.set('api_key', appConfig.API_KEY);
    return urlObj.toString();
  }

  get = async (url) => {
    const response = await fetch(this.generateFullUrl(url));
    const data = await response.json();

    return data;
  };
}

export default new Api();
