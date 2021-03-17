import { Component, OnInit } from '@angular/core';
import { DragoesService } from '../services/Dragoes.service';
import { Dragoes } from '../models/Dragoes';

import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-dragoes-editar',
  templateUrl: './dragoes-editar.component.html',
  styleUrls: ['./dragoes-editar.component.css']
})
export class DragoesEditarComponent implements OnInit {
  title = 'Dragões - editar';
  dragao = {} as Dragoes;
  dragoes: Dragoes[];
  loading = false;
  id;

  constructor(private dragaoService: DragoesService,  private router: Router) { }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.id = urlParams.get('id');
    this.editDragao(this.id);
  }
  cancel(): void{
    this.router.navigate(['dashboard']);
  }
  saveDragao(form: NgForm): void {
    if (this.dragao.id !== undefined) {
      this.dragaoService.updateDragao(this.dragao).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.dragaoService.saveDragao(this.dragao).subscribe(() => {
        this.cleanForm(form);
      });
    }
    this.redirectTo('dashboard');
  }
  editDragao(id): void {
    this.dragaoService.getDragaoById(id).subscribe((response) => {
      this.dragao = response;
    });
  }
  redirectTo(value): void{
    this.router.navigate([value]);
  }
  cleanForm(form: NgForm): void {
    form.resetForm();
  }

}
