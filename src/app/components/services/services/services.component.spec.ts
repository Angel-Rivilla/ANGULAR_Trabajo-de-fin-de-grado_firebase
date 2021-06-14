import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesServicesComponent } from './services.component';

describe('ServicesServicesComponent', () => {
  let component: ServicesServicesComponent;
  let fixture: ComponentFixture<ServicesServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
