import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdetailComponent } from './inputdetail.component';

describe('InputdetailComponent', () => {
  let component: InputdetailComponent;
  let fixture: ComponentFixture<InputdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
