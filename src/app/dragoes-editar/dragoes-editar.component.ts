import { Component, OnInit } from '@angular/core';
import { DragoesService } from '../services/Dragoes.service';
import { Dragoes } from '../models/Dragoes';

import {NgForm} from "@angular/forms";
import { Router, ActivatedRoute} from '@angular/router';


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
  id;

  constructor(private dragaoService: DragoesService,  private router: Router,) { }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.id = urlParams.get('id');
    if(!this.id){
      alert('Erro Geral!')
    }else{
      this.editDragao(this.id);
    }
  }
  cancel(){
    this.router.navigate(['listar']);
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
    this.redirectTo('listar')
  }
  editDragao(id) {
    this.dragaoService.getDragaoById(id).subscribe((response) => {
      this.dragao = response;
    });
  }
  redirectTo(value){
    this.router.navigate([value]);
  }
  cleanForm(form: NgForm) {
    form.resetForm();
  }

}
