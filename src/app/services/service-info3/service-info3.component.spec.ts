import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInfo3Component } from './service-info3.component';

describe('ServiceInfo3Component', () => {
  let component: ServiceInfo3Component;
  let fixture: ComponentFixture<ServiceInfo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceInfo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
