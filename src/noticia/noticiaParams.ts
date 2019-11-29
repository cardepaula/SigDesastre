export class NoticiaParams {
  private _id?: string;
  private _titulo?: string;
  private _conteudo?: string;
  private _fonte?: string;
  private _grupoAcesso?: string;
  private _qtdNoticias?: number;
  private _pagina?: number;
  private _tipoFonte?: string;
  private _periodo?: string[];

  constructor(queryParams) {
    this.id = queryParams.id;
    this.titulo = queryParams.titulo;
    this.conteudo = queryParams.conteudo;
    this.fonte = queryParams.fonte;
    this.grupoAcesso = queryParams.grupoAcesso;
    this.qtdNoticias = queryParams.qtdNoticias;
    this.pagina = queryParams.pagina;
    this.tipoFonte = queryParams.tipoFonte;
    this.periodo = queryParams.periodo;
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id ? id : '%';
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(titulo: string) {
    this._titulo = titulo ? `%${titulo}%` : '%';
    this._titulo = this._titulo.replace(' ', '%');
  }

  get conteudo(): string {
    return this._conteudo;
  }

  set conteudo(conteudo: string) {
    this._conteudo = conteudo ? `%${conteudo}%` : '%';
    this._conteudo = this._conteudo.replace(';', '%');
  }

  get fonte(): string {
    return this._fonte;
  }

  set fonte(fonte: string) {
    this._fonte = fonte ? fonte : '%';
    // this._fonte = this._fonte.replace(' ', '%');
  }

  get grupoAcesso() {
    return this._grupoAcesso;
  }

  set grupoAcesso(grupoAcesso: string) {
    this._grupoAcesso = grupoAcesso ? grupoAcesso : '%';
  }

  get qtdNoticias() {
    return this._qtdNoticias;
  }

  set qtdNoticias(qtdNoticias: number) {
    this._qtdNoticias = qtdNoticias ? qtdNoticias : 10;
  }

  get pagina() {
    return this._pagina;
  }

  set pagina(pagina: number) {
    this._pagina = pagina ? pagina - 1 : 0;
  }

  get tipoFonte() {
    return this._tipoFonte;
  }

  set tipoFonte(tipoFonte: string) {
    this._tipoFonte = tipoFonte ? tipoFonte : '%';
  }

  get periodo() {
    return this._periodo;
  }

  set periodo(periodo: string[]) {
    this._periodo = new Array();
    if (periodo) {
      this._periodo.push(periodo[0]);
      this._periodo.push(periodo[1]);
    } else {
      this._periodo.push('2015-11-05');
      this._periodo.push(
        `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`,
      );
    }
  }
}
