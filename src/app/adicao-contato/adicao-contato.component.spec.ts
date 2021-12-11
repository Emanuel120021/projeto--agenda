import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicaoContatoComponent } from './adicao-contato.component';

describe('AdicaoContatoComponent', () => {
  let component: AdicaoContatoComponent;
  let fixture: ComponentFixture<AdicaoContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicaoContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicaoContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
