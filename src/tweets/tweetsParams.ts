export class TweetsParams {
  private _qtdTweets?: number;
  private _pagina?: number;

  constructor(queryParams) {
    this.qtdTweets = queryParams.qtdNoticias;
    this.pagina = queryParams.pagina;
  }

  get qtdTweets() {
    return this._qtdTweets;
  }

  set qtdTweets(qtdTweets: number) {
    this._qtdTweets = qtdTweets ? qtdTweets : 10;
  }

  get pagina() {
    return this._pagina;
  }

  set pagina(pagina: number) {
    this._pagina = pagina ? pagina - 1 : 0;
  }
}
