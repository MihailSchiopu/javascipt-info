import axios from "axios";
export default class UnicornService {
  _apiKey = "5e98705e15f04fec997cdec4c35b3599";
  _apiBase = `https://crudcrud.com/api/${this._apiKey}/`;

  axiosCreate = axios.create();

  getUnicorns = async () => {
    try {
      const result = await axios.get(`${this._apiBase}unicorns`);
      console.log(result);
      return result.data;
    } catch (error) {
      throw new Error(`${error} can not get unicorns`);
    }
  };

  getUnicorn = async (id) => {
    const result = await axios.get(`${this._apiBase}unicorns/${id}`);
    return result.data;
  };

  deleteUnicorn = async (id) => {
    try {
      const result = await this.axiosCreate.delete(
        `${this._apiBase}unicorns/${id}`
      );
      return result;
    } catch (error) {
      throw new Error(`${error} can not delete unicorn`);
    }
  };

  addUnicorn = async (data) => {
    try {
      const result = await this.axiosCreate.post(
        `${this._apiBase}unicorns/`,
        data
      );
      return result;
    } catch (error) {
      throw new Error(`${error} can not add unicorn`);
    }
  };

  updateUnicorn = async (id, data) => {
    try {
      const result = await this.axiosCreate.put(
        `${this._apiBase}unicorns/${id}`,
        data
      );
      return result;
    } catch (error) {
      throw new Error(`${error} can not update unicorn`);
    }
  };
}
