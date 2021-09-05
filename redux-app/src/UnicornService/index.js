export default class UnicornService {
  _apiBase = "https://crudcrud.com/api/a69972d241f04d72880bc069f3845f98/";
  async getResource(url, param = {}) {
    const result = await fetch(`${this._apiBase}${url}`, param);
    if (!result.ok) {
      throw new Error();
    }
    return result;
  }

  async getUnicorns() {
    let result = await this.getResource("unicorns/");
    return await result.json();
  }

  async getUnicorn(id) {
    let result = await this.getResource(`unicorns/${id}`);
    return await result.json();
  }

  async deleteUnicorn(id) {
    return await this.getResource(`unicorns/${id}`, { method: "DELETE" });
  }

  async addUnicorn(data) {
    await this.getResource("unicorns/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
  }

  async updateUnicorn(id, data) {
    await this.getResource(`unicorns/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
  }
}
