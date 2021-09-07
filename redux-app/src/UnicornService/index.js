export default class UnicornService {
  _apiBase = "https://crudcrud.com/api/66ba44e08a344041a5a64861832e6c70/";
  getResource = async (url, param = {}) => {
    const result = await fetch(`${this._apiBase}${url}`, param);
    // if (!result.ok) {
    //   throw new Error("Filed to acces: 'https://crudcrud.com/api/'");
    // }
    return result;
  };

  getUnicorns = async () => {
    const result = await this.getResource("unicorns/");
    return result.json();
  };

  getUnicorn = async (id) => {
    const result = await this.getResource(`unicorns/${id}`);
    return result.json();
  };

  deleteUnicorn = async (id) => {
    return await this.getResource(`unicorns/${id}`, { method: "DELETE" });
  };

  addUnicorn = async (data) => {
    await this.getResource("unicorns/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
  };

  updateUnicorn = async (id, data) => {
    await this.getResource(`unicorns/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
  };
}
