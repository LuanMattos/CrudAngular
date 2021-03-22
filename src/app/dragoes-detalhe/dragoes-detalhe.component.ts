import { Component, OnInit } from '@angular/core';
import {Dragoes} from '../models/dragoes';
import {DragoesService} from '../services/dragoes.service';
import {Router} from '@angular/router';
import {SpinnerService} from '../shared/spinner/spinner.service';
import {SigninService} from '../auth/signin/signin.service';


@Component({
  selector: 'app-dragoes-detalhe',
  templateUrl: './dragoes-detalhe.component.html',
  styleUrls: ['./dragoes-detalhe.component.scss']
})
export class DragoesDetalheComponent implements OnInit {
  dragoes: Dragoes[];
  loading = false;
  constructor(
    private dragaoService: DragoesService,
    public router: Router,
    private signInService: SigninService,
    private spinnerService: SpinnerService
    ) {
    this.getDragoes();
  }

  ngOnInit(): void {
    this.getDragoes();
  }
  getDragoes(): void {
    this.dragaoService.getDragoes().subscribe((dragoes: Dragoes[]) => {
      this.dragoes = dragoes;
      this.spinnerService.showSpinner.next(false);
    });
  }
  deleteDragao(dragao: Dragoes): void {
    this.dragaoService.deleteDragao(dragao).subscribe(() => {
      this.getDragoes();
      this.spinnerService.showSpinner.next(false);
    });
  }
  redirectToEdit(dragao: Dragoes): void {
    this.router.navigate(['editar'], { queryParams: { id: dragao.id } } );
  }

  addDragon(): void{
    this.router.navigate(['editar']);
  }
  logout(): void{
    this.signInService.logout();
    this.router.navigate(['']);
  }

}
