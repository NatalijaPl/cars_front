import axios from "axios";

class HttpService {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://localhost:8000/api",
    });
  }
}

export const httpService = new HttpService();
