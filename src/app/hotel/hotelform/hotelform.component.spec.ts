import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelformComponent } from './hotelform.component';

describe('HotelformComponent', () => {
  let component: HotelformComponent;
  let fixture: ComponentFixture<HotelformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
