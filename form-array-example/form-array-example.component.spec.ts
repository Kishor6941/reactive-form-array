import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayExampleComponent } from './form-array-example.component';

describe('FormArrayExampleComponent', () => {
  let component: FormArrayExampleComponent;
  let fixture: ComponentFixture<FormArrayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
