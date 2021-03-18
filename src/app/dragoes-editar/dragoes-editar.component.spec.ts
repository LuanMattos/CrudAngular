import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

import { DragoesEditarComponent } from './dragoes-editar.component';
import {DragoesService} from '../services/dragoes.service';


describe('DragoesEditarComponent', () => {
  let component: DragoesEditarComponent;
  let fixture: ComponentFixture<DragoesEditarComponent>;
  let service: DragoesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragoesEditarComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        DragoesService,
        FormBuilder
      ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    service = TestBed.inject( DragoesService );
    fixture = TestBed.createComponent(DragoesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('Save Dragon', () => {
  //   const spySubmit = spyOn(component, 'saveDragao').and.returnValue(null);
  //   const data = {name: 'test', type: 'test'};
  //   component.saveDragao(data);
  //   expect(spySubmit).toHaveBeenCalled();
  // });
  beforeEach(() => {
    fixture = TestBed.createComponent(DragoesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
