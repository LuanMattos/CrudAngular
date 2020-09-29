import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragoesEditarComponent } from './dragoes-editar.component';

describe('DragoesEditarComponent', () => {
  let component: DragoesEditarComponent;
  let fixture: ComponentFixture<DragoesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragoesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
