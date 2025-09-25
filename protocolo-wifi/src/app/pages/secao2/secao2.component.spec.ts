import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao2Component } from './secao2.component';

describe('Secao2Component', () => {
  let component: Secao2Component;
  let fixture: ComponentFixture<Secao2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Secao2Component]
    });
    fixture = TestBed.createComponent(Secao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
