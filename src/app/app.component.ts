import {Component} from '@angular/core';
import { Dragoes } from './models/Dragoes';
import {User} from './models/user';
import {SpinnerService} from './shared/spinner/spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Dragões';
  dragoes: Dragoes[];
  loading = false;
  user = {} as User;
  router: string;
  id: string;

  constructor(
    public spinnerService: SpinnerService
  ) {}
}
