import { Component, OnInit } from '@angular/core';
import {Dragoes} from "../models/dragoes";
import { DragoesService } from '../services/Dragoes.service';

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
  constructor(private dragaoService: DragoesService) { }

  ngOnInit(): void {
  }
  getDragoes() {
    this.dragaoService.getDragoes().subscribe((dragoes: Dragoes[]) => {
      this.dragoes = dragoes;
    });
  }

}
