import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavaalHeaderComponent } from './savaal-header.component';

describe('SavaalHeaderComponent', () => {
  let component: SavaalHeaderComponent;
  let fixture: ComponentFixture<SavaalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavaalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavaalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
