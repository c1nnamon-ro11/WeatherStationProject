import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardCitiesInfoComponent } from './big-card-cities-info.component';

describe('BigCardCitiesInfoComponent', () => {
  let component: BigCardCitiesInfoComponent;
  let fixture: ComponentFixture<BigCardCitiesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCardCitiesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigCardCitiesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
