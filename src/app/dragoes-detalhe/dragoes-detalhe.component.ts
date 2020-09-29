import { Component, OnInit } from '@angular/core';
import {Dragoes} from "../models/dragoes";
import { DragoesService } from '../services/Dragoes.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dragoes-detalhe',
  templateUrl: './dragoes-detalhe.component.html',
  styleUrls: ['./dragoes-detalhe.component.css']
})
export class DragoesDetalheComponent implements OnInit {
  dragao = {} as Dragoes;
  dragoes:Dragoes[];
  submitted = false;
  loading = false;
  constructor(private dragaoService: DragoesService,public router: Router,) { }

  ngOnInit(): void {
  this.getDragoes();
  }
  getDragoes() {
    this.dragaoService.getDragoes().subscribe((dragoes: Dragoes[]) => {
      this.dragoes = dragoes;
    });
  }
  deleteDragao(dragao: Dragoes) {
    this.dragaoService.deleteDragao(dragao).subscribe(() => {
      this.getDragoes();
    });
  }
  redirectToEdit(dragao: Dragoes) {
    this.router.navigate(['editar'], { queryParams: { id: dragao.id } } );
  }

}
