import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildTemplateVarComponent } from './view-child-template-var.component';

describe('ViewChildTemplateVarComponent', () => {
  let component: ViewChildTemplateVarComponent;
  let fixture: ComponentFixture<ViewChildTemplateVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildTemplateVarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildTemplateVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
