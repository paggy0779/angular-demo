import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitbasketComponent } from './fruitbasket.component';

describe('FruitbasketComponent', () => {
  let component: FruitbasketComponent;
  let fixture: ComponentFixture<FruitbasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitbasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
