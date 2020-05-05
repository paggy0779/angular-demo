import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUrfComponent } from './register-urf.component';

describe('RegisterUrfComponent', () => {
  let component: RegisterUrfComponent;
  let fixture: ComponentFixture<RegisterUrfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterUrfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
