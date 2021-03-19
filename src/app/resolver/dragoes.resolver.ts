import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Dragoes} from '../models/dragoes';
import {DragoesService} from '../services/dragoes.service';


@Injectable({providedIn: 'root'})

export class DragoesResolver implements Resolve<Observable<Dragoes[]>>{

  constructor(private router: Router, private dragaoService: DragoesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dragoes[]>{
      this.dragaoService.getDragoes();
      return this.dragaoService.getDragoes();
  }
}
