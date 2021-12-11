import { Component, OnInit } from '@angular/core';

import { Contato } from './Contato';

@Component({
  selector: 'app-adicao-contato',
  templateUrl: './adicao-contato.component.html',
  styleUrls: ['./adicao-contato.component.scss'],
})
export class AdicaoContatoComponent implements OnInit {
  contatos: Contato[];
  pessoa: Contato;

  constructor() {
    this.contatos = [];
    this.pessoa = new Contato();
  }

  ngOnInit(): void {}
  pushList(novo: Contato) {
    if (novo != null) {
      this.contatos.push(novo);
    }
  }
}
