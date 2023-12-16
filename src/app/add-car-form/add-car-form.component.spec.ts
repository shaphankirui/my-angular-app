import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarFormComponent } from './add-car-form.component';

describe('AddCarFormComponent', () => {
  let component: AddCarFormComponent;
  let fixture: ComponentFixture<AddCarFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCarFormComponent]
    });
    fixture = TestBed.createComponent(AddCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
