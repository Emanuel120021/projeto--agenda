export class Contato {
  private __nome!: string;
  private __telefone!: string;
  private __email!: string;

  constructor() {
    this.nome = '';
    this.telefone = '';
    this.email = '';
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

  get nome(): string {
    return this.__nome;
  }
  get telefone(): string {
    return this.__telefone;
  }
  get email(): string {
    return this.__email;
  }
}
