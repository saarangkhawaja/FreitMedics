import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardImageModalComponent } from './add-card-image-modal.component';

describe('AddCardImageModalComponent', () => {
  let component: AddCardImageModalComponent;
  let fixture: ComponentFixture<AddCardImageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardImageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
