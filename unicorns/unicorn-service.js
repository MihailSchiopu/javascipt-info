export default class UnicornService {
  _apiBase = "https://crudcrud.com/api/bc4b929978f94193a91192222c18bbe4/";
  async getResource(url, method = {}) {
    const result = await fetch(`${this._apiBase}${url}`, method);
    if (!result.ok) {
      throw new Error();
    }
    return await result.json();
  }

  async getUnicorns() {
    return await this.getResource("unicorns/");
  }

  async getUnicorn(id) {
    return await this.getResource(`unicorns/${id}`);
  }

  async deleteUnicorn(id) {
    return await this.getResource(`unicorns/${id}`, { method: "DELETE" });
  }

  async addUnicorn(data) {
    let result = await fetch(`${this._apiBase}unicorns`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    return await result.json();
  }
}
