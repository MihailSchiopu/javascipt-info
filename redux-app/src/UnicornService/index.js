import axios from "axios";

export default class UnicornService {
  _apiKey = "427f1f15ee9b4a769c24188dafbef623";
  _apiBase = `https://crudcrud.com/api/${this._apiKey}/`;

  axiosCreate = axios.create();

  getUnicorns = async () => {
    const result = await axios.get(`${this._apiBase}unicorns`);
    return result.data;
  };

  getUnicorn = async (id) => {
    const result = await axios.get(`${this._apiBase}unicorns/${id}`);
    return result.data;
  };

  deleteUnicorn = async (id) => {
    await this.axiosCreate.delete(`${this._apiBase}unicorns/${id}`);
  };

  addUnicorn = async (data) => {
    await this.axiosCreate.post(`${this._apiBase}unicorns/`, data);
  };

  updateUnicorn = async (id, data) => {
    await this.axiosCreate.put(`${this._apiBase}unicorns/${id}`, data);
  };
}
