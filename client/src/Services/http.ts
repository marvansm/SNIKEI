import axios, { type AxiosInstance } from "axios";

class ApiServices {
  axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 1000,
    });
  }

  async getData(url: string): Promise<any> {
    const res = await this.axiosInstance.get(url);
    return res.data;
  }
}

export default ApiServices;
