import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-encounter-note',
  templateUrl: './encounter-note.component.html',
  styleUrls: ['./encounter-note.component.css'],
  providers: [DatePipe]
})
export class EncounterNotesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
