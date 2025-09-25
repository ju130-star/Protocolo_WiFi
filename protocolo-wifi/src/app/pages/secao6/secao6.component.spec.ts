import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao6Component } from './secao6.component';

describe('Secao6Component', () => {
  let component: Secao6Component;
  let fixture: ComponentFixture<Secao6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Secao6Component]
    });
    fixture = TestBed.createComponent(Secao6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
