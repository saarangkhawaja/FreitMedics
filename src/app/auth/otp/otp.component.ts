import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user/user.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  timeLeft: number = 60;
  interval;
  showResend: boolean;
  isLoading: boolean;
  userInfo: User;
  email: any;
  password: any;
  again: boolean;
  phoneCode: any;
  phoneNumber: any;
  fullName: any;
  wrongOTP: boolean;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {

    this.timer()

    if (history.state.status == 1) {
      if (history.state.email && history.state.password) {
        this.email = history.state.email;
        this.password = history.state.password;
      }
      else if (history.state.status == 2) {
        if (history.state.email && history.state.password) {
          this.email = history.state.email;
          this.password = history.state.password;
          this.phoneCode = history.state.phoneCode;
          this.phoneNumber = history.state.phoneNumber;
          this.fullName = history.state.fullName;
        }
      }
      else if (history.state.status == 3) {

      }
    }

  }
  onOtpChange(Code) {
    if (Code.length == 4) {
      this.router.navigateByUrl("/home/patients");
    }
  }

  timer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.showResend = true;
      }
    }, 1000)
  }

  resendOtp() {
    this.again = true;
    this.timeLeft = 60
    this.timer()
    this.showResend = false;
  }

}
