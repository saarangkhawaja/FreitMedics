import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NgxPermissionsService } from 'ngx-permissions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
  ) { }
  ngOnInit(): void {
    AOS.init();
  }
  title = 'app';

}
