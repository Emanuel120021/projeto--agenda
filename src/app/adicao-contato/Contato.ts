export class Contato {
  private __nome!: string;
  private __telefone!: string;
  private __email!: string;
  private __aniversario!: string;

  constructor() {
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.aniversario = '';
  }

  set nome(nome: string) {
    this.__nome = this.nome;
  }
  set telefone(telefone: string) {
    this.__telefone = this.telefone;
  }
  set email(email: string) {
    this.__email = this.email;
  }
  set aniversario(aniversario: string) {
    this.__aniversario = this.aniversario;
  }

  get nome(): string {
    return this.__nome;
  }
  get telefone(): string {
    return this.__telefone;
  }
  get email(): string {
    return this.__email;
  }
  get aniversario(): string {
    // let niver = this.__aniversario;
    // return `${niver[2]}/${niver[1]}/${niver[0]}`;
    return this.__aniversario;
  }
}
