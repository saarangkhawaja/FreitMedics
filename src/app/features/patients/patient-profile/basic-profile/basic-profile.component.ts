import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-profile',
  templateUrl: './basic-profile.component.html',
  styleUrls: ['./basic-profile.component.css']
})
export class BasicProfileComponent implements OnInit {

  @Input() profilePatient: any;
  @Input() mrnPrefix: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
