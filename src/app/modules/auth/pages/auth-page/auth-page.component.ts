import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent {
  isSpinning = false;

  constructor(public translate: TranslateService) {}
  ngOnInit() {
    this.translate.use('en');
  }

  enableSpinner(condition: boolean) {
    this.isSpinning = condition;
  }
}
