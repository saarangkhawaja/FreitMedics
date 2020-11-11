import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartEncounterComponent } from './start-encounter.component';

describe('StartEncounterComponent', () => {
  let component: StartEncounterComponent;
  let fixture: ComponentFixture<StartEncounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
