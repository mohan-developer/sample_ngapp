import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInfo2Component } from './service-info2.component';

describe('ServiceInfo2Component', () => {
  let component: ServiceInfo2Component;
  let fixture: ComponentFixture<ServiceInfo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceInfo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
