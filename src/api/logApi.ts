import Api from "@/api/api";

export default class LogApi extends Api {
  constructor() {
    super();
  }

  static async fetchFileByServiceId(id: number) {
    return await fetch(`${this.apiBaseUrl}/query/${id}/null`);
  }

}