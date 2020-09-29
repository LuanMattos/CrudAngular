import { Component, OnInit } from '@angular/core';
import { DragoesService } from '../services/Dragoes.service';
import { Dragoes } from '../models/Dragoes';

import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-dragoes-editar',
  templateUrl: './dragoes-editar.component.html',
  styleUrls: ['./dragoes-editar.component.css']
})
export class DragoesEditarComponent implements OnInit {
  title = 'Dragões - editar';
  dragao = {} as Dragoes;

  dragoes:Dragoes[];
  submitted = false;
  loading = false;
  constructor(private dragaoService: DragoesService) { }

  ngOnInit(): void {
  }
  saveDragao(form: NgForm) {
    if (this.dragao.id !== undefined) {
      this.dragaoService.updateDragao(this.dragao).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.dragaoService.saveDragao(this.dragao).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }
  cleanForm(form: NgForm) {
    form.resetForm();
  }


}
