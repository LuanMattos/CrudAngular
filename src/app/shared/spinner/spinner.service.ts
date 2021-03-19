import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class SpinnerService {
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
