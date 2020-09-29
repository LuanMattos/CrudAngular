import {Component, OnInit} from '@angular/core';
import { DragoesService } from './services/Dragoes.service';
import { Dragoes } from './models/Dragoes';
import { NgForm } from '@angular/forms';
import {User} from "./models/user";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dragões';
  dragao = {} as Dragoes;
  dragoes:Dragoes[];
  submitted = false;
  loading = false;
  user = {} as User;
  modal = true;
  router: string;


  constructor(
    private dragaoService: DragoesService,
    public _router: Router,
  ) {
    this.router = _router.url;
  }

  ngOnInit() {
    this.getDragoes();
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
  editDragao(dragao: Dragoes) {
    this.dragao = { ...dragao };
  }
  cleanForm(form: NgForm) {
    this.getDragoes();
    form.resetForm();
   // dragao = {} as Dragoes;
  }
  startToLogin(){
    this._router.navigate(['login']);
  }
  hasRoute() {
    return this._router.url == '/';
  }

}
