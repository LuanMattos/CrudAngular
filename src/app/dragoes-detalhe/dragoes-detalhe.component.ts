import { Component, OnInit } from '@angular/core';
import {Dragoes} from '../models/dragoes';
import {DragoesService} from '../services/Dragoes.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dragoes-detalhe',
  templateUrl: './dragoes-detalhe.component.html',
  styleUrls: ['./dragoes-detalhe.component.scss']
})
export class DragoesDetalheComponent implements OnInit {
  dragoes: Dragoes[];
  submitted = false;
  loading = false;
  constructor(
    private dragaoService: DragoesService,
    public router: Router) {
    this.getDragoes();
  }

  ngOnInit(): void {
  this.getDragoes();

  }
  getDragoes(): void {
    this.dragaoService.getDragoes().subscribe((dragoes: Dragoes[]) => {
      this.dragoes = dragoes;
    });
  }
  deleteDragao(dragao: Dragoes): void {
    this.dragaoService.deleteDragao(dragao).subscribe(() => {
      this.getDragoes();
    });
  }
  redirectToEdit(dragao: Dragoes): void {
    this.router.navigate(['editar'], { queryParams: { id: dragao.id } } );
  }
  // sortData() {
  //   const data = this.dragoes.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.dragoes = data;
  //     return;
  //   }
  //
  //   this.dragoes = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'type': return compare(a.type, b.type, isAsc);
  //       default: return 0;
  //     }
  //   });
  //   function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  //     return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  //   }
  // }
  addDragon(): void{
    this.router.navigate(['editar']);
  }
  close(): void{
    localStorage.setItem('auth', 'b');
    this.router.navigate(['login']);
  }

}
