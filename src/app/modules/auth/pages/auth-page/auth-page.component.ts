import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  isSpinning = false;

  constructor() {}

  enableSpinner(condition: boolean) {
    this.isSpinning = condition;
  }
}
