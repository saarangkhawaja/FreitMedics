import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterNotesComponent } from './encounter-note.component';

describe('EncounterNotesComponent', () => {
  let component: EncounterNotesComponent;
  let fixture: ComponentFixture<EncounterNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
