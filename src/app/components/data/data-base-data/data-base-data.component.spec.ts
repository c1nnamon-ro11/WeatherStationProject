import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBaseDataComponent } from './data-base-data.component';

describe('DataBaseDataComponent', () => {
  let component: DataBaseDataComponent;
  let fixture: ComponentFixture<DataBaseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBaseDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBaseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
