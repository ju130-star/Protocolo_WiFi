import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secao5Component } from './secao5.component';

describe('Secao5Component', () => {
  let component: Secao5Component;
  let fixture: ComponentFixture<Secao5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Secao5Component]
    });
    fixture = TestBed.createComponent(Secao5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
