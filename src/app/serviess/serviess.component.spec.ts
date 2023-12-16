import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiessComponent } from './serviess.component';

describe('ServiessComponent', () => {
  let component: ServiessComponent;
  let fixture: ComponentFixture<ServiessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiessComponent]
    });
    fixture = TestBed.createComponent(ServiessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
