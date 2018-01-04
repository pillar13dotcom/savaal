import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavaalBodyComponent } from './savaal-body.component';

describe('SavaalBodyComponent', () => {
  let component: SavaalBodyComponent;
  let fixture: ComponentFixture<SavaalBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavaalBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavaalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
