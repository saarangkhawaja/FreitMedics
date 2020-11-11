import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-start-encounter',
  templateUrl: './start-encounter.component.html',
  styleUrls: ['./start-encounter.component.css']
})
export class StartEncounterComponent implements OnInit {

  constructor(
    private modalService:NgbModal
  ) { }

  ngOnInit(): void {
  }


  closeModal(){
    this.modalService.dismissAll();
  }

}
