import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao3Component } from './secao3.component';

describe('Secao3Component', () => {
  let component: Secao3Component;
  let fixture: ComponentFixture<Secao3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Secao3Component]
    });
    fixture = TestBed.createComponent(Secao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
