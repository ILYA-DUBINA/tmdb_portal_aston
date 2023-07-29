export default class SwapiService {
  constructor() {
    this.keyApi = '934b8717141134b934d6654aab675306';
    this.urlConst = 'https://api.themoviedb.org/3/';
  }

  async getResource(url) {
    const res = await fetch(`${this.urlConst}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    const body = await res.json();
    console.log(body);
    return body;
  }

  async getAllMovies(search, _page) {
    const res = await this.getResource(
      `search/movie?api_key=${this.keyApi}&language=en-US&query=${search}&page=${_page}`,
    );
    return res.results;
  }
}
