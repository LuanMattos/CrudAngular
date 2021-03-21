import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-submit-login',
  templateUrl: './submit-primary-login.component.html',
  styleUrls: ['./submit-primary-login.component.scss']
})
export class SubmitPrimaryLoginComponent {
  @Input() data: string;
  @Input() dis: string;
  constructor() {}


}
