import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersContainerComponent } from './parameters-container.component';

describe('ParametersContainerComponent', () => {
  let component: ParametersContainerComponent;
  let fixture: ComponentFixture<ParametersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
